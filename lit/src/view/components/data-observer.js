import { LitElement, html } from 'lit';
import { dataSubjectService } from '../services/data-subject-service';

export class DataObserver extends LitElement {
  static properties = {
    data: { type: Array },
  };

  constructor() {
    super();
    this.data = [];
    this.observer = {
      next: (data) => { this.data = data }
    }
  }

  //Normally we would call this method something like updateDataEventHandler, but because we are working towards Observables and the method gets invoked because it receives the "next value" of the data stream we observer, we will call this method next
  //this is when using the event based observer pattern with out the subscribrs
  // next = (event) => { this.data = event.detail };

  connectedCallback() {
    super.connectedCallback();
    // We can use the next function as a callback for the event listener. We will use a web component for this, so that we can show the received data in the browser
    // dataSubjectService.addEventListener("dataAdded", this.next);

    dataSubjectService.subscribe(this.observer);
  }

  disconnectedCallback() {
    // dataSubjectService.removeEventListener("dataAdded", this.next);
    dataSubjectService.unsubscribe(this.observer);
    super.disconnectedCallback();
  }

  render() {
    return html`
      <div>
        <h2>Data Observer</h2>
        <ul>
          ${this.data.map(item => html`<li>${item}</li>`)}
        </ul>
      </div>
    `;
  }
}

customElements.define('data-observer', DataObserver);