import { css, html, LitElement } from "lit";
import { globalStyles } from "../styles/global-styles.css";

export class HelloStyles extends LitElement {

    //host selector to style the component itself. 
    static styles = [
        globalStyles,
        css` 
        :host {
            display: block;
            padding: 1rem;
            margin: 1rem;
            height: 100%;
            width: 80%;
            border: 2px solid black;
            background-color: lightgray;
            box-shadow: 0.3rem 0.3rem 0.3rem black;
        }

         h1 {
            color: blue;
            background-color: var(--h1-background-color, red);
            padding: 0.5rem;
            text-align: center;
        }
    `];

    constructor() {
        super();
    }

    render() {
        return html`
            <h1>Hello Component Styles</h1>
            <p>Let there be global styles</p>
        `;
    }
}

customElements.define("hello-styles", HelloStyles);