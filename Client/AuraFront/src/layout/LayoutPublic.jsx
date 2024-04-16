import { Outlet } from 'react-router-dom'
import FooterCustom from '../components/footerCustom/FooterCustom';

const LayoutPublic = () => {
  return (
    <>
    <Outlet />
    
    <FooterCustom />
    </>
  )
}

export default LayoutPublic
