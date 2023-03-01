import React from 'react'
import { useState } from 'react';

const ItemCount = (stock) => {
    const [cantidad, setCantidad] = useState(1);
  console.log(cantidad);

  return (<>
   <h1>Producto 1</h1>
      <p>{cantidad}</p>
  
        <button onClick={() => setCantidad(cantidad + 1)
        }>Agregar</button>
        <button onClick={() => setCantidad(cantidad - 1)}>Quitar</button>
        <button onClick={() => setCantidad(1)}>Reset</button>
  </>
  )
}

export default ItemCount