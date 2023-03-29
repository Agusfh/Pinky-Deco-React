import React from 'react'
import { useContext } from "react";
import { CartContexto } from '../context/CartContext';
import Item from './Item';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';


const Cart = () => {
  const { cart, cartTotal, removeItem} = useContext(CartContexto);

  if (cart.length === 0) {
    return (
      <>
        <div className="cart_">
          <h2>El carrito esta vacio..</h2>
          <Link to={"/"}>
            <Button >Volver a Home</Button> 
          </Link>
        </div>
      </>
    );
  }

  return (
    <div className="main_cart">
     {cart.map((compra) => (
    <div key={compra.id}>
      <p>{compra.nombre}</p>
      <p>{compra.precio}</p>
      <p>{compra.cantidad}</p>

      <Button onClick={() => removeItem(item.id)}> X </Button>
    </div>
    
  ))}
  <span>Total a pagar : ${cartTotal()}</span>
    </div>
  );
};

export default Cart;