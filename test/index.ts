/* eslint-disable no-console */

import {AnyAction} from 'anchor-link'
import Link from 'anchor-link'

import BrowserTransport from './transport'

const appId = 'trans.test'

const transport = new BrowserTransport()

const link = new Link({
    chainId: '2a02a0053e5a8cf73a56ba0fda11e4d92e0238a4a2aa74fccf46d5a910746840',
    transport,
    client: 'https://jungle3.greymass.com',
    service: 'https://link.dirty.fish',
})

async function main() {
    let session = await link.restoreSession(appId)
    if (!session) {
        const result = await link.login(appId)
        console.log('logged in', result.account)
        session = result.session
    }
    console.log('session', session)

    const app = document.getElementById('app')
    app.innerHTML = `
        Logged in as <b>${session.auth.actor}@${session.auth.permission}</b><br>
        <hr>
        <div id="actions"></div>
        <div style="padding-top: 1em"><code id="log"></code><div>
    `
    const log = app.querySelector('#log')!

    const logoutButton = document.createElement('button')
    logoutButton.textContent = '🦞 log out'
    logoutButton.onclick = () => {
        app.innerHTML = 'Logging out...'
        session.remove().then(() => {
            app.innerHTML = 'Logged out, refresh page to login again'
        })
    }

    const fuelCheck = document.createElement('input')
    fuelCheck.type = 'checkbox'
    fuelCheck.id = 'use-fuel'

    const fuelLabel = document.createElement('label')
    fuelLabel.htmlFor = 'use-fuel'
    fuelLabel.appendChild(fuelCheck)
    fuelLabel.appendChild(document.createTextNode('⛽️'))

    const actionButton = document.createElement('button')
    actionButton.textContent = '💰 teamgreymass'
    actionButton.onclick = () => {
        actionButton.disabled = true
        const actions: AnyAction[] = [
            {
                account: 'eosio.token',
                name: 'transfer',
                authorization: [session.auth],
                data: {
                    from: session.auth.actor,
                    to: 'teamgreymass',
                    quantity: '0.0042 EOS',
                    memo: 'grey money',
                },
            },
        ]
        if (fuelCheck.checked) {
            actions.unshift({
                account: 'greymassnoop',
                name: 'noop',
                authorization: [
                    {
                        actor: 'greymassfuel',
                        permission: 'cosign',
                    },
                ],
                data: {},
            })
        }
        session
            .transact({actions}, {broadcast: true})
            .then((result) => {
                console.log('tx', result.processed)
                const {id} = result.processed
                log.innerHTML += `
                    Transaction sent!
                    <a href="https://jungle.bloks.io/transaction/${id}" target="_blank">${id}</a>
                    <br>
                `
            })
            .catch((error) => {
                console.log('transact error', error)
                log.innerHTML += `
                    Error: ${error.message || String(error)}
                    <br>
                `
            })
            .finally(() => {
                actionButton.disabled = false
            })
    }

    const actions = app.querySelector('#actions')
    actions.appendChild(fuelLabel)
    actions.appendChild(actionButton)
    actions.appendChild(logoutButton)
    actions.appendChild(document.createElement('br'))
}

window.addEventListener('DOMContentLoaded', () => {
    main().catch((error) => {
        console.error(error)
        document.querySelector('#app')!.innerHTML = error.message || String(error)
    })
})
