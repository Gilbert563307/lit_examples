import { LitElement, html } from 'lit';

export class EventConsumer extends LitElement {
    static properties = {
        clickEventData: { type: String },
        submitEventData: { type: String },
        customEventData: { type: String },
    };

    constructor() {
        super();
        this.submitEventData = null;
        this.clickEventData = null;
        this.clickHandler = this.clickHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
        // If we change the this.scope to document, we will be able to listen for events on the whole document as long as the event bubbles up to the document level.
        this.scope = document;
        // this.customEventHandler = this.customEventHandler.bind(this);
    }

    connectedCallback() {
        super.connectedCallback();
        this.scope.addEventListener('click', this.clickHandler);
        this.scope.addEventListener('submit', this.submitHandler);
        // this.scope.addEventListener('form-submitted', this.customEventHandler);
    }

    disconnectedCallback() {
        this.scope.removeEventListener('click', this.clickHandler);
        this.scope.removeEventListener('submit', this.submitHandler);
        // this.scope.removeEventListener('form-submitted', this.customEventHandler);
        super.disconnectedCallback();
    }

    clickHandler(event) {
        console.log('Click event consumed!', event);

        // Use composedPath to get the target inside the shadow DOM
        // eslint-disable-next-line prefer-destructuring
        const target = event.composedPath()[0];

        this.clickEventData = JSON.stringify({
            type: event.type,
            bubbles: event.bubbles,
            cancelable: event.cancelable,
            composed: event.composed,
            detail: event.detail,
            target: target.tagName,
            textContent: target.textContent,
        });
    }

    submitHandler(event) {
        console.log('Submit event consumed!', event);

        // Use composedPath to get the target inside the shadow DOM
        // eslint-disable-next-line prefer-destructuring
        const target = event.composedPath()[0];

        this.submitEventData = JSON.stringify({
            type: event.type,
            bubbles: event.bubbles,
            cancelable: event.cancelable,
            composed: event.composed,
            detail: event.detail,
            target: target.tagName,
            textContent: target.textContent,
        });
    }

    customEventHandler(event) {
        console.log('Custom event consumed!', event);

        // Use composedPath to get the target inside the shadow DOM
        // eslint-disable-next-line prefer-destructuring
        const target = event.composedPath()[0];

        this.customEventData = JSON.stringify({
            type: event.type,
            bubbles: event.bubbles,
            cancelable: event.cancelable,
            composed: event.composed,
            detail: event.detail,
            target: target.tagName,
            textContent: target.textContent,
        });
    }

    render() {
        return html`
         <!-- This way we can create a custom event handler without the new Custom class in the event-producer component and not need the customEventHandler event listener added to the scope-->
      <fieldset @form-submitted="${this.customEventHandler}">
       <slot></slot>
        <legend>Event Consumer</legend>
        <p>Click event data: ${this.clickEventData || 'none'}</p>
        <p>Submit event data: ${this.submitEventData || 'none'}</p>
        <p>Custom event data: ${this.customEventData || 'none'}</p>
      </fieldset>
    `;
    }
}

customElements.define('event-consumer', EventConsumer);