import React from 'react'
import { Outlet } from 'react-router-dom'

const LayoutPublic = () => {
  return (
    <>
    <h1>Hola estas Layout public </h1>
    <Outlet />
    </>
  )
}

export default LayoutPublic
