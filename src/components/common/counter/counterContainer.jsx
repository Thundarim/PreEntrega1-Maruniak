import React, { useState } from 'react';
import Counter from './Counter';
import Swal from 'sweetalert2';

const CounterContainer = ({ stock, addToCart, product }) => {
  const [quantity, setQuantity] = useState(1);

  const incrementar = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Cantidad máxima alcanzada',
        text: 'No se puede agregar más de la quantity máxima al carrito.',
      });
    }
  };

  const reducir = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    if (quantity > 0) {
      addToCart(product, quantity);
      Swal.fire('Añadido al Carrito', `Añadido ${quantity} ${product.nombre}(s) a tu carrito.`, 'success');
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Cantidad no válida',
        text: 'Debes agregar al menos una unidad al carrito.',
      });
    }
  };

  return (
    <div>
      <Counter
        incrementar={incrementar}
        reducir={reducir}
        quantity={quantity}
      />
      <button onClick={handleAddToCart}>Agregar al carrito</button>
    </div>
  );
};

export default CounterContainer;
