import React from 'react'
import { Badge, Center, Flex, Icon } from "@chakra-ui/react"
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {
  const { productsQuantity } = useContext(CartContext)
  return (
    <Flex>
    <Center>
        
        <img src="https://wow.zamimg.com/images/wow/icons/large/inv_misc_bag_10.jpg" alt="" width="50px" height="50px"/>
        {productsQuantity() > 0 &&
        <Badge colorScheme="purple">{productsQuantity()}</Badge>}
        
    </Center>
  </Flex>
        
  )
}

export default CartWidget
