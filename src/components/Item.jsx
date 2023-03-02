import React from 'react'
import data from "../data.json";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ItemCount from './ItemCount';

const Item = ({id,nombre,precio,stock}) => {
    return (
      <Card style={{ width: '18rem' }}>
      <Card.Body>
        <h1>{nombre}</h1>
        <Card.Text>
        Id: {id} <br></br>
        Precio: {precio} <br></br>
        stock: {stock} <br></br>
        </Card.Text>
        <Button variant="primary">Comprar</Button>
        <ItemCount stock={stock}/>
      </Card.Body>
    </Card>
    )
}

export default Item