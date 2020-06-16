import {SigningRequest} from 'eosio-signing-request'
import {LinkSession} from 'anchor-link'

const supportedChains = {
    '2a02a0053e5a8cf73a56ba0fda11e4d92e0238a4a2aa74fccf46d5a910746840':
        'https://jungle3.greymass.com',
}

async function apiCall(url: string, body?: any) {
    return (
        await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: body ? JSON.stringify(body) : undefined,
        })
    ).json()
}

export async function fuel(request: SigningRequest, session: LinkSession) {
    const chainId = request.getChainId()
    const nodeUrl = supportedChains[chainId]
    if (!nodeUrl) {
        throw new Error('Chain not supported')
    }
    // check if account needs fuel
    const accountObj = await apiCall(nodeUrl + '/v1/chain/get_account', {
        account_name: session.auth.actor,
    })
    if (!(accountObj.net_limit && accountObj.net_limit.available < 5000)) {
        throw new Error('Fuel not needed')
    }
    // resolve transaction
    request = prependAction(request, {
        account: 'greymassnoop',
        name: 'noop',
        authorization: [{actor: 'greymassfuel', permission: 'cosign'}],
        data: '',
    })
    const abis = await request.fetchAbis()
    let ctx: any
    if (request.requiresTapos()) {
        ctx = createTapos(await apiCall(nodeUrl + '/v1/chain/get_info'))
    }
    const resolved = request.resolve(abis, session.auth, ctx)
    // get fuel signature
    const result = await apiCall(nodeUrl + '/v1/fuel/get_signature', {
        signatures: [],
        compression: 0,
        packed_context_free_data: '',
        packed_trx: arrayToHex(resolved.serializedTransaction),
    })
    if (result.data.signatures[0]) {
        request.setInfoKey('fuel_sig', result.data.signatures[0])
    } else {
        throw new Error('No signature from fuel')
    }
    // hack so we don't have to bundle the ESR lib with the transport
    const SR = request.constructor as typeof SigningRequest
    // ok to mutate request here, prependAction took a copy
    request.data = (
        await SR.create(
            {transaction: resolved.transaction},
            {abiProvider: (request as any).abiProvider}
        )
    ).data
    return request
}

function createTapos(info: any, expireInSeconds: number = 120) {
    return {
        ref_block_num: info.last_irreversible_block_num & 0xffff,
        ref_block_prefix: getBlockPrefix(info.last_irreversible_block_id),
        expiration: getExpiration(expireInSeconds),
    }
}

function reverseNibbles(hex: string) {
    const rv: any = []
    for (let i = hex.length - 1; i > 0; i -= 2) {
        rv.push(hex[i - 1] + hex[i])
    }
    return rv.join('')
}

function getBlockPrefix(blockIdHex: string) {
    const hex = reverseNibbles(blockIdHex.substring(16, 24))
    return parseInt(hex, 16)
}

function getExpiration(expireInSeconds: number = 120): string {
    const currentDate = new Date()
    const timePlus = currentDate.getTime() + expireInSeconds * 1000
    const timeInISOString = new Date(timePlus).toISOString()
    return timeInISOString.substr(0, timeInISOString.length - 1)
}

function prependAction(request: SigningRequest, action: any): SigningRequest {
    request = request.clone()
    switch (request.data.req[0]) {
        case 'action':
            request.data.req = ['action[]', [action, request.data.req[1]]]
            break
        case 'action[]':
            request.data.req = ['action[]', [action, ...request.data.req[1]]]
            break
        case 'transaction':
            const transaction = request.data.req[1]
            const actions = [action, ...transaction.actions]
            request.data.req = [
                'transaction',
                {
                    ...transaction,
                    actions,
                },
            ]
    }
    return request
}

function arrayToHex(data: Uint8Array) {
    let result = ''
    for (const x of data) {
        result += ('00' + x.toString(16)).slice(-2)
    }
    return result
}
