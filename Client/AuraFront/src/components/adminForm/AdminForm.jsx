// import React, { useState } from 'react';
// import UserHandle from '../../handler/UserAdminHandler'; 

// const AdminForm = () => {
//     const [namePersonUser, setNamePersonUser] = useState('');
//     const [surnamePersonUser, setSurnamePersonUser] = useState('');
//     const [nameUser, setNameUser] = useState('');
//     const [passwordUser, setPasswordUser] = useState('');
//     const [userTypeFK, setUserTypeFK] = useState('');

//     const handleSubmit = async (e, handleAddUser) => {
//         e.preventDefault();
//         const newUser = {
//             name_person_user: namePersonUser,
//             surname_person_user: surnamePersonUser,
//             name_user: nameUser,
//             password_user: passwordUser,
//             user_typeFK: userTypeFK
//         };
//         await handleAddUser(newUser);
//     };

//     return (
//         <div>
//             <h1>User Management</h1>
//             <UserHandle>
//                 {({ users, handleAddUser }) => (
//                     <>
//                         <form onSubmit={(e) => handleSubmit(e, handleAddUser)}>
//                             <input type="text" value={namePersonUser} onChange={(e) => setNamePersonUser(e.target.value)} placeholder="Name" required />
//                             <input type="text" value={surnamePersonUser} onChange={(e) => setSurnamePersonUser(e.target.value)} placeholder="Surname" required />
//                             <input type="text" value={nameUser} onChange={(e) => setNameUser(e.target.value)} placeholder="Username" required />
//                             <input type="password" value={passwordUser} onChange={(e) => setPasswordUser(e.target.value)} placeholder="Password" required />
//                             <input type="text" value={userTypeFK} onChange={(e) => setUserTypeFK(e.target.value)} placeholder="User Type" required />
//                             <button type="submit">Submit</button>
//                         </form>

//                         <table>
//                             <thead>
//                                 <tr>
//                                     <th>ID</th>
//                                     <th>Name</th>
//                                     <th>Surname</th>
//                                     <th>Username</th>
//                                     <th>User Type</th>
//                                     <th>Action</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {users.map((user) => (
//                                     <tr key={user.id_user}>
//                                         <td>{user.id_user}</td>
//                                         <td>{user.name_person_user}</td>
//                                         <td>{user.surname_person_user}</td>
//                                         <td>{user.name_user}</td>
//                                         <td>{user.user_typeFK}</td>
//                                         <td>
//                                             <button>Delete</button>
//                                             <button>Patch</button>
//                                         </td>
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>
//                     </>
//                 )}
//             </UserHandle>
//         </div>
//     );
// };

// export default AdminForm;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserForm = ({ onSubmit }) => {
  const [namePersonUser, setNamePersonUser] = useState('');
  const [surnamePersonUser, setSurnamePersonUser] = useState('');
  const [nameUser, setNameUser] = useState('');
  const [passwordUser, setPasswordUser] = useState('');
  const [userTypeFK, setUserTypeFK] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      name_person_user: namePersonUser,
      surname_person_user: surnamePersonUser,
      name_user: nameUser,
      password_user: passwordUser,
      user_typeFK: userTypeFK
    };
    await onSubmit(newUser);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={namePersonUser} onChange={(e) => setNamePersonUser(e.target.value)} placeholder="Name" required />
      <input type="text" value={surnamePersonUser} onChange={(e) => setSurnamePersonUser(e.target.value)} placeholder="Surname" required />
      <input type="text" value={nameUser} onChange={(e) => setNameUser(e.target.value)} placeholder="Username" required />
      <input type="password" value={passwordUser} onChange={(e) => setPasswordUser(e.target.value)} placeholder="Password" required />
      <input type="text" value={userTypeFK} onChange={(e) => setUserTypeFK(e.target.value)} placeholder="User Type" required />
      <button type="submit">Submit</button>
    </form>
  );
};

const UserList = ({ users, onDelete, onPatch }) => {
 
  const handleDelete = async (id) => {
    const user_to_delete =  {
      id_user: id
    }
    
    await onDelete(user_to_delete);
  };

  // const handlePatch = async (id) => {
  //   await onPatch(id);
  // };

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Surname</th>
          <th>Username</th>
          <th>User Type</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id_user}>
            <td>{user.id_user}</td>
            <td>{user.name_person_user}</td>
            <td>{user.surname_person_user}</td>
            <td>{user.name_user}</td>
            <td>{user.user_typeFK}</td>
            <td>
              <button onClick={() => handleDelete(user.id_user)} >Delete</button> 
              
              <button onClick={() => handlePatch(user.id_user)}>Patch</button> 
              
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const AdminForm = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:5000/user_admin/get_user'); 
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const addUser = async (newUser) => {
    try {
      // console.log(newUser)
      await axios.post('http://127.0.0.1:5000/user_admin/post_user', newUser, {
        headers: {
          'Content-Type': 'application/json',
        }
       
      }); 
    } catch (error) {
      console.error('Error adding user:', error);
    }
    fetchUsers(); // Refresh user list after adding a new user
  };

  const deleteUser = async (id) => {
    try {
      console.log(id)

      await axios.delete('http://127.0.0.1:5000/user_admin/delete_user', {
        // data: { id_user: id },  
        data: id,  
        headers: {
          'Content-Type': 'application/json',
        }
       
      }); 
    } catch (error) {
      console.error('Error deleting user:', error);
    }
    fetchUsers(); // Refresh user list after deleting a user
  };

  // const patchUser = async (id) => {
  //   try {
  //     // Assuming you have a function to fetch the user by ID
  //     const userToUpdate = await getUserById(id);

  //     // Implement your logic to update the user object

  //     await axios.patch(`http://localhost:5000/user_admin/${id}`, userToUpdate, {
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       withCredentials: true,
  //     });
  //   } catch (error) {
  //     console.error('Error patching user:', error);
  //   }
  //   fetchUsers(); // Refresh user list after patching a user
  // };

  // const getUserById = async (id) => {
  //   try {
  //     const response = await axios.get(`http://127.0.0.1:5000/user_admin/get_user/${id}`, {
  //       withCredentials: true,
  //     });
  //     return response.data;
  //   } catch (error) {
  //     console.error('Error fetching user by ID:', error);
  //     return null;
  //   }
  // };

  return (
    <div>
      <h1>User Management</h1>
      <UserForm onSubmit={addUser} />
      <UserList users={users} onDelete={deleteUser} />
      {/* onPatch={patchUser} */}
    </div>
  );
};

export default AdminForm;




// import React, { useState, useEffect } from 'react';
// import axios from 'axios';



// const UserList = ({ users }) => {
//   return (
//     <table>
//       <thead>
//         <tr>
//           <th>ID</th>
//           <th>Name</th>
//           <th>Surname</th>
//           <th>Username</th>
//           <th>User Type</th>
//         </tr>
//       </thead>
//       <tbody>
//         {users.map((user) => (
//           <tr key={user.id_user}>
//             <td>{user.id_user}</td>
//             <td>{user.name_person_user}</td>
//             <td>{user.surname_person_user}</td>
//             <td>{user.name_user}</td>
//             <td>{user.user_typeFK}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// const AdminForm = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   const fetchUsers = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/user_admin/get_user'); 
//       setUsers(response.data);
//     } catch (error) {
//       console.error('Error fetching users:', error);
//     }
//   };


//   const addUser = async () => {
//     try {
//        console.log('Iniciando petición post');
//        const response = await axios.post('http://localhost:5000/user_admin/post_user', {
//          name_person_user: 'Annnnnna',
//          surname_person_user: "lllll",
//          name_user: "sldlh",
//          password_user: "235",
//          user_typeFK: 2
//        }, {
//          headers: {
//            Accept: "application/json",
//            "Content-Type": "application/json"
//          }
//        })
//        console.log(response.data);

//     } catch (error) {
//        console.error('Error adding user:', error);
//     }
//    };
   
  
//   return (
//     <div>
//       <h1>User Management</h1>
//       <button onClick={addUser}>Agregar usuaruario</button>
//       <UserList users={users} />
//     </div>
//   );
// };

// export default AdminForm;