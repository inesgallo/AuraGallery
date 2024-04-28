import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import useLocalStorage from "../../custom/useLocalStorage";
import { UserContext } from "../../context/UserContext";
import Swal from 'sweetalert2';
import './card.css';

function Card({ category_product }) {
 const [products, setProducts] = useState([]);
 const [cart, setCart] = useLocalStorage('shoppingCart', []);
 const { isLoggedIn } = useContext(UserContext); 


//  const addToCart = (product) => {
//     setCart([...cart, product])
//     Swal.fire({
//       icon: 'success',
//       title: '¡Producto añadido al carrito!',
//       text: `${product.title_product} ha sido añadido a tu carrito.`,
//       showConfirmButton: false,
//       timer: 1500
//   });
//  }

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
        window.location.href = `/exitpayment/`;
      } else {
        window.location.href = `/login`;
      }
    }
    handleClick(); 
 }

 Card.propTypes = {
    category_product: PropTypes.string,
    product: PropTypes.object,
    setProducts: PropTypes.func,
 };

 return (
    <div className="artwork-container">
      {products?.map((product, index) => (
        <div key={index} className="card">
          <Link to={`/Artdetail/${product.title_product}`} state={{product}}>
            <div className="artwork-image-container">
              <img src={product.image_product} alt={product.title_product} />
            </div>
          </Link>
          <div className="artwork-details">
            <h3 className="artwork-title">{product.title_product}</h3>
            <div className="artwork-info">
              <hr></hr>
              <p className="artist-name">{product.name_artist}</p>
              <p className="artwork-description">{product.description_product}</p>
              <hr></hr>
              <p className="artwork-price">{product.price_product} €</p>
            </div>
          </div>
          <div className="shopping">
            <button className="add-to-cart-button" onClick={() => addToCart(product)}>AÑADIR AL CARRITO</button>
            <button className="buy-now-button" onClick={() => buyNow(product)}>COMPRAR</button>
          </div>
        </div>
      ))}
    </div>
 );
}

export default Card;

