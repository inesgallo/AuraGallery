import { useContext } from 'react';
import Payment from '../../components/payment/Payment';
import { UserContext } from "../../context/UserContext";

const ExitPayment = () => {
  
  const { user } = useContext(UserContext);
  return (
    <>
      <div className='d-flex justify-content-center fs-1'>
        {user && <p>Ya puedes finalizar tu compra {user.namePerson}!</p>}
      </div>
    <Payment />
    </>
  )
}

export default ExitPayment;
