import { LitElement, html } from 'lit';
import { dataSubjectService } from '../services/data-subject-service';

export class DataGenerator extends LitElement {

  // eslint-disable-next-line class-methods-use-this
  addData() {
    dataSubjectService.addData(Math.random());
  }

  render() {
    return html`
      <button @click=${this.addData}>Add Data</button>
    `;
  }
}

customElements.define('data-generator', DataGenerator);