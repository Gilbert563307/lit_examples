
import { html, LitElement } from "lit";
import { userService } from "../services/user-service";
import { dataSubjectUserService } from "../services/data-subject-user-service";

export class DataListItem extends LitElement {
    constructor() {
        super();
        this.data = {};
        this.editHandler = this.editHandler.bind(this);
        this.deleteHandler = this.deleteHandler.bind(this);
    }

    static properties = {
        data: { type: Object }
    }

   
    async editHandler() {
        console.log("editHandler")
    }

    async deleteHandler() {
        await userService.deleteUser(this.data.id);
        const users = await userService.getUsers();
        dataSubjectUserService.addData(users);
    }

    render() {
        return html`
            <div>
                <p>${this.data.name}</p>
                <p>${this.data.phoneNumber}</p>
                <p>${this.data.email}</p>
                <button @click=${this.editHandler}>edit</button>
                <button @click=${this.deleteHandler}>delete</button>
            </div>
        `;
    }


}
customElements.define("data-list-item", DataListItem);