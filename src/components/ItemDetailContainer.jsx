import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
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

  return (
    <>
    <ItemDetail producto={product}/>
    </>
  )
}
export default ItemDetailContainer