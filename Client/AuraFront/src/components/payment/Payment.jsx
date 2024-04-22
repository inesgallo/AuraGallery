import { useContext } from 'react';
import { UserContext } from "../../context/UserContext";

const Payment = () => {
  
  const { user } = useContext(UserContext);
  return (
    <>
      <div className='d-flex justify-content-center fs-1'>
        {user && <p>@ {user.namePerson}! ya puedes finalizar tu compra.</p>}
      </div>
    </>
  )
}

export default Payment;
