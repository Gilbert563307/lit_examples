export class DynamicContent extends HTMLElement {
    constructor() {
        super();
        this._title = "";
        this.content = "";
        this.shadowDom = this.attachShadow({ "mode": "open" });
    }

    static get observedAttributes() {
        return ["title", "content"]
    }

    render() {
        //clear internal html always 
        this.shadowDom.innerHTML = "";
        const sectionEl = document.createElement("section");
        const headerEL = document.createElement("h1");
        const pEl = document.createElement("p");
        headerEL.textContent = this._title;
        pEl.textContent = this.content;
        sectionEl.appendChild(headerEL);
        sectionEl.appendChild(pEl);
        this.shadowDom.appendChild(sectionEl);
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(attribute, oldValue, newValue) {
        if (attribute === "title") {
            this._title = newValue
        }
        if (attribute === "content") {
            this.content = newValue
        }

        console.log(`AttributeChangedCallback: ${attribute} changed from ${oldValue} to ${newValue}`);
        this.render();
    }
}

customElements.define("dynamic-content", DynamicContent);