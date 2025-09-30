export class  CustomCounter extends HTMLElement{
    constructor() {
        super();
        this.count = 0;
        this.shadowDom = this.attachShadow({"mode": "closed"});
    }

    // static get observedAttributes(){
    //     return ["counter"]
    // }

    render(){
        this.shadowDom.innerHTML = "";
        const section = document.createElement("section");
        const div = document.createElement("div");
        const button = document.createElement("button")

        button.textContent = "increment"
        button.addEventListener("click", () => this.incrementCounter())

        div.textContent = String(this.count);
        section.appendChild(div);
        section.appendChild(button);
        this.shadowDom.appendChild(section);
    }

    connectedCallback(){
        this.render();
    }

    incrementCounter(){
        this.count = this.count + 1;
        this.render();
    }
    
    // attributeChangedCallback(attribute, oldValue, newValue){
    //     this.render();
    // }

}

customElements.define("custom-counter", CustomCounter)