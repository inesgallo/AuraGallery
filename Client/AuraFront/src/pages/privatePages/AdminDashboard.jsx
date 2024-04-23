import React, { useContext } from 'react';
import { UserContext } from "../../context/UserContext";
//import AdminFormTry from '../../components/adminForm/AdminRormTry';
import AdminForm from '../../components/adminForm/AdminForm';

const AdminDashboard = () => {

  const { user } = useContext(UserContext);
  return (
    <>
      <div className='d-flex justify-content-center fs-1'>
        {user && <p>¡Bienvenid@ {user.namePerson}!</p>}
      </div>
    <h1>Admin dashboard </h1>
    <AdminForm/>
    {/* <AdminFormTry/> */}
    </>
  )
}

export default AdminDashboard;
