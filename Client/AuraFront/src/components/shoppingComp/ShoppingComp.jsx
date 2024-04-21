
import  useLocalStorage  from '../../custom/useLocalStorage'

function ShoppingComp() {
 // Utilizar el hook useLocalStorage para manejar el carrito
 const [cart, setCart] = useLocalStorage('shoppingCart', []);
 const [total, setTotal] = useLocalStorage('total', 0);

 // Función para eliminar un producto del carrito
 const removeFromCart = (product) => {
    const newCart = cart.filter(item => item.id !== product.id);
    setCart(newCart);
    setTotal(newCart.reduce((acc, item) => acc + item.price, 0));
 };

 return (
    <div className="shopping-comp">
      <h2>Carrito de la Compra</h2>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        cart.map((product, index) => (
          <div key={index} className="cart-item">
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>Precio: ${product.price}</p>
            <button onClick={() => removeFromCart(product)}>Eliminar</button>
          </div>
        ))
      )}
      <p>Total: ${total}</p>
    </div>
 );
}

export default ShoppingComp;
