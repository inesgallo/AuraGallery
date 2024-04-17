import { useLocation } from "react-router-dom";

import "./artworkDetail.css";

function ArtworkDetail() {

  const location = useLocation();
  const artwork = location.state.artwork;
  console.log(artwork);

  return (
    
    <>

      <div className="artwork-detail-container">


          <section className="artwork-detail-image">
            <img src={artwork.artworkImage} alt={artwork.artworkName} />
          </section>

          <section className="artwork-detail-info">

            <h2>{artwork.artworkName}</h2>
            <p>{artwork.artistName}</p>
            <p>{artwork.description}</p>
            <p>{artwork.artworkPrice} €</p>

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
