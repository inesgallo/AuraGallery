import React from 'react'
import { Outlet } from 'react-router-dom'
import FooterCustom from '../components/footerCustom/FooterCustom';
import Login from '../components/loginComponent/LoginComponent';

const LayoutPublic = () => {
  return (
    <>
    <Outlet />
    <FooterCustom />
    </>
  )
}

export default LayoutPublic
