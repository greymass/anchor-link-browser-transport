import type {LinkSession} from 'anchor-link'
import {Signature, SigningRequest} from 'anchor-link'

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
    supportedChains,
    fuelReferrer = 'teamgreymass'
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
            {transaction: {...result.data.request[1]}},
            {abiProvider: (request as any).abiProvider}
        )
    ).data.req
    return cloned
}
