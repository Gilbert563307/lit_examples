import { dataSubjectUserService } from "./data-subject-user-service";

export class UserService {
    constructor() {
        this.API_URl = "http://localhost:3000/users";
    }


    async getUsers() {
        const response = await fetch(this.API_URl, {
            method: "GET",
        });

        const data = await response.json();
        return data;
    }

    async saveUser(user) {
        const response = await fetch(this.API_URl, {
            method: "POST",
            body: JSON.stringify(user),
        });
        const data = await response.json();

        return data;
    }

    async deleteUser(id) {
        const response = await fetch(`${this.API_URl}/${id}`, {
            method: "DELETE",
        });
        const data = await response.json();
        return data;
    }

    async updateUser(id) {
        const response = await fetch(`${this.API_URl}/${id}`, {
            method: "PUT",
        });
        const data = await response.json();
        return data;
    }
}

const userService = new UserService();
export { userService };
