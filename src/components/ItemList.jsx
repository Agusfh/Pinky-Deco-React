import React from 'react'
import Item from './Item';
import ItemDetail from './ItemDetail';

const ItemList = ({data}) => {

    return (
        <div
 style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
      }}>
        {data?.map((data) => (
            <ItemDetail
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
export default ItemList;