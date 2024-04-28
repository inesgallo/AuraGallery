import React from "react";
import PropTypes from "prop-types";
import "./productCard.css";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../context/UserContext";
import ProductHandler from "../../handler/ProductHandler";
import Swal from 'sweetalert2'



const ProductCard = ({ products }) => {
  const { user } = useContext(UserContext);
  const [userProducts, setUserProducts] = useState([]);

  useEffect(() => {
    const fetchUserProducts = async () => {
      try {
        if (user) {
          const products = await ProductHandler.handlerGetProductById(user.id);
          setUserProducts(products);
        }
      } catch (error) {
        console.error("Error al obtener las obras del usuario:", error);
      }
   };
    fetchUserProducts();
   }, [user]);
   
   const handleDeleteProduct = async (productId) => {
    try {
      const confirmDelete = await Swal.fire({
        title: "¿Estás seguro de eliminar la obra?",
        text: "¡No podrás revertir esto!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#000000",
        cancelButtonColor: "#000000",
        confirmButtonText: "Sí, eliminarlo"
      });
      
      if (confirmDelete.isConfirmed) {
        await ProductHandler.deleteProduct(productId);
        setUserProducts(prevProducts => prevProducts.filter(product => product.id !== productId));

        await Swal.fire({
          title: "¡Eliminado!",
          text: "Tu obra ha sido eliminada.",
          icon: "success"
        });
      } else {
        console.log("La eliminación ha sido cancelada por el usuario.");
      }
    } catch (error) {
      console.error("Error al eliminar el producto:", error);
    }
  };


  ProductCard.propTypes = {
    product: PropTypes.shape({
      title_product: PropTypes.string,
      image_product: PropTypes.string,
    }),
  };

  return (
    <div className="artwork-container">
      {userProducts.map((product, index) => (
        <div key={index} className="card">
          <div className="artwork-image-container">
            <img src={product.image_product} alt="Imagen de la obra" />
          </div>
          <div className="artwork-details">
            <h3 className="artwork-title">{product.title_product}</h3>
            <div className="artwork-info"></div>
          </div>
          <div className="shopping">
            <button className="add-to-cart-button">ACTUALIZAR</button>
            <button className="buy-now-button"onClick={() => handleDeleteProduct(product.id_product)}>ELIMINAR</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
