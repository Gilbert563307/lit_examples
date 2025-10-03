import { html, css, LitElement } from "lit";

export class CountDownInput extends LitElement {

    constructor(){
        super();
    }

    static properties = {};


    static styles = css``;

    startCountDown(event) {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData)
        this.timeLeft = Number(data.timer);
    }

    render() {
        return html`
           <form @submit=${this.startCountDown}>
                <label for="quantity">Zet count down:</label>
                <input type="number" id="quantity" min="1" name="timer">
                <button type="submit"  >start countdown</button>
            </form>
        
        `;
    }
}

customElements.define("countdown-input", CountDownInput);
