import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductHandler from "../../handler/ProductHandler";
import PropTypes from "prop-types";
import "./Card.css";
import  useLocalStorage from "../../custom/useLocalStorage";

function Card({ category_product }) {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useLocalStorage('shoppingCart', []);

  useEffect(() => {
    ProductHandler.getFilteredProducts(category_product).then(
      (filteredProducts) => {
        setProducts(filteredProducts);
        console.log(filteredProducts);
      }
      
    );
  }, [category_product]);

  const addToCart = (product) => {
    setCart([...cart, product])
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
            <button className="buy-now-button">COMPRAR</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
