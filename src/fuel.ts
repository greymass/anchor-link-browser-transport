import type {LinkSession} from 'anchor-link'
import {Signature, SigningRequest} from 'anchor-link'

const supportedChains = {
    'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906':
        'https://eos.greymass.com',
    '2a02a0053e5a8cf73a56ba0fda11e4d92e0238a4a2aa74fccf46d5a910746840':
        'https://jungle3.greymass.com',
    '4667b205c6838ef70ff7988f6e8257e8be0e1284a2f59699054a018f743b1d11':
        'https://telos.greymass.com',
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

export async function fuel(
    request: SigningRequest,
    session: LinkSession,
    updatePrepareStatus: (message: string) => void,
    fuelReferrer: string = 'teamgreymass'
) {
    updatePrepareStatus('Detecting if Fuel is required.')
    const chainId = request.getChainId()
    const nodeUrl = supportedChains[String(chainId)]
    if (!nodeUrl) {
        throw new Error('Chain does not support Fuel.')
    }
    const result = await apiCall(nodeUrl + '/v1/resource_provider/sign_transaction', {
        ref: fuelReferrer,
        request,
        signer: session.auth,
    })
    if (!result || !result.data) {
        throw new Error('Invalid response from cosigner.')
    }
    if (!result.data.signatures || !result.data.signatures[0]) {
        throw new Error('No signature returned from cosigner.')
    }
    if (result.code === 402 && !result.data.fee) {
        throw new Error('Returned response indicating required payment, but provided no fee amount.')
    }
    // Clone the request for modification
    const cloned = request.clone()
    // Set the required fee onto the request for signature providers
    if (result.code === 402) {
        cloned.setInfoKey('txfee', result.data.fee)
    }
    // Set the cosigner signature onto the request for signature providers
    cloned.setInfoKey('cosig', Signature.from(result.data.signatures[0]))
    // Modify the request based on the response from the API
    cloned.data.req = (
        await SigningRequest.create(
            {transaction: result.data.request[1]},
            {abiProvider: (request as any).abiProvider}
        )
    ).data.req.value
    return cloned
}
