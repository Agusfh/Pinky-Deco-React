import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ItemCount from './ItemCount';
import maceta from '../assets/maceta.png'

const ItemDetail = ({producto}) => {
  const {id,nombre,precio,stock} = producto
    return (
        <Card className='cards' style={{ width: '18rem' }}>
    <Card.Body>
      <h1>{nombre}</h1>
      <Card.Img variant="top" src={maceta} />
      <Card.Text>
      Id: {id} <br></br>
      Precio: {precio} <br></br>
      stock: {stock} <br></br>
      </Card.Text>
      <ItemCount stock={stock}/>
      <Button className='buy'>Comprar</Button>
    </Card.Body>
  </Card>
  )
}


export default ItemDetail