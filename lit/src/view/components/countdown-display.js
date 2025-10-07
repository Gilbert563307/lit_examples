import { LitElement, css, html } from "lit";

export class CountDownDisplay extends LitElement {
    constructor() {
        super();
        this.timeLeft = 0;
    }

    static properties = { timeLeft: { type: Number, attribute: "time-left" } }


    static styles = css``;

    render() {
        return html`
           <h1>timer</h1>
            <p>countdown ${this.timeLeft}</p>
        `;
    }
}

customElements.define("countdown-display", CountDownDisplay);