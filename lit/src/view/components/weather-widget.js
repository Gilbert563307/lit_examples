import { LitElement, html, css } from "lit";
import { weatherService } from "../services/weather-service";

export class WeatherWidget extends LitElement {
    constructor() {
        super();
    }

    static styles = css`
     :host {
            display: block;
            max-width: 350px;
            margin: 1rem auto;
            font-family: Arial, Helvetica, sans-serif;
        }

        section {
            background: #f9f9f9;
            padding: 1.5rem;
            border-radius: 12px;
            box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        }

        h2 {
            margin: 0;
            font-size: 1.3rem;
            color: #333;
            text-align: center;
        }

        p {
            margin: 0.5rem 0;
            font-size: 1rem;
            color: #555;
        }

        form {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            margin-top: 1rem;
        }

        label {
            font-size: 0.9rem;
            font-weight: bold;
            color: #444;
        }

        input[type="text"] {
            padding: 0.6rem;
            border: 1px solid #ccc;
            border-radius: 6px;
            font-size: 1rem;
            outline: none;
            transition: border 0.2s;
        }

        input[type="text"]:focus {
            border: 1px solid #0077ff;
        }

        button {
            padding: 0.7rem;
            border: none;
            border-radius: 6px;
            background-color: #0077ff;
            color: #fff;
            font-size: 1rem;
            font-weight: bold;
            cursor: pointer;
            transition: background 0.2s;
        }

        button:hover {
            background-color: #005fcb;
        }
    
    `;

    static properties = {
        cityName: { type: String },
        temperature: { type: String },
        weatherDescription: { type: String }
    };


    fetchWeather(event) {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData)
        const cityName = data.cityName;

        this.cityName = cityName;
        this.retrieveData(cityName).then((data) => {
            this.temperature = data.current.temp_c;
            this.weatherDescription = `Het voelt aan als ${data.current.feelslike_c}`;
        });

    }

    async retrieveData(cityName) {
        const data = await weatherService.getDataFromApi(cityName);
        return data;
    }

    connectedCallback() {
        super.connectedCallback();
        console.log("called connectedCallback")
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        console.log("called disconnectedCallback")

    }

    render() {
        return html`
        <section>
            <p> City ${this.cityName}</p>
            <p> temperature ${this.temperature}</p>
            <p> weather description ${this.weatherDescription}</p>

            <form @submit=${this.fetchWeather}>
                <label for="cityName">Vul city name in</label>
                <input type="text" name="cityName" >
                <button type="submit">get data </button>
            </form>
        </section>
        
        `
    }
}

customElements.define("weather-widget", WeatherWidget)