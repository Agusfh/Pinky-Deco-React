import React, { useState, useEffect } from 'react'
import './ItemListContainer.css';
import ItemList from './ItemList';
import data from "../data.json";
import { useParams } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import banner1 from '../assets/banner1.png';
import banner2 from '../assets/banner2.png';
import banner3 from '../assets/banner3.png';
import { Container } from 'react-bootstrap';

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

<Container>
        <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src= {banner1}
          alt="First slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src= {banner2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
</Container>

<h2> Nuestros Productos </h2>
        <ItemList data={items}/>
    </>
)}      
    
    export default ItemListContainer;