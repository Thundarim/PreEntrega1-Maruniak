import React, { useState } from 'react';
import './home.css';
const Home = () => {
  const [productosDestacados] = useState([

  ]);

  return (
    <div className="home-container">
      <section className="hero-section">
        <h1>Bienvenido a Urban Elegance</h1>
        <p>Tu destino para la moda elegante y urbana.</p>
      </section>
    </div>
  );
};

;

export default Home;
