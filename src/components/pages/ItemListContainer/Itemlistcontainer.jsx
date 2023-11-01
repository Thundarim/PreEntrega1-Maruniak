import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { productos } from '../../productsMock';
import './ItemListContainer.css';
import ProductCard from '../../common/productCard/productCard';

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { nombrecategoria } = useParams();

  useEffect(() => {

    const filteredItems = nombrecategoria
    ? productos.filter((product) => {
        if (typeof product.categoria === 'string') {
          return product.categoria.toLowerCase() === nombrecategoria.toLowerCase();
        }
        return false;
      })
    : productos;
  
    setItems(filteredItems);
  }, [nombrecategoria]);

  return (
    <div className="item-list-container">
      <div className="item-grid">
        {items.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
