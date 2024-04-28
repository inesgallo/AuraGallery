import useLocalStorage from '../../custom/useLocalStorage';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import Swal from 'sweetalert2';
import './shoppingComp.css';

function ShoppingComp() {
 const [cart, setCart] = useLocalStorage('shoppingCart', []);
 const { isLoggedIn } = useContext(UserContext); 

//  // Función para eliminar un producto del carrito
//  const removeFromCart = (product) => {
//     setCart(cart.filter(item => item.title_product !== product.title_product));
//  };

// Función para eliminar un producto del carrito teniendo en cuenta la cantidad de unidades
const removeFromCart = (product) => {
  setCart(cart.map(item => {
     if (item.title_product === product.title_product) {
       // Disminuye la cantidad del producto
       item.quantity -= 1;
       // Si la cantidad es 0, elimina el producto
       if (item.quantity <= 0) {
         return null;
       }
     }
     return item;
  }).filter(item => item !== null)); // Filtra los productos eliminados

  Swal.fire({
    icon: 'fail',
    title: '¡Producto eliminado del carrito!',
    text: `${product.title_product} ha sido eliminado de tu carrito.`,
    showConfirmButton: true,
 });

 };
 

 // Función para vaciar el carrito
 const emptyCart = () => {
    setCart([]);
 };

 const sumTotal = () => {
 let total = 0;
 cart.forEach((product) => {
      total += parseFloat(product.price_product); // Convierte el precio a número antes de sumar
 });
 total += 45; // Suma los gastos de envío al total
 return total;
 };

 // Función para manejar la compra
 const buyNow = () => {
    const handleClick = () => {
      if (isLoggedIn) {
        window.location.href = `/exitpayment`;
      } else {
        window.location.href = `/login`;
      }
    }
    handleClick(); 
 }

 return (
  <div className="shopping-comp">
     {cart.length === 0 ? (
       <p className="empty-cart">Tu carrito está vacío.</p>
     ) : (
       <div className="cart-items">
         <h2>CARRITO</h2>
         {cart.map((product, index) => (
           <div key={index} className="cart-item">
             <img className="cart-image" src={product.image_product} alt={product.title_product} />
             <p><b>{product.title_product}</b></p>
             <p>{product.name_artist}</p>
             <p><b>{product.price_product} €</b></p>
             {/* Muestra la cantidad de cada producto */}
             <p>Cant: <b>{product.quantity}</b></p>
             <button className="remove-button" onClick={() => removeFromCart(product)}>X</button>
           </div>
         ))}
         <section className="info-total">
           <div className="gastosenvio">
               <p>Gastos de envío = 45€</p>
           </div>
           <div className="total">
               <p>Total: <b>{sumTotal()} €</b></p>
           </div>
           <button className="buy-now-button" onClick={buyNow}>COMPRAR</button>
           <button className="empty-cart-button" onClick={emptyCart}>VACIAR CARRITO</button>
         </section>
         
       </div>
       
     )}
     
  </div>
 )
 ;
}

export default ShoppingComp;
