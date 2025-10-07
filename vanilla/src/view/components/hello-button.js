import { HelloWorld } from "./hello-world";

export class HelloButton extends HelloWorld {
    constructor() {
        super();
        this.render();
    }
    render() {
        console.log("render Hellobutton")
        this.innerHTML = "";
        super.render();
        const button = document.createElement('button');
        button.textContent = 'Click';
        button.addEventListener('click', () => {
            this.textContent = 'Hello Universe!';
        })
        this.appendChild(button);
        console.log("end render Hellobutton")

    }

}
customElements.define("hello-button", HelloButton);