import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export const UserService = {
    async getUser() {
        try {
            let response = await apiClient.get("/user_admin/get_user");
            let allUsers = response.data;
            return allUsers;
        } catch (error) {
            console.error("Error al obtener los usuarios:", error);
        }
    },
    async getUsers(id) {
        try {
            let response = await apiClient.get("/users/" + id);
            let user = response.data;
            return user;
        } catch (error) {
            console.error("Error al obtener el usuario:", error);
        }
    },
    async submitUser(newUser) {
        try {
            return await apiClient.post("/user_admin/post_user", newUser);
        } catch (error) {
            console.error("Error al enviar el usuario:", error);
        }

    },
    async deleteUser(id) {
        try {
            return await apiClient.delete("/user/" + id);
        } catch (error) {
            console.error("Error al eliminar el usuario:", error);
        }
    },
    async updateUser(id, updatedUser) {
        try {
            return await apiClient.patch("/users/" + id, updatedUser);
        } catch (error) {
            console.error("Error al actualizar el usuario:", error);
        }
    }
}

export default UserService;