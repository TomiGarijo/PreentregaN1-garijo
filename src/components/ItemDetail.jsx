import { Center, CardHeader, Card, CardBody, Heading, Text, CardFooter, ButtonGroup, Button, Image } from '@chakra-ui/react'
import { useState, useContext } from 'react'
import { CartContext } from '../context/CartContext'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'
import { Divider } from '@chakra-ui/react'

const ItemDetail = ({ product }) => {
  const [quantityAdded, setQuantityAdded] = useState('')
  const { addToCart } = useContext(CartContext)

  const onAdd = (quantity) => {
    setQuantityAdded(quantity)
    addToCart(product, quantity)
  }

  return (
    <Center p='1rem'>
      <Card maxW='sm'>
        <CardHeader>
          <Heading size='md'>{product.name}</Heading>
        </CardHeader>
        <CardBody>
          <Image
            src={product.img}
            alt='Imagen de Google'
            borderRadius='lg'
          />
          <Text>{product.description}</Text>
          <Text>$ {product.price}</Text>
          <Text>Stock disponible: {product.stock} unidades</Text>
        </CardBody>
        <CardFooter>
          {quantityAdded === '' ?
            <ItemCount onAdd={onAdd} />
            : <Link to='/cart'>
              <Button>Go to my Cart</Button>
            </Link>}
        </CardFooter>
      </Card>
    </Center>
  )
}

export default ItemDetail