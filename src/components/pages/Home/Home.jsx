import React, { useState } from 'react';
import './home.css';


const Home = () => {
  const [productosDestacados] = useState([
    {
      id: 1,
      name: 'Traje elegante hombre',
      imageUrl: 'https://i.pinimg.com/originals/ce/6b/2f/ce6b2f26adfc594da75cd30f70c9dc6a.png',
    },
    {
      id: 2,
      name: 'Vestido elegante mujer ',
      imageUrl: 'https://cdn.pixabay.com/photo/2022/11/09/10/52/woman-7580308_1280.png',
    },
    // Añadir mas productos si es necesario
  ]);

  return (
    <div className="home-container">
      <section className="hero-section">
        <h1>Bienvenido a Urban Elegance</h1>
        <p>Tu destino para la moda elegante y urbana.</p>
      </section>

      <section className="categorias-productos">
        <h2>Explora nuestras categorias</h2>
        <div className="categoria-tarj">
          {/* contenido de categoria 1 */}
          <h2>Urbanos</h2>
        </div>
        <div className="categoria-tarj">
          {/* contenido categoria 2 */}
          <h2>Elegantes</h2>
        </div>
        {/* añadir mas tarjetas de categoria como sea necesario */}
      </section>

      <section className="productos-destacados">
        <h2>Productos Destacados</h2>
        {productosDestacados.map(product => (
          <div className="productos-destacado-tarj" key={product.id}>
            <img src={product.imageUrl} alt={product.name} />
            <h3>{product.name}</h3>
          </div>
        ))}
      </section>
    </div>
  );
};


;

export default Home;
