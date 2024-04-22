import useLocalStorage from '../../custom/useLocalStorage';
import './shoppingComp.css';

function ShoppingComp() {
 const [cart, setCart] = useLocalStorage('shoppingCart', []);

 // Función para eliminar un producto del carrito
 const removeFromCart = (product) => {
    setCart(cart.filter(item => item.title_product !== product.title_product));
 };

 const sumTotal = () => {
  let total = 0;
  cart.forEach((product) => {
      total += parseFloat(product.price_product); // Convierte el precio a número antes de sumar
  });
  total += 45; // Suma los gastos de envío al total
  return total;
};

 return (
    <div className="shopping-comp">
      {cart.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <div className="cart-items">
          <h2>CARRITO</h2>
          {cart.map((product, index) => (
            <div key={index} className="cart-item">
              <img className="cart-image" src={product.image_product} alt={product.title_product} />
              <p><b>{product.title_product}</b></p>
              <p>{product.name_artist}</p>
              <p><b>{product.price_product} €</b></p>
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
            <button className="buy-now-button">COMPRAR</button>
          </section>
          
        </div>
        
      )}
      
    </div>
    
 );
}

export default ShoppingComp;
