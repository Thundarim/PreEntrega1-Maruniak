import './App.css'
import React, { useState } from 'react';
import './App.css';
import Home from './components/pages/Home/Home';
import Navbar from './components/layout/navbar/navbar';
import ItemListContainer from './components/pages/ItemListContainer/Itemlistcontainer';

function App() { 
   return (
    <div>
      <Navbar />
      <ItemListContainer nombre={"Roberto"} edad={22} verdad={true}/>
      <Home />
    </div>
)
}


export default App
