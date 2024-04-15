import React from 'react'
import { Outlet, useNavigation } from "react-router-dom";
import ArtistForm from '../../components/artistForm/ArtistForm';

const ArtistDashboard = () => {
  return (
    <>

    <h1>Hola esto es Artist Dashboard Page</h1>
    <ArtistForm />
    </>
  )
}

export default ArtistDashboard
