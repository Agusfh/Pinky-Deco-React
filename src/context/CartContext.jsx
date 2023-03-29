import {createContext, useState} from 'react'

export const CartContexto = createContext(null);

const CartContext = ({children}) => {

  const [cart, setCart] = useState([]);

  const addItem= (item, cantidad) => {
    
    setCart([...cart,   {...item,cantidad}])

  };

  const clear = () => {
    setCart([]);
  };
  
  const cartTotal = () => {
    return cart.reduce((acc, prod) => (acc += prod.price * prod.quantity), 0);
  };

  const removeItem = (itemId) => { setCart(cart.filter((prod) => prod.id !== id));
  };


  console.log(cart)

  return (
  <CartContexto.Provider value={{
    cart,
    setCart,
    addItem, 
    clear,
    removeItem,
    cartTotal
    }}> 

  {children} 
  </CartContexto.Provider>

  )

}

export default CartContext;