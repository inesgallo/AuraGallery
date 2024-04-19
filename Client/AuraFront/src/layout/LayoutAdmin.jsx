import React from 'react'
import { Outlet } from 'react-router-dom'
import NavbarCustom from '../components/navbarCustom/NavbarCustom';
import FooterCustom from '../components/footerCustom/FooterCustom'

const LayoutAdmin = () => {
  return (
    <>
    <NavbarCustom />
    <h1>Hola estas en Layout Admin</h1>
    <Outlet />
    <FooterCustom />
    </>
  )
}

export default LayoutAdmin
