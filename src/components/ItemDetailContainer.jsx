import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import data from "../data.json";
import ItemDetail from './ItemDetail'
import {doc,getDoc, getFirestore} from "firebase/firestore";

// codigo que arme con firebase

const ItemDetailContainer = () => {

  const {id}=useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const db = getFirestore();

    const oneItem = doc(db, "decoracion", `${id}`);

    getDoc(oneItem).then((snapshot) => {

      if (snapshot.exists()) {
        const docs = snapshot.data();
        console.log(docs);

        setProduct(docs);
      }
    });
  }, [id]);


  // codigo que arme antes de firebase

  const [producto, setProducto]= useState({})
  
  const getDatos = () => {
    return new Promise((resolve,reject) => {
        if(data.length === 0){ 
            reject(new Error ("No hay datos"));}
    
        setTimeout(() => {
            resolve(data)
        }, 2000);
    });
};
    useEffect(()=>{
      getDatos()
      .then((res)=> setProducto(res.find((item)=> item.id === parseInt(id))))
    },[id])
  return (
    <>
    <ItemDetail producto={producto}/>
    </>
  )
}
export default ItemDetailContainer