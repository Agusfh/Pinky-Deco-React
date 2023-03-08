import React from 'react'
import data from "../data.json";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ItemCount from './ItemCount';
import './Item.css';
import ItemDetail from './ItemDetail';


const Item = () => {
    return (
      <Card className='cards' style={{ width: '18rem' }}>
    <Card.Body>
      <h1>{nombre}</h1>
      <Card.Img variant="top" src="holder.js/100px180" />
      <button>detalle</button>
      </Card.Body>
      </Card>
    )
}

export default Item;