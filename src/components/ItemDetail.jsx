import React from 'react'
import { Center, CardHeader, Card, CardBody, Heading, Text, CardFooter, ButtonGroup, Button, Image } from '@chakra-ui/react'

const ItemDetail = ({ product }) => {
  return (
    <Center p='1rem'>
      <Card maxW='sm'>
        <CardHeader>
          <Heading size='md'>{product.name}</Heading>
        </CardHeader>
        <CardBody>
          <Image
            src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
            alt='Green double couch with wooden legs'
            borderRadius='lg'
          />
          <Text>{product.description}</Text>
          <Text>$ {product.price}</Text>
          <Text>Stock disponible: {product.stock} unidades</Text>
        </CardBody>
        <CardFooter>
          {/* <ItemCount /> */}
          <ButtonGroup spacing='2'>
            <Button variant='solid' colorScheme='green'>
              Agregar al Carrito
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </Center>
  )
}

export default React.memo(ItemDetail)