// import React, { useState, useEffect } from 'react';
// import { UserAdminService } from '../services/UserAdminService';

// const UserHandle = ({ children }) => {
//     const [users, setUsers] = useState([]);

//     useEffect(() => {
//         UserAdminService.getAllUsers().then(setUsers).catch(console.error);
//     }, []);

//     const handleAddUser = async (newUser) => {
//         try {
//             await UserAdminService.submitUser(newUser);
//             UserAdminService.getAllUsers().then(setUsers).catch(console.error);
//         } catch (error) {
//             console.error('Error adding user:', error);
//         }
//     };

//     return React.Children.map(children, child => {
//         return React.cloneElement(child, { users, handleAddUser });
//     });
// };

// export default UserHandle;