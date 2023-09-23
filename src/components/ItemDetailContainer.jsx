import React from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
  let {id} = useParams();
  
  const productos = [
    { id: 1, name: "Producto Nª1", price: 25, stock: 999, category: "A" },
    { id: 2, name: "Producto Nª2", price: 25, stock: 999, category: "A" },
    { id: 3, name: "Producto Nª3", price: 50, stock: 999, category: "B" },
    { id: 4, name: "Producto Nª4", price: 50, stock: 999, category: "B" },
    { id: 5, name: "Producto Nª5", price: 75, stock: 999, category: "C" },
    { id: 6, name: "Producto Nª6", price: 75, stock: 999, category: "C" }
  ]

  const filteredProducts = productos.filter(x => !id || x.id === parseInt(id));

  const mostrarProductos = new Promise((resolve, reject) => {
    if (filteredProducts.length > 0) {
      setTimeout(() => {
        resolve(filteredProducts)
      }, 5000)
    } else {
      reject('No se pueden mostrar los productos')
    }
  })

  mostrarProductos
    .then((resultado) => {
      console.log(resultado)
    })
    .catch((error) => {
      console.log(error)
    })

  return (
    <>
      {filteredProducts.map((p) => {
        return (<ItemDetail product={p} key={p.id} />)
      })}
    </>
  )
}

export default ItemDetailContainer;