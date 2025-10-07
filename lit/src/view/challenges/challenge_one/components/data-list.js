

import { html, LitElement } from "lit";
import "../components/data-list-item.js";
import { dataSubjectUserService } from "../services/data-subject-user-service.js";
import { userService } from "../services/user-service.js";

export class DataList extends LitElement {

    static properties = {
        data: { type: Array }
    }

    constructor() {
        super();
        this.data = [];
        this.next = this.next.bind(this);
        this.observer = {
            next: this.next
        }
        this.scope = document;
        // this.customEventHandler = this.customEventHandler.bind(this);
    }

    next(data) {
        this.data = [...data[0]];
    }

    async fetchData() {
        await userService.getUsers();
    }

    connectedCallback() {
        super.connectedCallback();
        // this.scope.addEventListener("custom-event-dispatched", this.customEventHandler)


        dataSubjectUserService.subscribe(this.observer);
    }

    disconnectedCallback() {
        // this.scope.removeEventListener("custom-event-dispatched", this.customEventHandler)
        dataSubjectUserService.unsubscribe(this.observer);
        super.disconnectedCallback();
    }

    customEventHandler(event) {
        console.log(event);
        event.preventDefault();
        this.data = event.detail;
    }

    render() {
        return html`
            <article>
                <p>Entries</p>
                <div>
                ${this.data.map((obj) => html`
                        <data-list-item .data=${obj}></data-list-item>
                    `)}
                </div>
            </article>
        `;
    }
}
customElements.define("data-list", DataList);