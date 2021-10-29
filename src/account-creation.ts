
export interface AccountCreationOptions {
    /**
     * Override of the supported resource provider chains.
     */
    supportedChains?: Record<string, string>

    loginRequest?: string
}

const accountCreationUrl = 'https://create.anchor.link';

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

    async createAccount() {
        const popupWindowUrl =
            `${
              accountCreationUrl
            }?skip_intro=true&supported_chains=${
              this.supportedChains
            }&login_request=${
              this.loginRequest
            }`;

        this.popupWindow = window.open(
            popupWindowUrl,
            'targetWindow',
            `toolbar=no,
            location=no,
            status=no,
            menubar=no,
            scrollbars=yes,
            resizable=yes,
            width=400,
            height=600`
        );

        return new Promise(resolve => {
            this.popupWindow.addEventListener("message", (event) => {
                if (event.origin !== accountCreationUrl) {
                    return;
                }

                if (event.data.success) {
                    resolve({
                        identityRequest: event.data.identityRequest
                    });
                } else {
                    resolve({
                        error: event.data.error || 'An error occurred during the account creation process.'
                    });
                }

                this.popupWindow.close();
            }, false);
        });


    }

    closeDialog() {
        this.popupWindow && this.popupWindow.close()
    }
}
