
import styleText from './styles'

export interface AccountCreationOptions {
    /** CSS class prefix, defaults to `anchor-link` */
    classPrefix?: string
    /** Whether to inject CSS styles in the page header, defaults to true. */
    injectStyles?: boolean

    /**
     * Set to false to not use !important styles, defaults to true.
     */
    importantStyles?: boolean
}

export class AccountCreation {
    /** Package version. */
    static version = '__ver' // replaced by build script

    constructor(public readonly options: AccountCreationOptions = {}) {
        this.classPrefix = options.classPrefix || 'anchor-link-create'
        this.injectStyles = !(options.injectStyles === false)
        this.importantStyles = !(options.importantStyles === false)
        this.showingManual = false
    }

    private classPrefix: string
    private injectStyles: boolean
    private importantStyles: boolean
    private containerEl!: HTMLElement
    private accountCreationEl!: HTMLElement
    private styleEl?: HTMLStyleElement
    private showingManual: boolean

    showDialog() {
        this.setupElements()

        const logoEl = this.createEl({class: 'logo'})

        const iframeSrc = `https://create.anchor.link?iframe=true&skip_intro=true`

        const iframeElement = this.createEl({ class: 'iframe-container', tag: 'iframe', src: iframeSrc })

        emptyElement(this.accountCreationEl)
        this.accountCreationEl.appendChild(logoEl)
        this.accountCreationEl.appendChild(iframeElement)

        this.show()
    }

    closeModal() {
        this.hide()
    }

    private setupElements() {
        this.showingManual = false
        if (this.injectStyles && !this.styleEl) {
            this.styleEl = document.createElement('style')
            this.styleEl.type = 'text/css'
            let css = styleText.replace(/%prefix%/g, this.classPrefix)
            if (this.importantStyles) {
                css = css
                    .split('\n')
                    .map((line) => line.replace(/;$/i, ' !important;'))
                    .join('\n')
            }
            this.styleEl.appendChild(document.createTextNode(css))
            document.head.appendChild(this.styleEl)
        }
        if (!this.containerEl) {
            this.containerEl = this.createEl()
            this.containerEl.className = this.classPrefix
            this.containerEl.onclick = (event) => {
                if (event.target === this.containerEl) {
                    event.stopPropagation()
                    this.closeModal()
                }
            }
            document.body.appendChild(this.containerEl)
        }
        if (!this.accountCreationEl) {
            const wrapper = this.createEl({class: 'inner'})
            const closeButton = this.createEl({class: 'close'})
            closeButton.onclick = (event) => {
                event.stopPropagation()
                this.closeModal()
            }
            this.accountCreationEl = this.createEl({class: 'account-creation'})
            wrapper.appendChild(this.accountCreationEl)
            wrapper.appendChild(closeButton)
            const version = this.createEl({
                class: 'version',
                text: AccountCreation.version,
            })
            version.onclick = (event) => {
                event.stopPropagation()
                window.open('https://github.com/greymass/anchor-link', '_blank')
            }
            wrapper.appendChild(version)
            this.containerEl.appendChild(wrapper)
        }
    }

    private createEl(attrs?: {[key: string]: any}): HTMLElement {
        const el = document.createElement((attrs && attrs.tag) || 'div')

        attrs && Object.keys(attrs).forEach(attrKey => {
            if (attrKey === 'tag') {
                return;
            }

            el.setAttribute(attrKey, attrs[attrKey])
        });

        return el
    }

    private hide() {
        if (this.containerEl) {
            this.containerEl.classList.remove(`${this.classPrefix}-active`)
        }
    }

    private show() {
        if (this.containerEl) {
            this.containerEl.classList.add(`${this.classPrefix}-active`)
        }
    }
}

function emptyElement(el: HTMLElement) {
    while (el.firstChild) {
        el.removeChild(el.firstChild)
    }
}
