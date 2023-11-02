import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from '../../../context/CartContext';
import Swal from 'sweetalert2';
import { Link } from "react-router-dom";
import './cart.css';
import { Button } from '@mui/material';

const Cart = () => {
  const { cart, deleteProductById, clearCart } = useContext(CartContext);
  const [totalPrice, setTotalPrice] = useState(0);
  let exceedsStock = false;

  useEffect(() => {
    const calculatedTotalPrice = cart.reduce((total, item) => {
      const itemTotal = item.precio * item.quantity;
      if (itemTotal > item.stock) {
        exceedsStock = true;
      }
      return total + itemTotal;
    }, 0);

    setTotalPrice(calculatedTotalPrice);
  }, [cart]);

  const showRemoveItemAlert = (item) => {
    Swal.fire({
      icon: 'success',
      title: 'Artículo eliminado del carrito',
      showConfirmButton: false,
      timer: 1500,
    });

    deleteProductById(item.id);
  };

  // Función para mostrar una SweetAlert al vaciar el carrito
  const showClearCartAlert = () => {
    Swal.fire({
      icon: 'warning',
      title: '¿Estás seguro de que quieres vaciar el carrito?',
      showCancelButton: true,
      confirmButtonText: 'Vaciar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: 'success',
          title: 'Carrito vaciado',
          showConfirmButton: false,
          timer: 1500,
        });

        clearCart();
        setTotalPrice(0); // Resetea el precio total al vaciar el carrito
      }
    });
  };

  return (
    <div>
      <h2>Carrito</h2>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <div>
          <ul>
            {cart.map((item) => {
              // Calcula el precio total del artículo
              const itemTotal = item.precio * item.quantity;

              // Verifica si el precio total supera el stock
              if (itemTotal > item.stock) {
                exceedsStock = true;
              }

              return (
                <li key={item.id}>
                  {item.nombre} - Cantidad: {item.quantity} - Precio total: ${itemTotal}
                  <Button variant="contained" onClick={() => showRemoveItemAlert(item)}>Eliminar</Button>
                </li>
              );
            })}
          </ul>
          {exceedsStock && (
            <p>Uno o más productos en el carrito superan el stock disponible.</p>
          )}
          <p>Total del carrito: ${totalPrice}</p>
          <Button variant="contained" onClick={showClearCartAlert}>Vaciar Carrito</Button>
          <Link to="/checkout">
            <Button variant="contained">Finalizar compra</Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
