import React from 'react'
import Item from './Item'
import { Flex } from '@chakra-ui/react'

const ItemList = ({productos}) => {
    console.log(productos)
    return (
    <Flex justifyContent='center' gap='1' wrap='wrap'>
        {productos.map((p)=>{
                return (
                    <Item
                    id = {p.id}
                    name = {p.name}
                    price = {p.price}
                    stock = {p.stock} 
                    />
                )
            })
        }
    </Flex>
  )
}

export default ItemList