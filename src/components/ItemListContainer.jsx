import ItemList from './itemList';
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import { MagnifyingGlass } from 'react-loader-spinner';

const ItemListContainer = () => {
  const { id } = useParams();

  const [products, setProducts] = useState([])

  useEffect(() => {
    const db = getFirestore()
    const productsCollection = collection(db, 'Productos')
    getDocs(productsCollection).then((snapshot) => {
      const docs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      setProducts(docs)
    })
  }, [])

  const filteredProducts = products.filter(x => !id || x.category === id);

  return (
    <>
      {products.length <= 0 ?
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
        : <ItemList productos={filteredProducts} />
      }
    </>
  )
}

export default ItemListContainer;
