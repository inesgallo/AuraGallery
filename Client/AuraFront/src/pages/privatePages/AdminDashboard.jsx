import React , { useContext } from 'react';
import { Outlet, useNavigation } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

const AdminDashboard = () => {

  const { user } = useContext(UserContext);
  return (
    <>
     <div className='d-flex justify-content-center-2 '>
        {user && <p>Bienvenid@ {user.namePerson}</p>}
      </div>
    <h1>Admin dashboard </h1>
    </>
  )
}

export default AdminDashboard
