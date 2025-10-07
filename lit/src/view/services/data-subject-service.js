

//For the notification we will use a CustomEvent. But because a service class should not invoke DOM API calls, we will use the EventTarget class to dispatch the event
export class DataSubjectService extends EventTarget {
    //The EventTarget class is a built-in class in JavaScript that allows you to create and manage events. This enables us to dispatch events without having to rely on the DOM.

    #serviceData = [];
    #subscribers = [];

    addData(item) {
        this.#serviceData = [...this.#serviceData, item];
        this.notify(this.#serviceData);
    }

    subscribe(observer) {
        this.#subscribers = [...this.#subscribers, observer];
    }

    unsubscribe(observer) {
        this.#subscribers = this.#subscribers.filter(sub => sub !== observer);
    }

    // notify(data) {
    //     this.dispatchEvent(new CustomEvent("dataAdded", { detail: [...this.#serviceData] }));
    // }
    notify(data) {
        this.#subscribers.forEach(observer => observer.next(data));
    }
}

const dataSubjectService = new DataSubjectService();
export { dataSubjectService }