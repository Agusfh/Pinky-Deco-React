import React from 'react';
import NavBar from './components/NavBar';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer'
import Cart from './components/Cart';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartContext from './context/CartContext';
import Footer from './components/Footer';

import {BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {

  return (

    <CartContext>
      
    <BrowserRouter>

      <NavBar/>
      <Routes>
        <Route path='/' element={ <ItemListContainer greeting={"¡Bienvenidos a Pinky Deco Store!"}/>} />
        <Route path='/category/:id' element={ <ItemListContainer />} />
        <Route path='/item/:id' element={ <ItemDetailContainer />} />
        <Route path='/cart' element={ <Cart />} />
      </Routes>

      <Footer/>

    </BrowserRouter>

    </CartContext>
  );
};


export default App;