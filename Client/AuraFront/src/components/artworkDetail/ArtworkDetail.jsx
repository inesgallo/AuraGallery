import { useLocation } from "react-router-dom";
import useLocalStorage from "../../custom/useLocalStorage";
import { UserContext } from "../../context/UserContext";
import Swal from 'sweetalert2';
import { useContext } from "react";
import './artworkDetail.css';

function ArtworkDetail() {

  const location = useLocation();
  const product = location.state.product;
  console.log(product);
  
  const [cart, setCart] = useLocalStorage('shoppingCart', []);
  const { isLoggedIn } = useContext(UserContext); 


  const addToCart = (product) => {
    // Busca el índice del producto en el carrito
    const index = cart.findIndex(item => item.title_product === product.title_product);
   
    if (index === -1) {
       // Si el producto no está en el carrito, añádelo con una cantidad de 1
       setCart([...cart, { ...product, quantity: 1 }]);
    } else {
       // Si el producto ya está en el carrito, incrementa su cantidad
       const updatedCart = [...cart];
       updatedCart[index].quantity += 1;
       setCart(updatedCart);
    }
   
    Swal.fire({
       icon: 'success',
       title: '¡Producto añadido al carrito!',
       text: `${product.title_product} ha sido añadido a tu carrito.`,
       showConfirmButton: false,
       timer: 1500
    });
   };
   

 const buyNow = () => {
    const handleClick = () => {
      if (isLoggedIn) {
        window.location.href = `/payment/`;
      } else {
        window.location.href = `/login`;
      }
    }
    handleClick(); // Llama a la función aquí
 }

  return (
    
    <>
      <div className="artwork-detail-container">


          <section className="artwork-detail-image">
            <img src={product.image_product} alt={product.title_product} />
          </section>

          <section className="artwork-detail-info">

            <h2>{product.title_product}</h2>
            <p>{product.name_artist}</p>
            <p>{product.description_product}</p>
            <p>{product.price_product} €</p>

            <hr></hr>

            <div className="shopping">
            <button className="add-to-cart-button" onClick={() => addToCart(product)}>AÑADIR AL CARRITO</button>
            <button className="buy-now-button" onClick={() => buyNow(product)}>COMPRAR</button>
            </div>

        </section>
      </div>
    </>
  );
}

export default ArtworkDetail;
