import React from 'react'
import { IoMdCart } from 'react-icons/io'
import './navbar.css'
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
          <li><a href="">5<IoMdCart /></a></li>
        </ul>
      </h4>
    </div>
  );
};

export default Navbar