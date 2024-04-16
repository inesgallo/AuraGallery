import { Outlet } from 'react-router-dom'
import FooterCustom from '../components/footerCustom/FooterCustom';
import Card from '../components/Card/Card';

const LayoutPublic = () => {
  return (
    <>
    
    <Outlet />
    <Card />
    <FooterCustom />
    </>
  )
}

export default LayoutPublic
