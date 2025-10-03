import { html, LitElement } from "lit";
import "./countdown-display";
import "./countdown-input";

const ONE_SECOND_IN_MILL = 1000;
export class CountDownTimer extends LitElement {
    constructor() {
        super();
        this.timeLeft = 0;
    }

    static properties = {
        timeLeft: { type: Number }
    }

    startCountDown(event) {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData)
        this.timeLeft = Number(data.timer);

        const intervalID = setInterval(() => {
            this.timeLeft -= 1;

            if (this.timeLeft < 0) {
                clearInterval(intervalID);
            }
        }, ONE_SECOND_IN_MILL);
    }

    //get loaded in component html is rendered
    firstUpdated(){
        const formElement = this.shadowRoot?.querySelector("form");
        formElement?.addEventListener("submit", this.startCountDown.bind(this))
    }

    disconnectedCallback(){
        const formElement = this.shadowRoot?.querySelector("form");
        formElement?.removeEventListener("submit", this.startCountDown.bind(this))
    }

    render() {
        return html`
        <div>
           <!-- <form @submit=${this.startCountDown}>
                <label for="quantity">Zet count down:</label>
                <input type="number" id="quantity" min="1" name="timer">
                <button type="submit" >start countdown</button>
            </form> -->
           <countdown-display time-left="${this.timeLeft}"></countdown-display>
           <!-- <countdown-input></countdown-input> -->
            
        </div>
        `;
    }
}
customElements.define("count-down-timer", CountDownTimer);