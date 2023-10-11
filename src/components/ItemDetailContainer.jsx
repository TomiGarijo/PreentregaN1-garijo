import React from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getFirestore, getDoc, doc } from "firebase/firestore"; 
import { Flex } from '@chakra-ui/react';

const ItemDetailContainer = () => {
  const {id} = useParams();
  const [product, setProduct] = useState({})

    useEffect(() => {
        const db = getFirestore()
        const singleProduct = doc(db, 'Productos', `${id}`)
        getDoc(singleProduct).then((snapshot) => {
            const docs = snapshot.data()
            const docId = snapshot.id
            setProduct({...docs, id: docId})
        })
    }, [])

  return (
    <>
      <Flex justifyContent={"center"}>
        <ItemDetail product={product} key={product.id} />
      </Flex>
      
    </>
  )
}

export default ItemDetailContainer;