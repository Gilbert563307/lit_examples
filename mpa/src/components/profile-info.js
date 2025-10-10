import { html, LitElement } from "lit";

export class ProfileInfo extends LitElement {
    constructor() {
        super();
    }

    render() {
        return html`
            <article>
                <p>Profile</p>
            </article>
        `;
    }
}

customElements.define("profile-info", ProfileInfo);