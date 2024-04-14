import React from 'react'
import { Outlet } from 'react-router-dom'
import FooterCustom from '../components/footerCustom/FooterCustom'

const LayoutArtist = () => {
  return (
    <>
    <h1>Soy el Layout artist</h1>
    <Outlet />
    <FooterCustom />
    </>
  )
}

export default LayoutArtist
