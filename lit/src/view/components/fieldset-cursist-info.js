import { LitElement, html, css } from 'lit';

export class FieldsetCursistInfo extends LitElement {
  #internals;

  //   if you now run the application, you will get an error in the console at the setFormValue method, stating that the element is not a form-associated custom element.
  // To fix this, we have to add a static property formAssociated to our component and set it to true. This tells the browser that our component is a form-associated custom element.
  static formAssociated = true;

  static styles = css`
    :host {
      width: 100%;
      justify-items: center;
    }

    fieldset {
      border: 1px solid gray;
      display: grid;
      width: 100%;
    }

    .cursist-info {
      grid-template-columns: auto 1fr;
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

    input:required {
      background-color: lightgoldenrodyellow;
    }

    input:invalid {
      border-color: red;
      border-width: 0.1em;
    }
  `;

  static properties = {
    required: { type: Boolean },
    // reflect: true  [when you add this the attribute passes to the components also becomes reactive]
    value: { type: String, reflect: true },
  };

  constructor() {
    super();
    this.#internals = this.attachInternals();
    this.value = "";
    this.required = false;
  }


  setFieldsetValue() {
    const fieldsetObject = this.fieldsetFields.reduce((acc, field) => {
      acc[field.name] = field.element.value;
      return acc;
    }, {});

    this.value = JSON.stringify(fieldsetObject);

    this.#internals.setFormValue(this.value);
    this.setFieldsetValidity();
  }

  setFieldsetValidity() {
    const isValid = this.fieldsetFields.every((field) =>
      field.element.checkValidity(),
    );
    const firstInvalidField = this.fieldsetFields.find(
      (field) => !field.element.checkValidity(),
    );

    const message = firstInvalidField
      ? firstInvalidField.element.validationMessage
      : "";
    const focus = firstInvalidField
      ? firstInvalidField.element
      : this.shadowRoot.querySelector("fieldset");

    this.#internals.setValidity(
      isValid ? {} : { customError: true },
      message,
      focus,
    );
  }

  // This setFieldsetValue method needs some knowledge about the input fields within our custom component. We therefore create a new class property fieldsetFields that holds an array of objects with the name of the input field and the input element itself. Since those elements are not available at the constructor and the connectedCallback lifecycle callback, we initialize this array in the firstUpdated lifecycle callback of our custom component
  firstUpdated() {
    this.fieldsetFields = [
      { name: "name", element: this.shadowRoot.querySelector("#name") },
      { name: "address", element: this.shadowRoot.querySelector("#address") },
      { name: "phone", element: this.shadowRoot.querySelector("#phone") },
      { name: "email", element: this.shadowRoot.querySelector("#email") },
    ];

    this.setFieldsetValue()
  }



  setFieldValue(event) {
    const fieldElement = event.target;
    if (!fieldElement.checkValidity()) {
      fieldElement.reportValidity();
    }
    this.setFieldsetValue();
  }

  render() {
    return html`
      <fieldset class="cursist-info">
        <legend>Cursist Information</legend>
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" @input=${this.setFieldValue} ?required="${this.required}" />

        <label for="address">Address:</label>
        <input type="text" id="address" name="address" @input=${this.setFieldValue} ?required="${this.required}" />

        <label for="phone">Phone:</label>
        <input type="tel" id="phone" name="phone" @input=${this.setFieldValue} ?required="${this.required}" />

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" @input=${this.setFieldValue} ?required="${this.required}" />
      </fieldset>
    `;
  }
}

customElements.define('fieldset-cursist-info', FieldsetCursistInfo);