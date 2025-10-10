export class UserService {
    constructor() {
        this.user = null;
        this.baseURL = "http://localhost:3000";
    }

    getUsers() {
        return fetch(`${this.baseURL}/users`)
            .then((resp) => resp.json());
    }

    getCurrentUser() {
        const user = localStorage.getItem("user")

        if (!user) {
            return null;
        }

        return fetch(`${this.baseURL}/users/${user}`).then((resp) => resp.json());
    }

    signIn(userId) {
        localStorage.setItem("user", userId);
        this.user = userId
    }

    isLoggendIn() {
        return (this.user != null);
    }
}

const userService = new UserService();
export { userService }