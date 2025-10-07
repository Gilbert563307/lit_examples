export class DataSubjectUserService extends EventTarget {
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

    notify(data) {
        console.log(this.#subscribers);
        this.#subscribers.forEach(observer => observer.next(data));
    }
}

const dataSubjectUserService = new DataSubjectUserService();
export { dataSubjectUserService }