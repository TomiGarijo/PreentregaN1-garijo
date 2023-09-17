import React from 'react'
import { Card, CardBody, Heading, Text, CardFooter, ButtonGroup, Button } from '@chakra-ui/react'
     
const ItemDetail = ({ productos }) => {
  return (
    <div>
      {productos.map((p) => {
        return (
          <div key={p.id}>
            <Center p='1rem'>
              <Card>
                <CardHeader>
                  <Heading size='md'>{p.name}</Heading>
                </CardHeader>
                <CardBody>
                  <Text>{p.description}</Text>
                  <Text>$ {p.price}</Text>
                  <Text>Stock disponible: {p.stock} unidades</Text>
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
          </div>
        )
      })
      }
    </div>
  )
}

export default React.memo(ItemDetail)