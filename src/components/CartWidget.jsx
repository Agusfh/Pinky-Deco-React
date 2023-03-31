import React from 'react'
import './CartWidget.css';
import { NavLink } from 'react-router-dom';
import { useContext } from "react";
import { CartContexto } from '../context/CartContext';


const CartWidget = ({}) => {
  const { cart, shoppingCart} = useContext(CartContexto);
  return (
    <div className='carrito'>
        <span className="material-symbols-outlined" as={NavLink} to='/Cart'>
        shopping_cart
        </span> 
        <span className='number'>{shoppingCart()}</span>
    </div>
  );
};

export default CartWidget;