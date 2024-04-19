import React , { useContext } from 'react';
import { Outlet, useNavigation } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

const ArtistDashboard = () => {
  
  const { user } = useContext(UserContext);
  return (
    <>
    <h1>Hola esto es Artist Dashboard PAge</h1>
    <div>
      {user && <p>Bienvenido, {user.namePerson}</p>}
    </div>
    </>
  )
}

export default ArtistDashboard
