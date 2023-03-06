import React from 'react'
import data from "../data.json";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ItemCount from './ItemCount';
import './Item.css';
import { Container } from 'react-bootstrap';


const Item = ({id,nombre,precio,stock,foto}) => {
    return (
      <Container fluid className='contain'>
      <Card className='cards' style={{ width: '18rem' }}>
      <Card.Body>
        <h1>{nombre}</h1>
        <Card.Img variant="top" src={foto} />
        <Card.Text>
        Id: {id} <br></br>
        Precio: {precio} <br></br>
        stock: {stock} <br></br>
        </Card.Text>
        <ItemCount stock={stock}/>
        <Button className='buy'>Comprar</Button>
      </Card.Body>
    </Card>
    </Container>
    )
}

export default Item