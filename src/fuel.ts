import {LinkSession} from 'anchor-link'
import {SigningRequest} from 'eosio-signing-request'

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
        throw new Error('Chain does not support Fuel.')
    }
    const result = await apiCall(nodeUrl + '/v1/cosigner/sign', {
        request: request,
        signer: session.auth,
    })
    if (result.data.signatures[0]) {
        request.setInfoKey('fuel_sig', result.data.signatures[0])
    } else {
        throw new Error('No signature returned from Fuel')
    }
    // ok to mutate request here, prependAction took a copy
    request.data.req = result.data.request
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
