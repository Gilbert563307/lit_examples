import { HelloWorld } from "./hello-world";


//Challenge 1: Extend the Hello World custom element
export class CustomElement extends HelloWorld {
    constructor() {
        super();
        this.nr = 0;
        this.shadowDOM = this.attachShadow({ mode: 'open' });
    }

    static get observedAttributes(){
        return ["nr"];
    }

    connectedCallback() {
        const button = document.createElement("button");
        button.textContent = "change message";
        button.addEventListener("click", () => this.changeMessage());
        this.shadowDOM.appendChild(button)
    }

    changeMessage() {
        const p = document.createElement("div");
        p.textContent = "“Hello Universe!” ";
        this.shadowDOM.appendChild(p);
    }

    //Challenge 2: Create a custom element that displays a message based on an attribute
    attributeChangedCallback(attribute, oldValue, newValue){
        if(attribute === "nr"){
            const elDiv = document.createElement("div");
            this.nr = Number(newValue);

            for (let index = 0; index < this.nr; index++) {
                const pElement = document.createElement("p");
                pElement.textContent = `I'm a lazy developer, therefore I will write a custom element to print this line ${index} times`
                elDiv.appendChild(pElement);
            }
            this.shadowDOM.appendChild(elDiv);
        }
    }
}

customElements.define("custom-element", CustomElement);