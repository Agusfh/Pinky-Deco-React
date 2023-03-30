import React, { useState, useEffect } from 'react'
import './ItemListContainer.css';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import banner1 from '../assets/banner1.png';
import banner2 from '../assets/banner2.png';
import banner3 from '../assets/banner3.png';
import { Container } from 'react-bootstrap';
import {collection, doc, getDocs, getFirestore} from "firebase/firestore";

//*Traigo la información desde mi base de datos en firebase, y los muestro en el ItemListContainer*//

const ItemListContainer =  ({greeting}) => {

    const [products, setProducts] = useState([]);
    const { id } = useParams()
    
    useEffect(() => {
      const db= getFirestore()

          const getData = async () => {
          
          const itemCollection= !id? collection(db, "decoracion") : query(collection(db, "decoracion"),
          where("categoria", "==", id));
          const response = await getDocs(itemCollection);

      // map para crear objetos con esos datos.

        const productos = response.docs.map((doc) => {
        const newProduct = {...doc.data(),id: doc.id};

      return newProduct;
            });
      setProducts(productos);

        };

        getData(); 
      }, [id])


return (
    <>
      <div className='saludo'>{greeting}</div>

      {(window.location.pathname === "/") &&

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
</Container> }

<h2> Nuestros Productos </h2> 

        <ItemList data={products}/>
    </>
)}      
    
    export default ItemListContainer;