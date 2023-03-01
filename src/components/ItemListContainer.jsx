import React from 'react'
import ItemCount from './ItemCount';
import './ItemListContainer.css';

const ItemListContainer =  ({greeting}) => {
    return (
        <>
        <div className='saludo'>{greeting}</div>
        <ItemCount stock={10}/>
        </>
    )
}

export default ItemListContainer;