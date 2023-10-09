import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './navbar';
import Footer from '../footer/footer';
import Home from '../../pages/Home/Home';

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Home/>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
