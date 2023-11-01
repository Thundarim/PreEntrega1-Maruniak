import React from 'react';

const Cart = ({ cartItems }) => {
  return (
    <div className="cart-container">
      <h2>Carrito de compras</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>{item.nombre}</li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
