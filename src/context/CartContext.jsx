import {createContext, useState} from 'react'

export const CartContexto = createContext(null);

const CartContext = ({children}) => {

  const [cart, setCart] = useState([]);

  const addItem= (item, cantidad) => {
    
    setCart([...cart,   {...item,cantidad}])

  }

  return (
  <CartContexto.Provider value={{cart,setCart,addItem}}> 
  {children} 
  </CartContexto.Provider>
  )
};

export default CartContext;