import React from 'react'
import { useContext } from "react";
import { CartContexto } from '../context/CartContext';
import Item from './Item';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { Container } from 'react-bootstrap';


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

<Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>ID</th>
          <th>Producto</th>
          <th>Precio</th>
          <th>Cantidad</th>
          <th>Eliminar</th>
        </tr>
      </thead>
      </Table>

     {cart.map((compra) => (
    <div key={compra.id}>

<Table striped bordered hover size="sm">
      
      <tbody>
        <tr>
          <td>{compra.id}</td>
          <td>{compra.nombre}</td>
          <td>{compra.precio}</td>
          <td>{compra.cantidad}</td>
          <td><Button onClick={() => removeItem(compra.id)}> 🗑️ </Button></td>
        </tr>
      </tbody>
    </Table>

    </div>
    
  ))}
  <span>Total a pagar : ${cartTotal()}</span>
    </div>
  );
};

export default Cart;