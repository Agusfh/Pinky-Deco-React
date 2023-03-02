import React, { useState, useEffect } from 'react'
import './ItemListContainer.css';
import ItemList from './ItemList';
import data from "../data.json";

const ItemListContainer =  ({greeting}) => {
    const [items, setItems]=useState([])
    
    const getDatos = () => {
        return new Promise((resolve,reject) => {
            if(data.length === 0){ 
                reject(new Error ("No hay datos"));}
        
            setTimeout(() => {
                resolve(data)
            }, 2000);
        });
    };

    async function fetchingData() {
        try {
            const datosFetched = await getDatos();
            setItems(datosFetched)
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        fetchingData();
    },[])

return (
    <>
        <div className='saludo'>{greeting}</div>
        <ItemList data={items}/>
    </>
)
}
    


export default ItemListContainer;