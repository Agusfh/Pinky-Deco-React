import {createContext, useState, useEffect} from 'react'
import {collection,getDocs,getFirestore} from "firebase/firestore";

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

  const db = getFirestore();

  useEffect(() => {
    const itemsCollection = collection(db, "decoracion");
    getDocs(itemsCollection).then((snapshot) => {
      const docs = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      

      setProducts(docs);
    });
  }, []);



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