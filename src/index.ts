import {LinkSession, LinkTransport} from 'anchor-link'
import {SigningRequest} from 'eosio-signing-request'
import * as qrcode from 'qrcode'
import styleText from './styles'

export interface BrowserTransportOptions {
    /** CSS class prefix, defaults to `anchor-link` */
    classPrefix?: string
    /** Whether to inject CSS styles in the page header, defaults to true. */
    injectStyles?: boolean
}

let usingLocalWallet: boolean = false;

export default class BrowserTransport implements LinkTransport {
    constructor(public readonly options: BrowserTransportOptions = {}) {
        this.classPrefix = options.classPrefix || 'anchor-link'
        this.injectStyles = !(options.injectStyles === false)
    }

    private classPrefix: string
    private injectStyles: boolean
    private activeRequest?: SigningRequest
    private activeCancel?: (reason: string | Error) => void
    private containerEl!: HTMLElement
    private requestEl!: HTMLElement
    private styleEl?: HTMLStyleElement
    private countdownTimer?: NodeJS.Timeout

    private setupElements() {
        if (this.injectStyles && !this.styleEl) {
            this.styleEl = document.createElement('style')
            this.styleEl.type = 'text/css'
            const css = styleText.replace(/%prefix%/g, this.classPrefix)
            this.styleEl.appendChild(document.createTextNode(css))
            document.head.appendChild(this.styleEl)
        }
        if (!this.containerEl) {
            this.containerEl = this.createEl()
            this.containerEl.className = this.classPrefix
            this.containerEl.style.display = 'hidden'
            this.containerEl.onclick = (event) => {
                if (event.target === this.containerEl) {
                    event.stopPropagation()
                    this.hide()
                    if (this.activeCancel) {
                        this.activeRequest = undefined
                        this.activeCancel('Modal closed')
                    }
                }
            }
            document.body.appendChild(this.containerEl)
        }
        if (!this.requestEl) {
            this.requestEl = this.createEl({class: 'request'})
            this.containerEl.appendChild(this.requestEl)
        }
    }

    private createEl(attrs?: {[key: string]: string}) {
        if (!attrs) attrs = {}
        const el = document.createElement(attrs.tag || 'div')
        if (attrs) {
            for (const attr of Object.keys(attrs)) {
                const value = attrs[attr]
                switch (attr) {
                    case 'tag':
                        break
                    case 'text':
                        el.appendChild(document.createTextNode(value))
                        break
                    case 'class':
                        el.className = `${this.classPrefix}-${value}`
                        break
                    default:
                        el.setAttribute(attr, value)
                }
            }
        }
        return el
    }

    private hide() {
        if (this.containerEl) {
            this.containerEl.classList.remove(`${this.classPrefix}-active`)
        }
        if (this.countdownTimer) {
            clearTimeout(this.countdownTimer)
            this.countdownTimer = undefined
        }
    }

    private show() {
        if (this.containerEl) {
            this.containerEl.classList.add(`${this.classPrefix}-active`)
        }
    }

    private async processRequest(request: SigningRequest) {
        this.setupElements()

        const uri = request.encode(true, false)

        if (usingLocalWallet) {
            return (window.location.href = uri);
        }

        const isIdentity = request.isIdentity()
        const title = isIdentity ? 'Log In' : 'Sign'
        const subtitle = 'Scan this QR code in Anchor to continue'

        const qrEl = this.createEl({class: 'qr'})
        qrEl.innerHTML = await qrcode.toString(uri, {
            margin: 0,
            errorCorrectionLevel: 'L',
        })

        const linkEl = this.createEl({class: 'uri'})
        const aElement = this.createEl({
            tag: 'a',
            href: uri,
            text: 'Open in local wallet',
        });
        aElement.addEventListener('click', () => {
            usingLocalWallet = true;
        });
        linkEl.appendChild(aElement);

        const infoEl = this.createEl({class: 'info'})
        const infoTitle = this.createEl({class: 'title', tag: 'span', text: title})
        const infoSubtitle = this.createEl({class: 'subtitle', tag: 'span', text: subtitle})
        infoEl.appendChild(infoTitle)
        infoEl.appendChild(infoSubtitle)

        const actionEl = this.createEl({class: 'actions'})
        actionEl.appendChild(qrEl)
        actionEl.appendChild(linkEl)

        emptyElement(this.requestEl)
        this.requestEl.appendChild(infoEl)
        this.requestEl.appendChild(actionEl)

        this.show()
    }

    public onRequest(request: SigningRequest, cancel: (reason: string | Error) => void) {
        this.activeRequest = request
        this.activeCancel = cancel
        this.processRequest(request).catch(cancel)
    }

    public onSessionRequest(
        session: LinkSession,
        request: SigningRequest,
        timeout: number,
        device: string,
        cancel: (reason: string | Error) => void
    ) {
        this.activeRequest = request
        this.activeCancel = cancel
        this.setupElements()

        const start = Date.now()
        const countdownEl = this.createEl({class: 'session-countdown'})
        const updateCountdown = () => {
            const timeLeft = timeout + start - Date.now()
            countdownEl.textContent = new Date(timeLeft).toISOString().substr(14, 5)
        }
        this.countdownTimer = setInterval(updateCountdown, 300)
        updateCountdown()

        const infoEl = this.createEl({class: 'session-info'})
        infoEl.appendChild(document.createTextNode('Please open Anchor on '))
        infoEl.appendChild(this.createEl({tag: 'span', class: 'device', text: device}))
        infoEl.appendChild(document.createTextNode(' to review and sign the transaction.'))

        emptyElement(this.requestEl)
        this.requestEl.appendChild(infoEl)
        this.requestEl.appendChild(countdownEl)
        this.show()
    }

    public onSuccess(request: SigningRequest) {
        if (request === this.activeRequest) {
            this.hide()
        }
    }

    public onFailure(request: SigningRequest, error: Error) {
        if (request === this.activeRequest) {
            this.setupElements()
            const errorEl = this.createEl({class: 'error'})
            errorEl.innerHTML = `
                Transaction error: ${error.message || String(error)}
            `
            emptyElement(this.requestEl)
            this.requestEl.appendChild(errorEl)
            this.show()
        }
    }
}

function emptyElement(el: HTMLElement) {
    while (el.firstChild) {
        el.removeChild(el.firstChild)
    }
}
