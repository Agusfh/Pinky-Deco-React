import React, { useState, useEffect } from 'react'
import './ItemListContainer.css';
import ItemList from './ItemList';
import data from "../data.json";
import { useParams } from 'react-router-dom';

const ItemListContainer =  ({greeting}) => {
    const [items, setItems]=useState([])
    const {id}=useParams()
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
            if(id){
                setItems(datosFetched.filter((item)=> item.categoria === id))
            }else{
                setItems(datosFetched)
            }
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        fetchingData();
    },[id])

return (
    <>
        <div className='saludo'>{greeting}</div>
        <ItemList data={items}/>
    </>
)}      
    
    export default ItemListContainer;