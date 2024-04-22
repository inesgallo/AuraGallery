import React from 'react';
import PropTypes from "prop-types";



const UsersCard = ({ product,onDelete }) => {
    const { title_product, image_product,id_product } = product || {};

    UsersCard.propTypes = {
        product: PropTypes.shape({
           title_product: PropTypes.string,
           image_product: PropTypes.string,
           // Agrega aquí más propiedades del producto si es necesario
        }),
       };
    
    const handleDelete = () =>{
      onDelete(id_product);
    }
 return (
    <div className="artwork-container">
      <div className="card">
        <div className="artwork-image-container">
          <img src={image_product} alt="Imagen de la obra" />
        </div>
        <div className="artwork-details">
          <h3 className="artwork-title">{title_product}</h3>
          <div className="artwork-info">
          </div>
        </div>
        <div className="shopping">
          <button className="add-to-cart-button" >ACTUALIZAR</button>
          <button className="buy-now-button"onClick={handleDelete} >ELIMINAR</button>
        </div>
      </div>
    </div>
 );
}

export default UsersCard;
