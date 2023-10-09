import React from 'react';
import './navbar.css';
import CartWidget from '../../common/cartWidget/cartWidget';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <ul>
          <li><Link to="/">Todo</Link></li>
          <li><Link to="/categoria/Vestidos">Vestidos</Link></li>
          <li><Link to="/categoria/Camisas">Camisas</Link></li>
          <li><Link to="/categoria/Pantalones">Pantalones</Link></li>
          <li><Link to="/categoria/Descuento">En descuento</Link></li>
          <li><CartWidget /></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
