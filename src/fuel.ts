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
    supportedChains: Record<string, string>,
    referrer: string
) {
    updatePrepareStatus('Detecting if network resources are required.')
    const chainId = request.getChainId()
    const nodeUrl = supportedChains[String(chainId)]
    if (!nodeUrl) {
        throw new Error(`Blockchain not supported by this resource provider.`)
    }
    const result = await apiCall(nodeUrl + '/v1/resource_provider/request_transaction', {
        ref: referrer,
        request,
        signer: session.auth,
    })
    if (!result || !result.data) {
        throw new Error('Invalid response from resource provider.')
    }
    if (!result.data.signatures || !result.data.signatures[0]) {
        throw new Error('No signature returned from resource provider.')
    }
    if (result.code === 402 && !result.data.fee) {
        throw new Error(
            'Resource provider returned a response indicating required payment, but provided no fee amount.'
        )
    }
    // Clone the request for modification
    const cloned = request.clone()
    // Set the required fee onto the request for signature providers
    if (result.code === 402) {
        cloned.setInfoKey('txfee', result.data.fee)
    }
    // If the fee costs exist, set them on the request for the signature provider to consume
    if (result.data.costs) {
        cloned.setInfoKey('txfeecpu', result.data.costs.cpu)
        cloned.setInfoKey('txfeenet', result.data.costs.net)
        cloned.setInfoKey('txfeeram', result.data.costs.ram)
    }
    // Set the cosigner signature onto the request for signature providers
    const signatures = result.data.signatures.map((s) => Signature.from(s))
    cloned.setInfoKey('cosig', signatures, {type: Signature, array: true})
    // Modify the request based on the response from the API
    cloned.data.req = (
        await SigningRequest.create(
            {transaction: {...result.data.request[1]}},
            {abiProvider: (request as any).abiProvider}
        )
    ).data.req
    return cloned
}
