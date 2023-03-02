import React from 'react'
import ItemCount from './ItemCount';
import './ItemListContainer.css';
import data from "../data.json";
import ItemList from './ItemList';

const ItemListContainer =  ({greeting}) => {
    
    const getDatos =(data) => {
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
        }
        catch (error) {
            console.log(error);
        }
    }

        fetchingData();

    return (
        <>
        <div className='saludo'>{greeting}</div>
        <ItemCount stock={10}/>
        <ItemList data={data}/>
        </>
    )
}


export default ItemListContainer;