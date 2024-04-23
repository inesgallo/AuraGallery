import { useContext } from 'react';
import { UserContext } from "../../context/UserContext";
import pasarela from '/public/img-8/pasarela.png';

import './payment.css';

const Payment = () => {
  
  const { user } = useContext(UserContext);
  return (
    
    
    <>
    <h2 id="payment-title" className="payment-title">PASARELA DE PAGOS</h2>
      <div className='d-flex justify-content-center fs-1'>
        {user && <p>@ {user.namePerson}! ya puedes finalizar tu compra.</p>}
        <img src={ pasarela } className='imgPayment' alt="exit" />
      </div>
    </>
    
  )
}

export default Payment;
