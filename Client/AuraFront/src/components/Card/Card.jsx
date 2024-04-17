import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ArtworkHandler from "../../handler/ArtworkHandler";
import PropTypes from "prop-types";
import "./Card.css";

function Card({ selectedCategory }) {
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    ArtworkHandler.getFilteredArtworks(selectedCategory).then(
      (filteredArtworks) => {
        setArtworks(filteredArtworks);
        console.log(filteredArtworks);
      }
      
    );
  }, [selectedCategory]);

  Card.propTypes = {
    selectedCategory: PropTypes.string,
    artwork: PropTypes.object,
    setArtworks: PropTypes.func,
  };

  return (
    <div className="artwork-container">
      {artworks?.map((artwork, index) => (
        <div key={index} className="card">

          <Link to={`/Artdetail/${artwork.artworkName}`} state={{artwork}}>

            <div className="artwork-image-container">
              <img src={artwork.artworkImage} alt={artwork.artworkName} />
            </div>
            
          </Link>

          <div className="artwork-details">

            <h3 className="artwork-title">{artwork.artworkName}</h3>

            <div className="artwork-info">

              <p className="artist-name">{artwork.artistName}</p>
              <p className="artwork-description">{artwork.description}</p>
            
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
