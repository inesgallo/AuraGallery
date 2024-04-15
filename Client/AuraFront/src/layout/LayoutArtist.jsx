import React from 'react'
import { Outlet } from 'react-router-dom'
import NavbarCustom from '../components/navbarCustom/NavbarCustom';
import FooterCustom from '../components/footerCustom/FooterCustom'

const LayoutArtist = () => {
  return (
    <>
    <NavbarCustom />
    <h1>Soy el Layout artist</h1>
    <Outlet />
    <FooterCustom />
    </>
  )
}

export default LayoutArtist
