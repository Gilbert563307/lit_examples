import { LitElement, html } from 'lit';
import './data-consumer';

// mediator pattern 
export class DataProducer extends LitElement {
  static get properties() {
    return {
      data: { type: Object },
    };
  }

  constructor() {
    super();
    this.data = {};
  }

  produceData() {
    this.data = {
      message: 'Hello from Data Producer!',
      timestamp: new Date(),
      author: 'Producer',
    };
  }

  render() {
    return html`
      <section>
        <h2>Data Producer</h2>
        <button @click="${this.produceData}">Produce Data</button>
        <p>Current Data: ${JSON.stringify(this.data) === '{}' ? 'No data produced yet.' : JSON.stringify(this.data)}</p>

       <!-- Note the '.' before the data property in the data-consumer component. This is a Lit specific feature that allows you to pass complex data types like objects and arrays to a component without having to stringify them first. -->
        <data-consumer .data="${this.data}"></data-consumer>
      </section>
    `;
  }
}

customElements.define('data-producer', DataProducer);