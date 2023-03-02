import React from 'react'
import data from "../data.json";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Item = ({id,nombre,precio,stock}) => {
    return (
        <Card style={{ width: '18rem' }}>
      <CardBody>
        <h1>{nombre}</h1>
        <Text>
        Id: {id}
        Precio: {precio}
        stock: {stock}
        </Text>
        <Button variant="primary">Comprar</Button>
      </CardBody>
    </Card>
    )
}

export default Item