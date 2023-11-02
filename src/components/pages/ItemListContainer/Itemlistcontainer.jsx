import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDocs, collection, query, where } from 'firebase/firestore';
import './ItemListContainer.css';
import ProductCard from '../../common/productCard/productCard';
import { db } from '../../../firebaseconfig';

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { nombrecategoria } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      let consulta;

      if (!nombrecategoria) {
        consulta = collection(db, 'products');
      } else {
        consulta = query(
          collection(db, 'products'),
          where('categoria', '==', nombrecategoria)
        );
      }

      try {
        // Simula un estado de carga mientras se obtienen los datos
        setItems([]);

        const querySnapshot = await getDocs(consulta);
        const fetchedItems = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

        // Filtra los elementos con stock > 0, si es necesario
        const filteredItems = fetchedItems.filter((item) => item.stock > 0);
        setItems(fetchedItems);
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    };

    fetchData();
  }, [nombrecategoria]);

  return (
    <div className="item-list-container">
      <div className="item-grid">
        {items.map((item) => (
          <ProductCard key={item.id} producto={item} />
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
