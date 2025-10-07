import { LitElement, html, css } from 'lit';

export class LitRender extends LitElement {
    static styles = css`
    fieldset {
      display: grid;
      gap: 1rem;
      grid-template-columns: 1fr 1fr;
      align-content: center;
      align-items: stretch;
    }

    input output {
      border: 1px solid #333;
      padding: 1rem;
      display: grid;
      align-items: center;
    }

    input[required] {
      border: 2px solid orange;
    }

    .required {
      font-weight: bold;
      color: orangered;
    }

    legend {
      font-weight: bold;
    }

    label {
      display: inline-block;
      margin-bottom: 0.5rem;
    }

    button[type='submit'] {
      margin: 1rem;
      padding: 1rem;
      background-color: yellowgreen;
      color: black;
      border: none;
      border-radius: 0.5rem;
      cursor: pointer;
    }
  `;

    #privateProperty;


    static properties = {
        tagAttribute: { type: String, attribute: "tag-attribute" },
        // reflect: true  [when you add this the attribute passes to the components also becomes reactive]
        reactiveProperty: { type: String, attribute: false },
        requiredInput: { type: Boolean, attribute: false },
        //snap nog nier helemaal wat de attribute doet!!
        arrayList: { type: Array, attribute: false },
    }

    constructor() {
        super();
        this.#privateProperty = "initial value";
        this.tagAttribute = "initial value";
        this.reactiveProperty = "initial value";
        this.requiredInput = false;
        this.arrayList = [];
    }

    updatePrivateProperty(event) {
        this.#privateProperty = event.target.value;
        console.log(this.#privateProperty);
        this.requestUpdate();
    }

    updateReactiveProperty(event) {
        this.reactiveProperty = event.target.value;
        console.log(this.reactiveProperty);
    }

    updatedRequired(event) {
        this.requiredInput = event.target.id === "fields_required";
        console.log(this.requiredInput);
    }

    updateArrayList() {
        const arrayItem = this.shadowRoot.querySelector("#arrayItem");
        this.arrayList = [...this.arrayList, arrayItem.value];
        arrayItem.value = "";
        console.log(this.arrayList);
    }


    // eslint-disable-next-line max-lines-per-function
    render() {
        return html`
      <h1>Lit Render</h1>

      <form>

         <fieldset>
          <legend>Private Property</legend>

          <fieldset class="input">
            <legend>Input</legend>
            <input
              type="text"
              aria-label="Private Property"
              @input=${this.updatePrivateProperty}
            />
          </fieldset>
          <fieldset class="output">
            <legend>Output</legend>
            <p>${this.#privateProperty}</p>
          </fieldset>
        </fieldset>


         <fieldset>
          <legend>Tag Attribute</legend>

          <fieldset class="input">
            <legend>Input</legend>
            <!--place holder for content that u can place in here it acts like a outlet -->
            <slot></slot>
          </fieldset>
          <fieldset class="output">
            <legend>Output</legend>
            <p>${this.tagAttribute}</p>
          </fieldset>
        </fieldset>

         <fieldset>
          <legend>Reactive Property</legend>

          <fieldset class="input">
            <legend>Input</legend>
            <input
              type="text"
              aria-label="Add Item"
              @input=${this.updateReactiveProperty}
            />
          </fieldset>
          <fieldset class="output">
            <legend>Output</legend>
            <p>${this.reactiveProperty}</p>
          </fieldset>
        </fieldset>


         <fieldset>
          <legend>Boolean attribute passing</legend>
          <fieldset class="input">
            <legend class="${this.requiredInput ? 'required' : ''}">
              Some text input
            </legend>
            <input
              type="text"
              id="text_input"
              name="text_input"
              ?required=${this.requiredInput}
            />
            <!--Note that in the input with the id ‘text_input’ we used ? prefix to pass the required boolean parameter to the input. This is a special syntax in Lit to pass boolean attribute -->
            ${this.requiredInput
                ? html`<output>Required</output>`
                : html`<output>Optional</output>`}
          </fieldset>

          <fieldset class="input">
            <legend>Toggle Required</legend>
            <input
              type="radio"
              id="fields_required"
              name="text_input_required"
              @input=${this.updatedRequired}
            />
            <label for="fields_required">Required</label>
            <input
              type="radio"
              id="fields_optional"
              name="text_input_required"
              @input=${this.updatedRequired}
            />
            <label for="fields_optional">Optional</label>
          </fieldset>
        </fieldset>

         <fieldset>
          <legend>Array List</legend>

          <fieldset class="input">
            <legend>Input</legend>
            <input type="text" id="arrayItem" />
            <button type="button" @click=${this.updateArrayList}>
              Add to Array
            </button>
          </fieldset>
          <fieldset class="output">
            <legend>Output</legend>
            <ul>
              ${this.arrayList.map((item) => html`<li>${item}</li>`)}
            </ul>
          </fieldset>
        </fieldset>

        <button type="submit">Submit Exercise</button>
      </form>
    `;
    }
}

customElements.define('lit-render', LitRender);