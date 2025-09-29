export class HelloWorld extends HTMLElement {
  constructor() {
    super();
     this.textContent = 'Hello World';
      console.log(this);
  }
}

customElements.define('hello-world', HelloWorld);