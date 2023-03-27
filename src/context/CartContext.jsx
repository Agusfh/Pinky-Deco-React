import {createContext, useState} from 'react'

export const CartContexto = createContext(null);

const CartContext = ({children}) => {

  const [cart, setCart] = useState([]);


  return (
  <CartContexto.Provider value={{cart,setCart}}> 
  {children} 
  </CartContexto.Provider>
  )
};

export default CartContext;