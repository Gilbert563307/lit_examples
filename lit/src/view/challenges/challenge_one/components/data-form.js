import { html, LitElement } from "lit";
import { userService } from "../services/user-service";


//https://github.com/HU-SD-S3/s3-kennisbank/blob/main/frontend/data-exchange/challenges.md
export class DataForm extends LitElement {
    constructor() {
        super();
        this.submitHandler = this.submitHandler.bind(this);
        this.data = [];
        this.scope = document
    }

    static properties = {
        data: { type: Array }
    }

    
    async submitHandler(event) {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);

        //Integrate JSON-Server to store the data, ensuring that only the service layer communicates with the JSON-Server.
        // this.data = [...this.data, data];

        //Data Exchange:
        //Refactor the code to use events for data exchange between the components.
        // const customEvent = new CustomEvent("custom-event-dispatched", {
        //     detail: this.data,
        //     bubbles: true,
        //     composed: true,
        // });

        // this.scope.dispatchEvent(customEvent);


        //Integrate JSON-Server to store the data, ensuring that only the service layer communicates with the JSON-Server.
        await userService.saveUser(data);
    }

    render() {
        return html`
        <fieldset>
            <!-- Use the mediator pattern to exchange data between the two components. -->
            <form @submit=${this.submitHandler}>
            <label for="name">Name</label>
            <input type="text" id="name" name="name" />

            <label for="name">phone number,</label>
            <input type="text" id="phoneNumber" name="phoneNumber" />

              <label for="name">email address</label>
            <input type="text" id="email" name="email" />

            <input type="submit" name="submit" value="submit">
            </form>
            <!-- Use the mediator pattern to exchange data between the two components. -->
             <!-- <data-list .data=${this.data}></data-list> -->

             <!-- Refactor the code to use events for data exchange between the components. -->
              <data-list></data-list> 
        </fieldset>
        
        `;
    }
}
customElements.define("data-form", DataForm);