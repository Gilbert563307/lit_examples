import { LitElement, html, css } from "lit";
// https://s3-kennisbank.tomkemper.nl/frontend/lit-web-components/input-components-single-value.html

export class NumberRangeInput extends LitElement {
  static styles = css`
    :host {
      display: grid;
      grid-template-columns: 1.5fr auto 10fr;
      align-items: center;
      width: 100%;
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

    input[type="number"] {
      width: 3rem;
      font-size: 1.5rem;
    }

    input[type="range"] {
      width: 50%;
    }

    datalist {
      display: flex;
      margin: 0 0.5rem;
      padding: 0 0.5rem;
      justify-content: space-between;
      width: 50%;
    }
  `;

  static properties = {
    label: { type: String },
    min: { type: Number },
    max: { type: Number },
    required: { type: Boolean },
    value: { type: Number, reflect: true },
    name: { typ: String },
  };

  //   The first issue we will address is that the value attribute of the number-range-input component is not included in the form data when the form is submitted. The first thing we do to set up the ElementInternals in our component is to add a private property ‘internals’ to our component.
  #internals;

  //If you now run the application, you will get an error in the console at the setFormValue method, stating that the element is not a form-associated custom element.
  static formAssociated = true;

  constructor() {
    super();
    this.#internals = this.attachInternals();

    this.required = false;
    this.min = 0;
    this.max = 10;
    this.step = 1;
    this.value = this.min;
  }

  firstUpdated() {
    this.shadowRoot.querySelector("#number-input").value = this.value;
    this.shadowRoot.querySelector("#range-input").value = this.value;
    this.setValue(this.value);
  }

  numberInputHandler(event) {
    //Let’s start by checking if the value we enter in the input field is valid, by using the validity check method provided by the DOM API.

    const isValid = event.target.checkValidity();
    console.log(isValid);
    if (!isValid) {
      event.target.reportValidity();
    }


    this.value = event.target.value;
    this.shadowRoot.querySelector("#range-input").value = this.value;
    this.setValue(this.value);
  }

  rangeInputHandler(event) {
    const isValid = event.target.checkValidity();
    console.log(isValid);
    if (!isValid) {
      event.target.reportValidity();
    }

    this.value = event.target.value;
    this.shadowRoot.querySelector("#number-input").value = this.value;
    this.setValue(this.value);
  }


  // Here’s what happens:

  // Validation Check: We use checkValidity() to verify the input’s validity.
  // Set Validity Flags: If invalid, we create a flags object with rangeUnderflow and rangeOverflow to indicate the issue.
  // Set Component Validity: We call setValidity() with:
  // The flags object
  // The browser’s default validation message
  // The input element as the anchor for error focus

  setValue(value) {
    this.value = value;

    // Register the value with the browser's form system using ElementInternals.
    // This makes the custom element form-associated, so its value is included
    // when the parent <form> is submitted.
    this.#internals.setFormValue(this.value);
 

    //To ensure invalid values are not accepted during form submission, we use the setValidity() method inside the setValue() method:
    const numberInput = this.shadowRoot.querySelector("#number-input");

    const validity = numberInput.checkValidity()
      ? {}
      : {
        rangeUnderflow: this.value < this.min,
        rangeOverflow: this.value > this.max,
      };

    this.#internals.setValidity(
      validity,                     // Validation flags
      numberInput.validationMessage, // Browser-generated message
      numberInput                    // Element to focus on
    );
  }

  render() {
    return html`
      <label for="number-input">${this.label}:</label>
      <input
        type="number"
        id="number-input"
        name="number-input"
        min="${this.min}"
        max="${this.max}"
        ?required="${this.required}"
        @input=${this.numberInputHandler}
      />
      <div>
        <input
          type="range"
          id="range-input"
          name="range-input"
          list="values"
          aria-label="${this.label}"
          min="${this.min}"
          max="${this.max}"
          ?required="${this.required}"
          @input=${this.rangeInputHandler}
        />
        <datalist id="values">
          ${Array.from({ length: this.max + this.step }).map(
      (_, index) =>
        html` <option value="${index}" label="${index}"></option> `
    )}
        </datalist>
      </div>
    `;
  }
}

customElements.define("number-range-input", NumberRangeInput);