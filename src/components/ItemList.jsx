import React from 'react'
import Item from './Item';

const ItemList = ({data}) => {

    return (
        <div>
        {data?.map((data) => (
            <Item
            key={data.id}
            id={data.id}
            nombre={data.nombre}
            foto={data.foto}
            precio={data.precio}
            stock={data.stock}
            />
    ))}   
    </div>
    );
};

export default ItemList