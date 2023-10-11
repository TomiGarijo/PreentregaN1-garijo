import React from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getFirestore, getDoc, doc } from "firebase/firestore";
import { Flex } from '@chakra-ui/react';
import { MagnifyingGlass } from 'react-loader-spinner';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({})

  useEffect(() => {
    const db = getFirestore()
    const singleProduct = doc(db, 'Productos', `${id}`)
    getDoc(singleProduct).then((snapshot) => {
      const docs = snapshot.data()
      const docId = snapshot.id
      setProduct({ ...docs, id: docId })
    })
  }, [])

  return (
    <>
      {Object.keys(product).length <= 0 ?
        <div style={{ width: "fit-content", marginLeft: "auto", marginRight: "auto", marginTop: "48px" }}>
          <MagnifyingGlass
            visible={true}
            height="80"
            width="80"
            ariaLabel="MagnifyingGlass-loading"
            wrapperStyle={{}}
            wrapperClass="MagnifyingGlass-wrapper"
            glassColor='#c0efff'
            color='#e15b64'
          />
        </div>
        : <Flex justifyContent={"center"}>
        <ItemDetail product={product} key={product.id} />
      </Flex>
      }
      

    </>
  )
}

export default ItemDetailContainer;