import React from 'react'
import { Outlet } from 'react-router-dom'
import NavbarCustom from '../components/navbarCustom/NavbarCustom';

const LayoutPublic = () => {
  return (
    <>
    <NavbarCustom />
    <h1>Hola estas Layout public </h1>
    <Outlet />
    </>
  )
}

export default LayoutPublic
