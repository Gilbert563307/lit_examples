export class HelloLifecycle extends HTMLElement {

    //The reason for this is that the observedAttributes static getter is called before the element is created. That it is a static getter means that it is called on the class itself, not on an instance of the class.
    static get observedAttributes() {
        console.log('ObservedAttributes')
        //here you can add the observed attributes you want to observe to when they change
        return ['lifecycle', 'title']
    }

    //The constructor is called when the element is created The constructor is a good place to initialize the element, create the shadow DOM, and set up event listeners.
    constructor() {
        super();
        this._title = "";
        console.log('Constructor: Element created');


        // Attempting to access a child element in the constructor
        this.innerHTML = '<div class="child">Child Element</div>';
        const child = this.querySelector('.child');
        console.log('Constructor: Child element', child); // This will log the child element
        // Trying to manipulate the child element
        if (child) {
            child.textContent = 'Updated in Constructor';
        }
    }

    //The connectedCallback is called when the element is added to the DOM The connectedCallback is a good place to perform tasks that require the element to be in the DOM, such as fetching data from an API or setting up a timer.
    connectedCallback() {
        this.textContent = 'Hello Lifecycle';
        console.log('ConnectedCallback: Element added to DOM');

        const child = this.querySelector('.child');
        console.log('ConnectedCallback: Child element', child); // This will log the child element
        if (child) {
            child.textContent = 'Updated in ConnectedCallback';
        }

        console.log('ConnectedCallback: Element added to DOM');
    }

    //The disconnectedCallback is called when the element is removed from the DOM. This is the fourth lifecycle callback that is called when a custom element is created. The disconnectedCallback is a good place to clean up resources, such as removing event listeners or stopping timers
    disconnectedCallback() {
        console.log('DisconnectedCallback: Element removed from DOM');
    }

    //this function is called when observed attributes change
    //the attributeChangedCallback is a good place to update the element’s internal state based on the new attribute value. 
    attributeChangedCallback(attribute, oldValue, newValue) {
        if (attribute === "title") {
            this._title = newValue;
            this.textContent = this._title;
        }
        console.log(`AttributeChangedCallback: ${attribute} changed from ${oldValue} to ${newValue}`);
    }

    adoptedCallback() {
        console.log('AdoptedCallback: Element moved to new document');
    }
}

customElements.define("hello-lifecycle", HelloLifecycle);