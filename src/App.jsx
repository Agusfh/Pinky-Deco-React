import React from 'react';
import NavBar from './components/NavBar';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import CartContext from './context/CartContext';

import {BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {

  return (

    <CartContext>
      
    <BrowserRouter>

      <NavBar/>
      <Routes>
        <Route path='/' element={ <ItemListContainer greeting={"¡Bienvenidos a Pinky Deco Store!"}/>} />
        <Route path='/category/:id' element={ <ItemListContainer greeting={"¡Bienvenidos a Pinky Deco Store!"}/>} />
        <Route path='/item/:id' element={ <ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>

    </CartContext>
  );
};


export default App;