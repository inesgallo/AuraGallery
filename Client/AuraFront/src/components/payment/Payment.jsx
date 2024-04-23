import pasarela from '/public/img-8/pasarela.png';

import './payment.css';

const Payment = () => {


  return (
    
    <>
    <h2 id="payment-title" className="payment-title">PASARELA DE PAGOS</h2>
      <div className='d-flex justify-content-center fs-1'>

        <img src={ pasarela } className='imgPayment' alt="exit" />
      </div>
    </>
    
  )
}

export default Payment;
