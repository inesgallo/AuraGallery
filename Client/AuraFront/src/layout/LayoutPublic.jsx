import { Outlet } from 'react-router-dom'
import FooterCustom from '../components/footerCustom/FooterCustom';
import Card from '../components/Card/Card';
import Login from '../components/loginComponent/LoginComponent';
import NavbarCustom from '../components/navbarCustom/NavbarCustom';

const LayoutPublic = () => {
  return (
    <>
    <NavbarCustom />
    <Outlet />
    <Card />
    <FooterCustom />
    </>
  )
}

export default LayoutPublic
