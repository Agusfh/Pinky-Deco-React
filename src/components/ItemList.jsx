import React from 'react'
import Item from './Item';

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
          <Item
          key={data.id}
          id={data.id}
          nombre={data.nombre}
          foto={data.img}
          precio={data.precio}
          stock={data.stock}
          categoria={data.categoria}
          />
  ))}   
  </div>
  );
};
export default ItemList;