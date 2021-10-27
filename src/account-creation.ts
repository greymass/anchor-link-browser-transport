
export interface AccountCreationOptions {
    /**
     * Override of the supported resource provider chains.
     */
    supportedChains?: Record<string, string>
}

export class AccountCreation {
    /** Package version. */
    static version = '__ver' // replaced by build script

    private popupWindow?: Window
    private supportedChains?: Record<string, string>

    constructor(public readonly options: AccountCreationOptions = {}) {
        this.supportedChains = options.supportedChains
    }

    showDialog() {
        const popupWindowUrl = `https://create.anchor.link?iframe=true&skip_intro=true&supported_chains=${this.supportedChains}`

        this.popupWindow = window.open(popupWindowUrl)!
    }

    closeDialog() {
        this.popupWindow && this.popupWindow.close()
    }
}
