
//https://s3-kennisbank.tomkemper.nl/frontend/vanilla-web-components/lifecycle-callbacks.html
export class HelloShadowDOM extends HTMLElement {
    constructor() {
        super();

        // With the open mode you can access the Shadow DOM via the shadowRoot property of the HTML element.

        // With the closed mode you cannot. shadowRoot will return null.
        this.shadowDOM = this.attachShadow({ mode: 'closed' });


        //  const linkElement = document.createElement('link');
        //     linkElement.setAttribute('rel', 'stylesheet');
        //     linkElement.setAttribute('href', './styles.css');
        //     this.shadowDOM.appendChild(linkElement);

        const styleElement = document.createElement("style");
        styleElement.textContent = /*css */`
        
        h1{
            /* background-color: green; */
            background-color: var(--h1-background-color, green);
            color: white;
            padding: 1rem;
        }`;

        this.shadowDOM.appendChild(styleElement);

        const h1Element = document.createElement("h1");
        h1Element.textContent = "Hello shadow dom";
       
        this.shadowDOM.appendChild(h1Element);
    }
}

customElements.define("hello-shadowdom", HelloShadowDOM);