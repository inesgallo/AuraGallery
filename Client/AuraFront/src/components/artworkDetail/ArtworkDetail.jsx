import { useLocation } from "react-router-dom";

import "./artworkDetail.css";

function ArtworkDetail() {

  const location = useLocation();
  const product = location.state.product;
  console.log(product);

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
              <button className="add-to-cart-button">AÑADIR AL CARRITO</button>
              <button className="buy-now-button">COMPRAR</button>
            </div>

        </section>
      </div>
    </>
  );
}

export default ArtworkDetail;
