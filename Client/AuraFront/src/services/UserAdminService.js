// import axios from "axios";

// const apiClient = axios.create({
//     baseURL: 'http://localhost:5000/',
//     withCredentials: false,
//     headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json'
//     }
// });

// export const UserAdminService = {

//     async getAllUsers() {
//         try {
//             let response = await apiClient.get("/user_admin/get_user");
//             let allUsers = response.data;
//             return allUsers;
//         } catch (error) {
//             console.error("Error fetching all users:", error);
//             throw error; 
//         }
//     },

//     async submitUser(newUser) {
//         try {
//             let response = await apiClient.post("/user_admin/post_user", { ...newUser });
//             let submitNewUser = response.data;
//             return submitNewUser;
//         } catch (error) {
//             console.error("Error submitting user:", error);
//             throw error;
//         }
//     }
// };