import React from 'react'
import { useContext } from "react";
import { CartContexto } from '../context/CartContext';
import Item from './Item';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import "./Cart.css";
import { Container } from 'react-bootstrap';
import Form from './Form';


const Cart = () => {
  const { cart, cartTotal, removeItem} = useContext(CartContexto);

  if (cart.length === 0) {
    return (
      <>
        <div className="cart_">
          <h2 className='empty'>El carrito esta vacio..</h2>
          <Link to={"/"}>
            <Button className='back'>Volver a Home</Button> 
          </Link>
        </div>
      </>
    );
  }

  return (
    
    <div className="main_cart">


     {cart.map((compra) => (
    <div key={compra.id}>

<Container className='tabla'>
<Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Producto</th>
          <th>Precio</th>
          <th>Cantidad</th>
          <th>Eliminar</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>{compra.nombre}</td>
          <td>{compra.precio}</td>
          <td>{compra.cantidad}</td>
          <td><Button  className='borra' onClick={() => removeItem(compra.id)}> 🗑️ </Button></td>
        </tr>
      </tbody>
    </Table>

</Container>

    </div>
    
  ))}
  <span className='total'>Total a pagar : ${cartTotal()}</span>

  <Form/>

    </div>
    
  );
};

export default Cart;