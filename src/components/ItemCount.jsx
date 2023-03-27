import React from 'react'
import { useState } from 'react';
import Data from "../data.json";
import "./Item.css";

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
      <div className='añadir'>
      <button onClick={() => stockMax()}>+</button>
      <p className='num'>{contador}</p> 
        <button onClick={() => stockMin()}>-</button>
        <button onClick={() => setContador(1)}>Reset</button>
    </div>
    <Button className='buy' onClick={()=>onAdd(contador)}>Comprar</Button>
  </>
  ) 
}

export default ItemCount