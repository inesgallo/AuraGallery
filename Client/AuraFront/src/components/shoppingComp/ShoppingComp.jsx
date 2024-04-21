import React, { useState, useEffect } from 'react';
import useLocalStorage from '../../custom/useLocalStorage';

function ShoppingComp() {
 const [cart, setCart] = useLocalStorage('shoppingCart', []);

 // Función para eliminar un producto del carrito
 const removeFromCart = (product) => {
    setCart(cart.filter(item => item.title_product !== product.title_product));
 };

 return (
    <div className="shopping-comp">
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <div>
          {cart.map((product, index) => (
            <div key={index} className="cart-item">
              <img src={product.image_product} alt={product.title_product} />
              <h3>{product.title_product}</h3>
              <p>{product.name_artist}</p>
              <button onClick={() => removeFromCart(product)}>Eliminar</button>
            </div>
          ))}
        </div>
      )}
    </div>
 );
}

export default ShoppingComp;
