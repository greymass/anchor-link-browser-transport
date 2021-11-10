import { NameType } from '@greymass/eosio'

export interface AccountCreationOptions {
    /**
     * Override of the supported resource provider chains.
     */
    scope: NameType

    supportedChains?: Record<string, string>

    loginOnCreate?: boolean
}

const accountCreationUrl =  'http://localhost:3000' //'https://create.anchor.link';

export class AccountCreation {
    /** Package version. */
    static version = '__ver' // replaced by build script

    private popupWindow?: Window

    private scope: NameType
    private supportedChains?: Record<string, string>
    private loginOnCreate?: boolean

    constructor(public readonly options: AccountCreationOptions = {}) {
        this.supportedChains = options.supportedChains
        this.scope = options.scope
    }

    async createAccount() {
        const supportedChains = this.supportedChains && `supported_chains=${
          Object.keys(this.supportedChains).join(',')
        }`;
        const popupWindowUrl =
            `${
              accountCreationUrl
            }/create?${
                supportedChains || ''
            }${
              this.loginOnCreate ? '&login_on_create=true' : ''
            }${
              `&scope=${this.scope}`
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
        )!;

        return new Promise(resolve => {
            this.popupWindow.addEventListener("message", (event) => {
                if (event.origin !== accountCreationUrl) {
                    return;
                }

                if (event.data.success) {
                    resolve({
                        account: event.data.account,
                        chainId: event.data.chainId,
                        identityRequest: event.data.identityRequest,
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
