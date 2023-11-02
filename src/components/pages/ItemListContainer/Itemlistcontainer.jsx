import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDocs, collection, query, where, addDoc } from "firebase/firestore";
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
        const querySnapshot = await getDocs(consulta);
        const fetchedItems = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setItems(fetchedItems);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
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
