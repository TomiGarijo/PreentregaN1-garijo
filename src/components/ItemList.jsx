import React from 'react'
import Item from './Item'

const ItemList = ({productos}) => {
    console.log(productos)
    return (
    <div>
        {productos.map((p)=>{
                return (
                    <Item
                    name = {p.name}
                    price = {p.price}
                    stock = {p.stock} 
                    />
                )
            })
        }
    </div>
  )
}

export default ItemList