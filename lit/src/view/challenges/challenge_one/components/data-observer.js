import { UserService } from "../services/user-service";

export class DataObserver {
    static properties = {
        data: { type: Array },
    }

    constructor() {
        this.data = [];
        this.observer = {
            next: (data) => { this.data = data }
        }
    }

    connectedCallback() {
        super.connectedCallback();
        
    }
}