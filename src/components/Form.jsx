import { collection,addDoc,getFirestore} from 'firebase/firestore'
import React, { useContext } from 'react'
import { useState } from 'react'
import { CartContexto } from '../context/CartContext'
import './Form.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = () => {

    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [orderId, setOrderId] = useState(null);
    const { cart, cartTotal, removeItem} = useContext(CartContexto);
    const db = getFirestore();

    const handleSubmit = (e) => {
        e.preventDefault();
        addDoc(orderCollection,order).then (({id}) => 
            setOrderId(id));
    };

    const order = {
        nombre,
        email,
        items: cart
    }
    const orderCollection = collection(db, "orden");

    const notify = () => toast("Muchas gracias por comprar en Pinky Deco! Pronto estarás recibiendo un mail con los detalles.");

    return (
        <div className='formulario'>
    
            <h2 className='checkout'>Confirmación de compra</h2>
    
        <form onSubmit={handleSubmit}> 
    
            <input 
            type="text" 
            placeholder="Nombre y Apellido"
            onChange = {(e) => setNombre(e.target.value)}
            ></input>
    
            <input 
            type="email" 
            placeholder="Mail"
            onChange = {(e) => setEmail(e.target.value)}
            ></input>
    
            <button className='comprar' type='submit' onClick={notify}>Confirmar compra</button> 
            <ToastContainer />

        </form>
    
        <p className='pedidoid'>Nro de pedido: {orderId}</p>
    
        </div>
        )
    }    

export default Form;