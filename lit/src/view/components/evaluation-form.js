import { LitElement, html, css } from 'lit';
import './number-range-input';
import './fieldset-cursist-info';


// https://s3-kennisbank.tomkemper.nl/frontend/lit-web-components/input-components.html
export class EvaluationForm extends LitElement {
  constructor() {
    super();
    this.data = {};
  }

  static styles = css`
    form {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1rem;
      margin: 1rem;
      justify-items: center;
      align-items: center;
    }

    fieldset {
      border: 1px solid gray;
      display: grid;
      width: 100%;
    }

    .cursist-info {
      grid-template-columns: auto 1fr;
    }

    .evaluation-topics {
      grid-template-columns: auto auto 1fr;
      align-items: center;
    }

    legend {
      font-weight: bold;
    }

    label {
      display: block;
      margin: 0.5rem;
      padding: 0.5rem;
    }

    input {
      margin: 0.5rem;
      padding: 0.5rem;
    }

    input[type='number'] {
      width: 2rem;
      font-size: 1.5rem;
    }

    input[type='range'] {
      width: 50%;
    }

    datalist {
      display: flex;
      margin: 0 0.5rem;
      padding: 0 0.5rem;
      justify-content: space-between;
      width: 50%;
    }

    button {
      margin: 0rem 1rem;
      padding: 0.5rem 2rem;
      background-color: green;
      color: white;
      border: none;
      border-radius: 0.5rem;
      font-size: 1.5rem;
    }
  `;

  submitHandler(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    this.data = Object.fromEntries(formData.entries());
    console.log(this.data);
  }

  render() {
    return html`
      <h1>Evaluation Form</h1>
      <form @submit=${this.submitHandler}>
      <!--  <fieldset-cursist-info name="cursistInfo" required></fieldset-cursist-info> -->

        <fieldset class="evaluation-topics">
          <legend>Topics</legend>
          <number-range-input name="html" label="HTML" min="0" max="10" required></number-range-input>
          <number-range-input name="css" label="CSS" min="0" max="10" required></number-range-input>
          <number-range-input name="javascript" label="JavaScript" min="0" max="10" required></number-range-input>
        </fieldset>

        <button type="submit">Save</button>
      </form>
    `;
  }
}

customElements.define('evaluation-form', EvaluationForm);