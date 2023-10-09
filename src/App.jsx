import './App.css';
import React from 'react';
import Home from './components/pages/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/pages/ItemListContainer/Itemlistcontainer';
import ItemDetailContainer from './components/pages/ItemDetailContainer/ItemDetailContainer';
import Layout from './components/layout/navbar/layout';
function App() {
  return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path='/' element={<ItemListContainer />} />
              <Route path='Carrito'></Route>
              <Route path='home' element={<Home></Home>}/>
              <Route path="/itemdetail/:id" element={<ItemDetailContainer />} />
              <Route path="/categoria/:nombrecategoria" element={<ItemListContainer />}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
