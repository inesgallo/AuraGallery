import React, { useState, useEffect } from 'react';
import './adminForm.css';
import { UserHandler } from '../../handler/UserHandler';
import { Container } from 'reactstrap';
import Swal from 'sweetalert2';

const AdminForm = () => {
  const [namePersonUser, setNamePersonUser] = useState('');
  const [surnamePersonUser, setSurnamePersonUser] = useState('');
  const [nameUser, setNameUser] = useState('');
  const [passwordUser, setPasswordUser] = useState('');
  const [userTypeFK, setUserTypeFK] = useState('');
  const [users, setUsers] = useState([]);

  
  const fetchData = async () => {
    const userData = await UserHandler.getUser();
    setUsers(userData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!namePersonUser || !surnamePersonUser || !nameUser || !passwordUser || !userTypeFK) {
      Swal.fire({
        icon: 'warning',
        title: '¡Advertencia!',
        text: 'Por favor, completa todos los campos del formulario.',
      });
      return;
    }

    const newUser = {
      name_person_user: namePersonUser,
      surname_person_user: surnamePersonUser,
      name_user: nameUser,
      password_user: passwordUser,
      user_typeFK: userTypeFK
    };

    await UserHandler.submitUser(newUser);
    fetchData();

    setNamePersonUser('');
    setSurnamePersonUser('');
    setNameUser('');
    setPasswordUser('');
    setUserTypeFK('');
    
    Swal.fire({
      icon: 'success',
      title: '¡Éxito!',
      text: 'El formulario ha sido enviado correctamente.',
    });
  };

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: '¿Estás seguro?',
      text: '¡No podrás revertir esto!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminarlo',
      cancelButtonText: 'No, cancelar',
      reverseButtons: true
    });
  
    if (result.isConfirmed) {
      await UserHandler.handleDelete(id);
      fetchData();
      Swal.fire(
        'Deleted!',
        'El usuario ha sido eliminado.',
        'éxito'
      );
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      Swal.fire(
        'Cancelled',
        'La eliminación de usuario ha sido cancelada :)',
        'error'
      );
    }
  };

  return (
    <>
      <Container>
        <form className='adminform' onSubmit={handleSubmit}>
          <section className='sectionForm'>

            <div className='nameSurnameGroup'>
              <div className='nameGroup'>
                <label className='nameLabel'>
                  nombre:
                  <input className='nameInput' 
                  type="text" 
                  name="name_person_user" 
                  value={namePersonUser} 
                  onChange={(e) => setNamePersonUser(e.target.value)} 
                  placeholder="Name" required/>
                </label>
              </div>

              <div className='surnameGroup'>
                <label className='surnameLabel'>
                  apellido:
                  <input className='surnameInput' 
                  type="text" name="surname_person_user" 
                  value={surnamePersonUser} 
                  onChange={(e) => setSurnamePersonUser(e.target.value)} 
                  placeholder="Surname" required/>
                </label>
              </div>
            </div>

            <div className='emailPasswordGroup'>
              <div className='emailGroup'>
                <label className='emailLabel'>
                  email:
                  <input className='emailInput' 
                  type="text" 
                  name="name_user" 
                  value={nameUser} 
                  onChange={(e) => setNameUser(e.target.value)} 
                  placeholder="Username" required />
                </label>
              </div>

              <div className='passwordGroup'>
                <label className='passwordLabel'>
                  contraseña:
                  <input className='passwordInput' 
                  type="text" 
                  name="password_user"
                  value={passwordUser} 
                  onChange={(e) => setPasswordUser(e.target.value)} 
                  placeholder="Password" required />
                </label>
              </div>
            </div>


            <fieldset className='selectUserFieldset'>
           
              <label>
                <input type="radio" name="user_typeFK" value={2} onChange={(e) => setUserTypeFK(e.target.value)} />
                artista
              </label>
              <label>
                <input type="radio" name="user_typeFK" value={3} onChange={(e) => setUserTypeFK(e.target.value)} />
                cliente
              </label>
            </fieldset>

            <button type="submit" className='sendBotton'>enviar</button>
          </section>
        </form>
      </Container>

      <table id="myTable">
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
              <button className='modifBotton' onClick={() => handleDelete(user.id_user)} >Delete</button> 
              
              <button className='modifBotton' onClick={() => handlePatch(user.id_user)}>Patch</button> 
              
            </td>
          </tr>
        ))}
      </tbody>
    </table>
      
    </>
  )
}

export default AdminForm;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const UserForm = ({ onSubmit }) => {
  // const [namePersonUser, setNamePersonUser] = useState('');
  // const [surnamePersonUser, setSurnamePersonUser] = useState('');
  // const [nameUser, setNameUser] = useState('');
  // const [passwordUser, setPasswordUser] = useState('');
  // const [userTypeFK, setUserTypeFK] = useState('');

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const newUser = {
  //     name_person_user: namePersonUser,
  //     surname_person_user: surnamePersonUser,
  //     name_user: nameUser,
  //     password_user: passwordUser,
  //     user_typeFK: userTypeFK
  //   };
  //   await onSubmit(newUser);
  // };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" value={namePersonUser} onChange={(e) => setNamePersonUser(e.target.value)} placeholder="Name" required />
//       <input type="text" value={surnamePersonUser} onChange={(e) => setSurnamePersonUser(e.target.value)} placeholder="Surname" required />
//       <input type="text" value={nameUser} onChange={(e) => setNameUser(e.target.value)} placeholder="Username" required />
//       <input type="password" value={passwordUser} onChange={(e) => setPasswordUser(e.target.value)} placeholder="Password" required />
//       <input type="text" value={userTypeFK} onChange={(e) => setUserTypeFK(e.target.value)} placeholder="User Type" required />
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// const UserList = ({ users, onDelete, onPatch }) => {
 
//   const handleDelete = async (id) => {
//     const user_to_delete =  {
//       id_user: id
//     }
    
//     await onDelete(user_to_delete);
//   };

//   // const handlePatch = async (id) => {
//   //   await onPatch(id);
//   // };

//   return (
    // <table>
    //   <thead>
    //     <tr>
    //       <th>ID</th>
    //       <th>Name</th>
    //       <th>Surname</th>
    //       <th>Username</th>
    //       <th>User Type</th>
    //       <th>Action</th>
    //     </tr>
    //   </thead>
    //   <tbody>
    //     {users.map((user) => (
    //       <tr key={user.id_user}>
    //         <td>{user.id_user}</td>
    //         <td>{user.name_person_user}</td>
    //         <td>{user.surname_person_user}</td>
    //         <td>{user.name_user}</td>
    //         <td>{user.user_typeFK}</td>
    //         <td>
    //           <button onClick={() => handleDelete(user.id_user)} >Delete</button> 
              
    //           <button onClick={() => handlePatch(user.id_user)}>Patch</button> 
              
    //         </td>
    //       </tr>
    //     ))}
    //   </tbody>
    // </table>
//   );
// };

// const AdminForm = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   const fetchUsers = async () => {
//     try {
//       const response = await axios.get('http://127.0.0.1:5000/user_admin/get_user'); 
//       setUsers(response.data); //setUsers= allUsers
//     } catch (error) {
//       console.error('Error fetching users:', error);
//     }
//   };

//   const addUser = async (newUser) => {
//     try {
//       // console.log(newUser)
//       await axios.post('http://127.0.0.1:5000/user_admin/post_user', newUser, {
//         headers: {
//           'Content-Type': 'application/json',
//         }
       
//       }); 
//     } catch (error) {
//       console.error('Error adding user:', error);
//     }
//     fetchUsers(); // Refresh user list after adding a new user
//   };

//   const deleteUser = async (id) => {
//     try {
//       console.log(id)

//       await axios.delete('http://127.0.0.1:5000/user_admin/delete_user', {
//         // data: { id_user: id },  
//         data: id,  
//         headers: {
//           'Content-Type': 'application/json',
//         }
       
//       }); 
//     } catch (error) {
//       console.error('Error deleting user:', error);
//     }
//     fetchUsers(); // Refresh user list after deleting a user
//   };

//   // const patchUser = async (id) => {
//   //   try {
//   //     // Assuming you have a function to fetch the user by ID
//   //     const userToUpdate = await getUserById(id);

//   //     // Implement your logic to update the user object

//   //     await axios.patch(`http://localhost:5000/user_admin/${id}`, userToUpdate, {
//   //       headers: {
//   //         'Content-Type': 'application/json',
//   //       },
//   //       withCredentials: true,
//   //     });
//   //   } catch (error) {
//   //     console.error('Error patching user:', error);
//   //   }
//   //   fetchUsers(); // Refresh user list after patching a user
//   // };

//   // const getUserById = async (id) => {
//   //   try {
//   //     const response = await axios.get(`http://127.0.0.1:5000/user_admin/get_user/${id}`, {
//   //       withCredentials: true,
//   //     });
//   //     return response.data;
//   //   } catch (error) {
//   //     console.error('Error fetching user by ID:', error);
//   //     return null;
//   //   }
//   // };

//   return (
//     <div>
//       <h1>User Management</h1>
//       <UserForm onSubmit={addUser} />
//       <UserList users={users} onDelete={deleteUser} />
//       {/* onPatch={patchUser} */}
//     </div>
//   );
// };

// export default AdminForm;



//Codigo de Ana 

// import React from 'react';
// import './adminForm.css';
// import { useState } from 'react';
// import { UserHandler } from '../../handler/UserHandler';
// import { Container } from 'reactstrap';
// import axios from "axios";
// import Swal from 'sweetalert2';

// const AdminForm = () => {

//   const [name_person_user, setName_person_user] = useState('');
//   const [surname_person_user, setSurname_person_user] = useState('');
//   const [name_user, setName_user] = useState('');
//   const [password_user, setPassword_user] = useState('');
//   const [user_typeFK, setUser_typeFK] = useState('');
//   const [Loading, setLoading] = useState("");

//   const handleChange = (e) => {
//     const { value } = e.target;
//     setUser_typeFK(value);
//   };


  
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     if (
//       name_person_user &&
//       surname_person_user &&
//       name_user &&
//       password_user &&
//       user_typeFK
//     ) {
//       try {
//         const formData = new FormData();
//         formData.append('name_person_user', name_person_user);
//         formData.append('surname_person_user', surname_person_user);
//         formData.append('name_user', name_user);
//         formData.append('password_user', password_user);
//         formData.append('user_typeFK', user_typeFK);
  
//         await UserHandler.submitUser(formData);
//         setLoading(false);

//         // Limpiar los campos del formulario
//         setName_person_user('');
//         setSurname_person_user('');
//         setName_user('');
//         setPassword_user('');
//         setUser_typeFK('');
        
//         // Mostrar SweetAlert de éxito
//         Swal.fire({
//           icon: 'success',
//           title: '¡Éxito!',
//           text: 'El formulario ha sido enviado correctamente.',
//         });
//       } catch (error) {
//         console.error('Error al enviar el formulario:', error);
//         setLoading(false);
//       }
//     } else {

//       Swal.fire({
//         icon: 'warning',
//         title: '¡Advertencia!',
//         text: 'Por favor, completa todos los campos del formulario.',
//       });
//     }


//   };

//   return (
//     <>
//       <Container>
//         <form className='adminform' onSubmit={handleSubmit}>
//           <section className='sectionForm'>

//             <div className='nameSurnameGroup'>
//               <div className='nameGroup'>
//                 <label className='nameLabel'>
//                   nombre:
//                   <input className='nameInput' type="text" name="name_person_user" onChange={(e) => setName_person_user(e.target.value)} />
//                 </label>
//               </div>

//               <div className='surnameGroup'>
//                 <label className='surnameLabel'>
//                   apellido:
//                   <input className='surnameInput' type="text" name="surname_person_user" onChange={(e) => setSurname_person_user(e.target.value)} />
//                 </label>
//               </div>
//             </div>

//             <div className='emailPasswordGroup'>
//               <div className='emailGroup'>
//                 <label className='emailLabel'>
//                   email:
//                   <input className='emailInput' type="text" name="name_user" onChange={(e) => setName_user(e.target.value)} />
//                 </label>
//               </div>

//               <div className='passwordGroup'>
//                 <label className='passwordLabel'>
//                   contraseña:
//                   <input className='passwordInput' type="text" name="password_user" onChange={(e) => setPassword_user(e.target.value)} />
//                 </label>
//               </div>
//             </div>


//             <fieldset className='selectUserFieldset'>

//               <label>
//                 <input type="radio" name="user_typeFK" value="artista" checked={user_typeFK === 'artista'} onChange={handleChange} />
//                 artista
//               </label>
//               <label>
//                 <input type="radio" name="user_typeFK" value="cliente" checked={user_typeFK === 'cliente'} onChange={handleChange} />
//                 cliente
//               </label>
//             </fieldset>

//             <button type="submit" className='sendBotton'>enviar</button>
//           </section>
//         </form>
//       </Container>
//     </>
//   )
// }

// export default AdminForm;
