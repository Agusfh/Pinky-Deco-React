import React from 'react'
import Card from 'react-bootstrap/Card';
import './Item.css';
import maceta from '../assets/maceta.png'
import {Link} from 'react-router-dom'


const Item = ({id, nombre, precio, stock, foto}) => {
  return (
  <Card className='cards' style={{ width: '18rem' }}>
  <Card.Body>
    <h1>{nombre}</h1>
    <Card.Img variant="top" src={maceta} />
    <Card.Text>
    Id: {id} <br></br>
    
    </Card.Text>
    <Link className='buy' to={`/item/${id}`}>Detalle</Link>
  </Card.Body>
</Card>
  )
}

export default Item;