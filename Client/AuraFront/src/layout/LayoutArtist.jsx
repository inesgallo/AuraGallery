import React from 'react'
import { Outlet } from 'react-router-dom'

const LayoutArtist = () => {
  return (
    <>
    <h1>Soy el Layout artist</h1>
    <Outlet />
    </>
  )
}

export default LayoutArtist
