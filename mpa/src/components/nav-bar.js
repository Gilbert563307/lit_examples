import { html, LitElement } from "lit";
import { userService } from "../service/user-service";

export class NavBar extends LitElement {
    constructor() {
        super();
        this.isLoggedIn = false;
    }

    static properties = {
        isLoggedIn: { type: Boolean }
    }

    connectedCallback() {
        super.connectedCallback();
        this.isLoggedIn = userService.isLoggendIn();
    }

    render() {
        return html`
            <nav>
                <ul>
                    <a href="./home-page.html"> home</a>
                    <a href="./profile-page.html"> Profile</a>
                    <a href="./login-page.html"> Login</a>
                    ${this.isLoggedIn ? html`<a href="./select-page.html"> Admin select page</a>` : html` <a href="/logout">Logout</a>`}
                </ul>
            </nav>
        `;
    }
}

customElements.define("nav-bar", NavBar);