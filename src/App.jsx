import React from 'react';
import NavBar from './components/NavBar';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from "./data.json";
import ItemList from './components/ItemList';

const App = () => {
  console.log(data);
  return <>
      <NavBar/>
      <ItemListContainer greeting={"¡Bienvenidos a Pinky Deco Store!"}/>
    </>;
};

export default App;

