import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <div className="footer-container">
      <p className="footer-texto">&copy; {new Date().getFullYear()} Urban Elegance</p>
    </div>
  );
};

export default Footer;
