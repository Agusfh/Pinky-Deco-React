import React from 'react'
import Item from './Item';

const ItemList = ({data}) => {

    return (
        <div key={data.id}>
        {data?.map((data) => (
            <Item
            id={data.id}
            nombre={data.nombre}
            precio={data.precio}
            stock={data.stock}
            />
    ))}   
    </div>
    );
};

export default ItemList