import React, { useState, useEffect } from 'react';

function ShoppingComp() {
 const [cartItems, setCartItems] = useState([]);

 useEffect(() => {
    // Cargar el carrito desde localStorage al montar el componente
    const savedCart = localStorage.getItem('ShoppingComp');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
 }, []);

 useEffect(() => {
    // Guardar el carrito en localStorage cada vez que cambie
    localStorage.setItem('ShoppingComp', JSON.stringify(cartItems));
 }, [cartItems]);

 const addToCart = (item) => {
    setCartItems([...cartItems, item]);
 };

 const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter(item => item.id !== itemId));
 };

 return (
    <div>
      <h2>Carrito de la Compra</h2>
      {cartItems.map(item => (
        <div key={item.id}>
          <p>{item.artworkName} - {item.artworkPrice} €</p>
          <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
        </div>
      ))}
    </div>
 );
}

export default ShoppingComp;