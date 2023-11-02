import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './navbar';
import Footer from '../footer/footer';
import Home from '../../pages/Home/Home';

const Layout = () => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <Navbar onCategorySelect={handleCategorySelect} />
      <Home selectedCategory={selectedCategory} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
