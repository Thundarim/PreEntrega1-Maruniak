import React, { useState } from 'react';
import Counter from './counter';

const CounterContainer = ({ stock }) => {
  const [cantidad, setCantidad] = useState(0);

  const incrementar = () => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1);
    } else {
      alert('Cantidad máxima alcanzada');
    }
  };

  const reducir = () => {
    if (cantidad > 0) {
      setCantidad(cantidad - 1);
    }
  };

  return <Counter incrementar={incrementar} reducir={reducir} cantidad={cantidad} />;
};

export default CounterContainer;
