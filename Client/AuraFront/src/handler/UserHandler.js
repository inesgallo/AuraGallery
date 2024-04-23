import UserService from '../services/UserService';

export const UserHandler = {
    async getAllProducts() {
        let allUsers = await UserService.getAllUsers();
        return allUsers;
    },

    async getUser() {
        let user = await UserService.getUser();
        return user;
    },

    async submitUser(newUser) {
        return UserService.submitUser(newUser).then((response) => {
            if (response.status === 200) {
                console.log(response.data);
            } else {
                // Error al crear usuario
                // Mostrar mensaje de error al usuario
                throw new Error('Error al enviar el usuario');
            }
        });
    },

    async searchUsers(searchTerm) {
        let allUsers = await UserService.getAllUsers();

        let filteredUsers = allUsers.filter(user =>
            user.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

        return filteredUsers;
    },


    async getFilteredUsers(user_typeFK) {
        let allUsers = await UserService.getUsers();

        // Aplicar filtros si se proporcionan
        if (user_typeFK) {
            allUsers = allUsers.filter(user => user.user_typeFK === user_typeFK);
        }

        return allUsers;
    },

}

export default UserHandler;