import { html, LitElement } from "lit";
import { userService } from "../service/user-service";

export class WelcomeMessage extends LitElement {
    constructor() {
        super();
        this.user = {};
    }

    static properties = {
        user: { type: Object }
    }

    connectedCallback() {
        super.connectedCallback();
        userService.getCurrentUser().then((user) => {
            this.user = user;
            console.log(user)
        });
    }

    render() {
        return html`
            <section>
                <p>
                 WelcomeMessage ${this.user?.name}
                </p>
            </section>
        `;
    }
}

customElements.define("welcome-message", WelcomeMessage);