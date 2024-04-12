import React from 'react'
import { Outlet } from 'react-router-dom'
import FooterCustom from '../components/footerCustom/FooterCustom'

const LayoutAdmin = () => {
  return (
    <>
    <h1>Hola estas en Layout Admin</h1>
    <Outlet />
    <FooterCustom />
    </>
  )
}

export default LayoutAdmin
