import React from 'react';
import NavBar from './components/NavBar';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import { ChakraProvider } from '@chakra-ui/react';


const App = () => {
  return <>
    <ChakraProvider>
      <NavBar/>
      <ItemListContainer greeting={"¡Bienvenidos a Pinky Deco Store!"}/>
    </ChakraProvider>
    </>;
};

export default App;

