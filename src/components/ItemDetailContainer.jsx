import React from 'react'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
  const productos = [
    {id: 1,name: "Producto Nª1", price: 25, stock: 999, category: "A" },
    {id: 2,name: "Producto Nª2", price: 25, stock: 999, category: "A" },
    {id: 3,name: "Producto Nª3", price: 50, stock: 999, category: "B" },
    {id: 4,name: "Producto Nª4", price: 50, stock: 999, category: "B" },
    {id: 5,name: "Producto Nª5", price: 75, stock: 999, category: "C" },
    {id: 6,name: "Producto Nª6", price: 75, stock: 999, category: "C" }
  ]

  const mostrarProductos = new Promise((resolve, reject) => {
    if (productos.length > 0) {
      setTimeout(() => {
        resolve(productos)
      }, 3000);
    } else {
      reject("No se puede mostrar los productos")
    }
  })

  mostrarProductos 
    .then((resultado) => {
      //console.log(resultado)
    })
    .catch((error) => {
      console.log(error)
    })
  
  return (
    <>
     <h1>Bienvenidos a WoW Classic Market</h1><br />
     <ItemDetail productos={productos}/>
    </>
  )
}

export default ItemDetailContainer;