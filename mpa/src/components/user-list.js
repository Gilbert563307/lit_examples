import { html, LitElement } from "lit";

export class UserList extends LitElement {

   

    render() {
        return html`
            <article>
                <p>Userlist</p>
            </article>
        `;
    }
}

customElements.define("user-list", UserList);