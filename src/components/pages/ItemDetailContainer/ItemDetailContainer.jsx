import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { collection, doc, getDoc } from 'firebase/firestore';
import { db } from '../../../firebaseconfig';
import { CartContext } from '../../../context/CartContext';
import Swal from 'sweetalert2';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(CartContext);

  const onQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
  };

  const fetchItemById = (id) => {
    return new Promise((resolve, reject) => {
      const itemRef = doc(collection(db, 'products'), id);

      getDoc(itemRef)
        .then((docSnap) => {
          if (docSnap.exists()) {
            const fetchedItem = { id: docSnap.id, ...docSnap.data() };
            resolve(fetchedItem);
          } else {
            reject(new Error('Artículo no encontrado'));
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  useEffect(() => {
    setLoading(true);
    fetchItemById(id)
      .then((fetchedItem) => {
        setItem(fetchedItem);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error al obtener el artículo:', error);
        setLoading(false);
      });
  }, [id]);

  const onAddToCart = () => {
    if (quantity > 0 && item) {
      addToCart(item, quantity);
      setShowCounter(false);

      // Mostrar SweetAlert para la adición exitosa al carrito
      Swal.fire({
        icon: 'success',
        title: 'Añadido de manera correcta',
        showConfirmButton: false,
        timer: 1500, // Ajusta el tiempo que se muestra la alerta
      });
    }
  };

  return (
    <div>
      {loading ? (
        <h2>Cargando...</h2>
      ) : item ? (
        <div>
          <h2>Detalles del artículo: {item.id}</h2>
          <ItemDetail item={item} />
        </div>
      ) : (
        <h2>Artículo no encontrado</h2>
      )}
    </div>
  );
};

export default ItemDetailContainer;
