export class HelloWorld extends HTMLElement {
  constructor() {
    super();
    console.log("constructor")
    this.name = "World";
    this.nr = 1;
    this.render();
  }

  static get observedAttributes() {
    console.log("observedAttributes")
    return ["name", "nr"];
  }


  attributeChangedCallback(attribute, oldValue, newValue) {
    if (attribute === "name") {
      this.name = newValue;
    }
    if (attribute === "nr") {
      this.nr = Number(newValue);
    }
    this.render();
  }

  render() {
    console.log(`render ${this.name}}`);
    let output = "";
    const INCREMENT = 1;
    for (let index = 0; index < this.nr; index+=INCREMENT) {
      output += `Hello ${this.name}`;
    }
    this.textContent = output;
  }

}

customElements.define('hello-world', HelloWorld);