import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ItemCount from './ItemCount';
import maceta from '../assets/maceta.png';
import {useContext, userState, useEffect} from 'react';
import {CartContexto} from '../context/CartContext';


const ItemDetail = ({producto}) => {
  const {id,nombre,precio,stock} = producto;

  const {addItem}=useContext(CartContexto)

  const onAdd = (cantidad)=>{
    addItem(producto, cantidad)
    } 

    return (
        <Card className='cards' style={{ width: '18rem' }}>
    <Card.Body>
      <h1>{nombre}</h1>
      <Card.Img variant="top" src={maceta} />
      <Card.Text>
      Precio: $ {precio} <br></br>
      stock: {stock} <br></br>
      </Card.Text>
      <ItemCount stock={stock}onAdd={onAdd}/>
      </Card.Body>
  </Card>
  )
}

export default ItemDetail