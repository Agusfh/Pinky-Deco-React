import {createContext, useState} from 'react'

export const CartContexto = createContext(null);

/* Dentro del CartContext creo la función del carrito que voy a utulizar para poder añadir productos al cart, eliminar productos del cart y que se vean desde CartWidget */

const CartContext = ({children}) => {

  const [cart, setCart] = useState([]);

  const addItem= (item, cantidad) => {
    
    setCart([...cart,   {...item,cantidad}])

  };

  const clear = () => {
    setCart([]);
  };
  
  const cartTotal = () => {
    return cart.reduce((acc, prod) => (acc += parseInt(prod.precio) * prod.cantidad), 0);
  };

  const removeItem = (itemId) => { setCart(cart.filter((prod) => prod.id !==itemId));};


  const shoppingCart = () => {
    return cart.reduce((acc, prod) => (acc += parseInt(prod.cantidad)), 0);
  };

  return (
    <CartContexto.Provider value={{
      cart,
      setCart,
      addItem, 
      clear,
      removeItem,
      cartTotal,
      shoppingCart
      }}> 
  
    {children} 
    </CartContexto.Provider>
  
    )}
  
  export default CartContext;