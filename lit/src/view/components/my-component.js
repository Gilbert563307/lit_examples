// https://s3-kennisbank.tomkemper.nl/frontend/data-exchange/attributes-based-communication.html
import { LitElement, html } from 'lit';

export class MyComponent extends LitElement {
    static get properties() {
        return {
            value: { type: String },
        };
    }

    constructor() {
        super();
        this.value = 'Suske';
    }

    //     Running this code will show an input tag with the value “Suske” and a paragraph tag with the text “current value: Suske”.
    // However if we change the value of the input tag form “Suske” to “Wiske”, the paragraph tag will not update. This is called one-way data binding. The data flows from the component to the input tag, but not the other way around.

    // If we want to update the content of the value property variable when the user changes the value of the input tag, we have to add an event listener to the input tag, that listens to changes on the input tag. So our code would then look like this:
    _onInput(event) {
        this.value = event.target.value;
    }

    render() {
        return html`
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" @input=${this._onInput} value="${this.value}" />

      <p>current value: ${this.value}</p>
    `;
    }
}

customElements.define('my-component', MyComponent);