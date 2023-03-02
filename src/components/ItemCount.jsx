import React from 'react'
import { useState } from 'react';
import Data from "../data.json";

const ItemCount = ({stock}) => {
    const [contador, setContador] = useState(1);

    const stockMin = () => {
      if (contador<=1) {
        setContador(1);}
      else {
        setContador(contador-1);}
      };

    const stockMax = () => {
      if (contador>=stock) {
        setContador(stock);}
      else {
        setContador(contador+1);}
      };


  return (<>
   <h1>Producto 1</h1>
      <p>{contador}</p>
  
        <button onClick={() => stockMax()}>Agregar</button>
        <button onClick={() => stockMin()}>Quitar</button>
        <button onClick={() => setContador(1)}>Reset</button>
  </>
  ) 
}

export default ItemCount