//https://s3-kennisbank.tomkemper.nl/frontend/vanilla-web-components/challenges.html
export class shadowDOMCard extends HTMLElement {
    constructor() {
        super();
        this.shadowDom = this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        const section = document.createElement("section");

        
        const linkElement = document.createElement("link");
        linkElement.setAttribute("rel", "stylesheet");
        linkElement.setAttribute("href", "./src/assets/css/style.css");

        

        const headerOne = document.createElement("h1");
        const pEl = document.createElement("p");
        headerOne.textContent = "Card Title";
        pEl.textContent = "Card Content";
        section.appendChild(headerOne)
        section.appendChild(pEl);
        this.shadowDom.appendChild(section);
        this.shadowDom.appendChild(linkElement)
    }
}

customElements.define("shadow-dom-card", shadowDOMCard);