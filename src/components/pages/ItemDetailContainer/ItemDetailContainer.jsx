import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { productos } from '../../productsMock';

const fetchItemById = (id) => {
  return new Promise((resolve, reject) => {
    const fetchedItem = productos.find((item) => item.id === parseInt(id));
    if (fetchedItem) {
      resolve(fetchedItem);
    } else {
      reject(new Error('Item not found'));
    }
  });
};

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchItemById(id)
      .then((fetchedItem) => {
        setItem(fetchedItem);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching item:', error);
        setLoading(false);
      });
  }, [id]);

  return (
    <div>
      {loading ? (
        <h2>Cargando...</h2>
      ) : item ? (
        <div>
          <h2>Detalles del item: {item.id}</h2>
          <ItemDetail item={item} />
        </div>
      ) : (
        <h2>Item no encontrado</h2>
      )}
    </div>
  );
};

export default ItemDetailContainer;
