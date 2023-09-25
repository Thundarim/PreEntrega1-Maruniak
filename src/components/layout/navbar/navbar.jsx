import React from 'react'
import './navbar.css'
import CartWidget from '../../common/cartWidget/cartWidget';
const Navbar = () => {
  return (
    <div className="navbar">
      <h4>
        <ul>
          <li><a href="">Ropa General</a></li>
          <li><a href="">Shorts</a></li>
          <li><a href="">Camisas</a></li>
          <li><a href="">Zapatos</a></li>
          <li><a href="">En descuento</a></li>
          <li><a href=""><CartWidget /></a></li>
        </ul>
      </h4>
    </div>
  );
};

export default Navbar