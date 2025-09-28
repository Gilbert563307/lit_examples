
//https://s3-kennisbank.tomkemper.nl/frontend/vanilla-web-components/hello-attribute.html
export class HelloAttribute extends HTMLElement {
    constructor() {
        super();
        this.propertyValue = 'World';
        this.textContent = `Hello ${this.propertyValue}`;
    }
}