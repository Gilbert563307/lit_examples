import { html, LitElement } from "lit";
import { userService } from "../service/user-service";

export class SelectUser extends LitElement {
    static properties = {
        users: { type: Array },
    };

    constructor() {
        super();
        this.users = [];
    }

    connectedCallback() {
        super.connectedCallback();
        console.log("called")
        userService.getUsers().then((users) => {
            this.users = [...users];

        })
    }
    clickHandler(event) {
        event.preventDefault();
        userService.signIn(event.target.value);
        window.location.href = "/home-page";
    }

    //${
    //this.users.map((user) => {
    //   return html`<option value=${user.id}>${user.name}</option>`
    //})
    //} this wont work

    render() {
        return html`
      <article>
        <select @change=${this.clickHandler}>   
          ${this.users.map(
            user => html`<option value=${user.id}>${user.name}</option>`
        )}
        </select>
      </article>
    `;
    }
}

customElements.define("select-user", SelectUser);
