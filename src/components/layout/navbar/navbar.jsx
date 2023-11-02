import React, { useState, useEffect } from 'react';
import './navbar.css';
import CartWidget from '../../common/cartWidget/cartWidget';
import { Link } from 'react-router-dom';
import { db } from '../../../firebaseconfig';
import { collection, getDocs, query, where } from '@firebase/firestore';

export const Navbar = ({ onCategorySelect }) => {
  const [categorias, setCategorias] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    const categoriasCollection = collection(db, "products");
    const categoriasQuery = query(categoriasCollection, where("categoria", ">", ""));

    getDocs(categoriasQuery)
      .then((res) => {
        let arrayCategorias = res.docs.map((producto) => producto.data().categoria);
        setCategorias(Array.from(new Set(arrayCategorias)));
      })
      .catch((err) => console.log(err));
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    onCategorySelect(category);
  };

  return (
    <div>
      <div className="navbar">
        <ul>
          <ul className="categories">
            <Link to="/">
              <li>Todas</li>
            </Link>
            {categorias.map((categoria, index) => (
              <Link key={index} to={`/categoria/${categoria}`}>
                <li onClick={() => handleCategoryClick(categoria)}>{categoria}</li>
              </Link>
            ))}
          </ul>
          <li  style={{ display: 'flex', alignItems: 'center' }}><CartWidget /></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
