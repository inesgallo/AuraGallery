import { Outlet } from 'react-router-dom'
import FooterCustom from '../components/footerCustom/FooterCustom';
import NavbarCustom from '../components/navbarCustom/NavbarCustom';


const LayoutPublic = () => {
  return (
    <>
    <NavbarCustom />
    <Outlet />
    <FooterCustom />
    </>
  )
}

export default LayoutPublic
