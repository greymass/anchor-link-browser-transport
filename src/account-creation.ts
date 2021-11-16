import { NameType } from '@greymass/eosio'

export interface AccountCreationOptions {
    /**
     * Override of the supported resource provider chains.
     */
    scope: NameType

    supportedChains?: Record<string, string>

    loginOnCreate?: boolean

    returnUrl?: string
}

const accountCreationUrl = 'http://192.168.1.66:3000'; //'http://10.0.2.2:3000' //'http://localhost:3000' //'https://create.anchor.link';

export class AccountCreation {
    /** Package version. */
    static version = '__ver' // replaced by build script

    private popupWindow?: Window

    private scope: NameType
    private supportedChains?: Record<string, string>
    private loginOnCreate?: boolean
    private returnUrl?: string

    constructor(public readonly options: AccountCreationOptions = {}) {
        this.supportedChains = options.supportedChains
        this.scope = options.scope
        this.loginOnCreate = options.loginOnCreate
        this.returnUrl = options.returnUrl
    }

    async createAccount() {
        const supportedChains = this.supportedChains && `supported_chains=${
          Object.keys(this.supportedChains).join(',')
        }`;
        const popupWindowUrl =
            `${
              accountCreationUrl
            }/create?${
                `supported_chains=${supportedChains || ''}`
            }${
                `&scope=${this.scope}`
            }${
                `&return_url=${this.returnUrl || ''}`
            }${
              this.loginOnCreate ? '&login_on_create=true' : ''
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
            window.addEventListener("message", (event) => {
                // if (event.origin !== accountCreationUrl) {
                //     return;
                // }

                console.log({data: event.data});

                if (event.data.status === 'success') {
                    resolve({
                        actor: event.data.actor,
                        network: event.data.network,
                        identityProof: event.data.identity_proof,
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
