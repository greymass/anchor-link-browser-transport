
export interface AccountCreationOptions {
    /**
     * Override of the supported resource provider chains.
     */
    supportedChains?: Record<string, string>

    loginRequest?: string
}

export class AccountCreation {
    /** Package version. */
    static version = '__ver' // replaced by build script

    private popupWindow?: Window
    private supportedChains?: Record<string, string>
    private loginRequest?: string

    constructor(public readonly options: AccountCreationOptions = {}) {
        this.supportedChains = options.supportedChains
        this.loginRequest = options.loginRequest
    }

    showDialog() {
        const popupWindowUrl =
            `https://create.anchor.link?skip_intro=true&supported_chains=${this.supportedChains}&login_request=${this.loginRequest}`

        this.popupWindow = window.open(popupWindowUrl)!
    }

    closeDialog() {
        this.popupWindow && this.popupWindow.close()
    }
}
