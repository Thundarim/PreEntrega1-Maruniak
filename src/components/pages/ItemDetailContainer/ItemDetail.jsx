import React, { useState } from 'react';
import './itemDetail.css';
import Counter from '../../common/counter/counter';
import CounterContainer from '../../common/counter/counterContainer';

const ItemDetail = ({ item }) => {
  const [cart, setCart] = useState([]);
  
  const onAdd = () => {
    setCart([...cart, item]);
  };


  return (
    <div className="item-detail-container">
      <h3>{item.nombre}</h3>
      <img src={item.imageUrl} alt={item.nombre} />
      <p>Stock: {item.stock}</p>
      <p>Categoria: {item.categoria}</p>
      <p>Precio: ${item.precio}</p>
      <p>Descripción: {item.descripcion}</p>
      <button onClick={onAdd}>Agregar al carrito</button>
      <CounterContainer stock={item.stock}/>
    </div>
  );
};

export default ItemDetail;
