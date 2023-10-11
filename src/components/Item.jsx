import React from 'react'
import {Card, CardBody, Image, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Button} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Item = ({name, id, img}) => {
  return (
    <div>
    <Card maxW='sm' marginTop={"15px"}>
    <CardBody>
    <Image
        src={img}
        alt='Imagen de Google'
        borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
        <Heading size='md'>{name}</Heading>
        {/*<Text>
            Descripcion
        </Text>
        <Text color='blue.600' fontSize='2xl'>
            $ {price} 
        </Text>
        <Text color='blue.600' fontSize='2xl'>
            Stock: {stock} unidades
        </Text>*/}
    </Stack>
    </CardBody>
    <Divider />
    <CardFooter>
    <ButtonGroup spacing='2'>
        <Link to={`/item/${id}`}><Button variant='solid' colorScheme='blue'>
            Detalle
        </Button></Link>
    </ButtonGroup>
    </CardFooter>
  </Card>
  </div>
  )
}

export default Item