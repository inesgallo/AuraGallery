import React, { useContext } from 'react';
import { UserContext } from "../../context/UserContext";
import AdminForm from '../../components/adminForm/AdminForm';

const AdminDashboard = () => {

  const { user } = useContext(UserContext);
  return (
    <>
      <div className='d-flex justify-content-center fs-1'>
        {user && <p>¡Bienvenid@ {user.namePerson}!</p>}
      </div>
<<<<<<< HEAD
    <h1>Admin dashboard </h1>
    <AdminForm/>
=======
      <AdminForm />
>>>>>>> develop
    </>
  )
}

export default AdminDashboard;
