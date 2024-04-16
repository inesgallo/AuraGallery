import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ArtworkHandler from '../../handler/ArtworkHandler';
import PropTypes from 'prop-types';

import './Card.css'

function Card({ selectedCategory, artwork }) {
   
    const [artworks, setArtworks] = useState([]);
    
    useEffect(() => {
        ArtworkHandler.getFilteredArtworks(selectedCategory).then(filteredArtworks => {
          setArtworks(filteredArtworks);
        });
     }, [selectedCategory]); 

     Card.propTypes = {
        selectedCategory: PropTypes.string,
        artwork: PropTypes.object,
        // Añade aquí las propiedades restantes y sus tipos
       };

    return (
        
<div className="artwork-container">
      {artworks.map((artwork, index) => (
        <div key={index} className="card">
          <Link to={`/artwork/${artwork.id}`} state={{ artwork }}>            
            <div className='artwork-image-container'>
              <img
                src={artwork.artworkImage}
                alt={artwork.artworkName}
              />
              <div className="overlay">
                Ver más
              </div>
            </div>
          </Link>
              <div className="artwork-details">
                <h3 className="artwork-title">{artwork.artworkName}</h3>
                <div className="price-details">
                  <p className="price">{artwork.price}€</p>
                </div>
              </div>
              <div className="add-to-cart">
                <button className="add-to-cart-button">
                 añadir al carrito
                </button>
                <button className="buy-now">
                 comprar
                </button>
              </div>
        </div>
      ))}
    </div>
 );

}

export default Card;

