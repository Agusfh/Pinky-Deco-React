import React from 'react'
import { useContext } from "react";
import { CartContexto } from '../context/CartContext';


const Cart = () => {
  const { cart } = useContext(CartContexto);

  if (cart.length === 0) {
    return (
      <>
        <div className="cart_">
          <h2>El carrito esta vacio..</h2>
          <Link to={"/ItemListContainer"}>
            <Button>Ir a Home</Button>
          </Link>
        </div>
      </>
    );
  }

  return (
    <div className="main_cart">
      {console.log(cart)}
    </div>
  );
};

export default Cart