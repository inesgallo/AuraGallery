import React from 'react'
import { Outlet } from 'react-router-dom'
import NavbarCustom from '../components/navbarCustom/NavbarCustom';

const LayoutArtist = () => {
  return (
    <>
    <NavbarCustom />
    <h1>Soy el Layout artist</h1>
    <Outlet />
    </>
  )
}

export default LayoutArtist
