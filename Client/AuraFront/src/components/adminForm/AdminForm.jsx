<<<<<<< HEAD
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

const UserList = ({ users }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Surname</th>
          <th>Username</th>
          <th>User Type</th>
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
      const response = await axios.get('http://localhost:5000/user_admin'); 
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const addUser = async (newUser) => {
    try {
      await axios.post('http://localhost:5000/user_admin', newUser); 
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  return (
    <div>
      <h1>User Management</h1>
      <UserForm onSubmit={addUser} />
      <UserList users={users} />
    </div>
  );
};

export default AdminForm;

=======
import React from 'react';
import './adminForm.css';
import { useState } from 'react';
import { UserHandler } from '../../handler/UserHandler';
import { Container } from 'reactstrap';
import axios from "axios";
import Swal from 'sweetalert2';

const AdminForm = () => {

  const [name_person_user, setName_person_user] = useState('');
  const [surname_person_user, setSurname_person_user] = useState('');
  const [name_user, setName_user] = useState('');
  const [password_user, setPassword_user] = useState('');
  const [user_typeFK, setUser_typeFK] = useState('');
  const [Loading, setLoading] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    setUser_typeFK(value);
  };


  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (
      name_person_user &&
      surname_person_user &&
      name_user &&
      password_user &&
      user_typeFK
    ) {
      try {
        const formData = new FormData();
        formData.append('name_person_user', name_person_user);
        formData.append('surname_person_user', surname_person_user);
        formData.append('name_user', name_user);
        formData.append('password_user', password_user);
        formData.append('user_typeFK', user_typeFK);
  
        await UserHandler.submitUser(formData);
        setLoading(false);

        // Limpiar los campos del formulario
        setName_person_user('');
        setSurname_person_user('');
        setName_user('');
        setPassword_user('');
        setUser_typeFK('');
        
        // Mostrar SweetAlert de éxito
        Swal.fire({
          icon: 'success',
          title: '¡Éxito!',
          text: 'El formulario ha sido enviado correctamente.',
        });
      } catch (error) {
        console.error('Error al enviar el formulario:', error);
        setLoading(false);
      }
    } else {

      Swal.fire({
        icon: 'warning',
        title: '¡Advertencia!',
        text: 'Por favor, completa todos los campos del formulario.',
      });
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
                  <input className='nameInput' type="text" name="name_person_user" onChange={(e) => setName_person_user(e.target.value)} />
                </label>
              </div>

              <div className='surnameGroup'>
                <label className='surnameLabel'>
                  apellido:
                  <input className='surnameInput' type="text" name="surname_person_user" onChange={(e) => setSurname_person_user(e.target.value)} />
                </label>
              </div>
            </div>

            <div className='emailPasswordGroup'>
              <div className='emailGroup'>
                <label className='emailLabel'>
                  email:
                  <input className='emailInput' type="text" name="name_user" onChange={(e) => setName_user(e.target.value)} />
                </label>
              </div>

              <div className='passwordGroup'>
                <label className='passwordLabel'>
                  contraseña:
                  <input className='passwordInput' type="text" name="password_user" onChange={(e) => setPassword_user(e.target.value)} />
                </label>
              </div>
            </div>


            <fieldset className='selectUserFieldset'>

              <label>
                <input type="radio" name="user_typeFK" value="artista" checked={user_typeFK === 'artista'} onChange={handleChange} />
                artista
              </label>
              <label>
                <input type="radio" name="user_typeFK" value="cliente" checked={user_typeFK === 'cliente'} onChange={handleChange} />
                cliente
              </label>
            </fieldset>

            <button type="submit" className='sendBotton'>enviar</button>
          </section>
        </form>
      </Container>
    </>
  )
}

export default AdminForm;
>>>>>>> develop
