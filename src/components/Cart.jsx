import React from 'react'
import { useContext } from "react";
import { CartContexto } from '../context/CartContext';
import Item from './Item';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';


const Cart = () => {
  const { cart, cartTotal, clear } = useContext(CartContexto);

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

  {cart.map((compra) => (
    <CartItem key={Item.id} compra={Item} />
  ))}
  <span>Total a pagar : ${cartTotal()}</span>

  

  return (
    <div className="main_cart">
      {console.log(cart)}
    </div>
  );
};

export default Cart