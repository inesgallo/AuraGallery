// import React, { useState, useEffect } from 'react';
// import UserAdminService from '../services/UserAdminService';
// import AdminForm from '../components/adminForm/AdminForm';
// import AdminUserList from '../components/adminList/AdminUserList';

// const UserAdminHandler = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   const fetchUsers = async () => {
//     const fetchedUsers = await UserAdminService.fetchUsers();
//     setUsers(fetchedUsers);
//   };

//   const addUser = async (newUser) => {
//     await UserAdminService.addUser(newUser);
//     fetchUsers();
//   };

//   return (
//     <div>
//       <h1>User Management</h1>
//       <AdminForm onSubmit={addUser} />
//       <AdminUserList users={users} />
//     </div>
//   );
// };

// export default UserAdminHandler;