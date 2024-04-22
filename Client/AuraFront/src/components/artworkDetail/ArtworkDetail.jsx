import { useLocation } from "react-router-dom";
import useLocalStorage from "../../custom/useLocalStorage";
import { UserContext } from "../../context/UserContext"; 
import { useContext } from "react";
import './artworkDetail.css';

function ArtworkDetail() {

  const location = useLocation();
  const product = location.state.product;
  console.log(product);
  
  const [cart, setCart] = useLocalStorage('shoppingCart', []);
  const { isLoggedIn } = useContext(UserContext); 

  const addToCart = (product) => {
    setCart([...cart, product])
 }

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
