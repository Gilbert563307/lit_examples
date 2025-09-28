
//https://s3-kennisbank.tomkemper.nl/frontend/vanilla-web-components/hello-attribute.html
export class HelloAttribute extends HTMLElement {
    constructor() {
        super();
        this.propertyValue = 'World';
        this.textContent = `Hello ${this.propertyValue}`;
    }

    //attributes listed in the observedAttributes array 
    static get observedAttributes(){
        return ["show"];
    }

    //Note that html attributes are always strings, even if you set them to a number or boolean in the html file. So if you want to use the attribute as a number or boolean you have to convert it in the attributeChangedCallback method.
    attributeChangedCallback(attribute, oldValue, newValue){
        console.log(`attribute: ${attribute}, oldValue=${oldValue}, newValue=${newValue}`);
        if(attribute === "show"){
            this.propertyValue = newValue;
            this.textContent = `Hello ${this.propertyValue}`;
        }
    }
}

customElements.define("hello-attribute", HelloAttribute);