import React , { useContext } from 'react';
import ArtistForm from '../../components/artistForm/ArtistForm';
import MultiplesImagenes from '../../components/MultiplesImagenes';
import { UserContext } from "../../context/UserContext";

const ArtistDashboard = () => {
  
  const { user } = useContext(UserContext);
  return (
    <>
      <div className='d-flex justify-content-center fs-1'>
        {user && <p>¡Bienvenid@ {user.namePerson}!</p>}
      </div>
    <MultiplesImagenes /> 
    <ArtistForm />
    </>
  )
}

export default ArtistDashboard;
