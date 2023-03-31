import { collection,addDoc,getFirestore} from 'firebase/firestore'
import React from 'react'
import { useState } from 'react'
import './Form.css'


const Form = () => {

    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [orderId, setOrderId] = useState(null);

    const db = getFirestore();

    const handleSubmit = (e) => {
        e.preventDefault();
        addDoc(orderCollection,order).then (({id}) => 
            setOrderId(id));
    };

    const order = {
        nombre,
        email,
        Items: cart.map ({id: producto.id, nombre: producto.nombre, precio: producto.precio})
    }

    const orderCollection = collection(db, "orden");


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

        <button className='comprar' type='submit'>Confirmar compra</button>
    </form>

    <p className='pedidoid'>Nro de pedido: {orderId}</p>

    </div>
    )
}

export default Form;