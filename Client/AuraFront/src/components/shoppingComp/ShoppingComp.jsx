import {useState} from 'react'
import './shoppingComp.css'
import {useLocalStorage} from '../../custom/useLocalStorage'

function ShoppingComp() {
   const [cart, setCart] = useLocalStorage('cart', [])
   const [total, setTotal] = useState(0)

   const removeFromCart = (product) => {
    setCart(cart.filter(item => item.id_product !== product.id_product))
    setTotal(total - product.price_product)
   }

   return  (
    <>
    <h1 className='shopping-title'>CARRITO</h1>
    <div className='shopping-container'>
    {cart.map(product => (
      <div className='shopping-card' key={product.id_product}> 
        <img src={product.image_product} alt={product.title_product} />
        <h3>{product.title_product}</h3>
        <p>{product.price_product} €</p>
        <button onClick={() => removeFromCart(product)}>Eliminar</button>
      </div>
    ))}
    <p>Total: {total} €</p>
    </div>
    </>
   )
}

export default ShoppingComp