export class PointOfInterest extends HTMLElement {
    constructor() {
        super();
        this.name = 'Unknown';
        this.longitude = 0;
        this.latitude = 0;
        this.wheelchairAccessible = false;

        this.textContent = `${this.name} (${this.longitude}, ${this.latitude}) - Wheelchair Accessible: ${this.wheelchairAccessible}`;
    }

    static get observedAttributes() {
        return ["name", "longitude", "latitude", "wheelchairAccessible"];
    }

    attributeChangedCallback(attribute, oldValue, newValue) {
        console.log(`attribute: ${attribute}, oldValue=${oldValue}, newValue=${newValue}`);
        if (attribute === 'name') {
            this.name = newValue;
            this.textContent = `${this.name} (${this.longitude}, ${this.latitude})`;
        } else if (attribute === 'longitude') {
            this.longitude = Number(newValue);
            this.textContent = `${this.name} (${this.longitude}, ${this.latitude})`;
        } else if (attribute === 'latitude') {
            this.latitude = Number(newValue);
            this.textContent = `${this.name} (${this.longitude}, ${this.latitude})`;
        } else if (attribute === 'wheelchair-accessible') {
            this.wheelchairAccessible = newValue === 'true'; // Convert string to boolean
            this.textContent = `${this.name} (${this.longitude}, ${this.latitude}) - Wheelchair Accessible: ${this.wheelchairAccessible ? 'Yes' : 'No'
                }`;
        }
    }
}

customElements.define("point-of-interest", PointOfInterest);