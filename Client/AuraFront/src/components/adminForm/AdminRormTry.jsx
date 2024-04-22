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

const AdminFormTry = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const apiClient = axios.create({
    baseURL: 'http://localhost:5000/',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

  const fetchUsers = async () => {
    try {
      const response = await apiClient.get('/user_admin'); 
      const setUsers = response.data;
      return setUsers;
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const addUser = async (newUser) => {
    try {
      let user = JSON.stringify(newUser);
      console.log(user);
      let response = await apiClient.post('/user_admin', user,)
      let submitNewUser = response.data;
      return submitNewUser; 
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

export default AdminFormTry;