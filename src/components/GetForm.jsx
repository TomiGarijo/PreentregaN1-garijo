import { collection, getFirestore, addDoc, serverTimestamp } from 'firebase/firestore'
import { useState, useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { Flex, Center, Heading } from '@chakra-ui/layout'
import { FormControl, FormLabel, Input, RadioGroup, HStack, Radio } from '@chakra-ui/react'

const GetForm = () => {
    const { cart, totalCartPrice, clearCart } = useContext(CartContext)

    const [orderId, setOrderId] = useState(null)
    const [name, setName] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [country, setCountry] = useState("")

    const db = getFirestore()

    const handleSubmit = (e) => {
        e.preventDefault()
        addDoc(orderCollection, order).then(({ id }) =>
            setOrderId(id))
    }

    const order = {
        buyer: { name, lastname, email, phone, country },
        total: totalCartPrice(),
        items: cart.map(({ id, name, price, quantity }) => { return ({ id, name, price, quantity }) }),
        date: serverTimestamp()
    }

    const orderCollection = collection(db, "orders")

    return (
        <>
            {orderId ?
                <>
                    <Flex p={'16'} direction='column-reverse' justify={'center'} align={'center'}>
                        <Heading size='xl'>
                            La orden ha sido enviada. Codigo de compra: {orderId}
                        </Heading>
                        <br />
                        <Heading size='xl'>
                            Gracias por su compra!
                        </Heading>
                    </Flex>
                    <Center>
                        <Link to='/'>
                            <Button size='lg' onClick={clearCart}>
                                Volver a la tienda
                            </Button>
                        </Link>
                    </Center>
                </>
                :
                <Flex minWidth={'80rem'} direction='column-reverse' justify={'center'} align={'center'}>
                    <form onSubmit={handleSubmit} style={{ minWidth: '50rem' }}>
                        <FormControl isRequired margin={'4'}>
                            <FormLabel margin={'1'}>Nombres:</FormLabel>
                            <Input type='text' placeholder="Alejandro" margin={'1'} onChange={(e) => setName(e.target.value)} />
                            <FormLabel margin={'1'}>Apellidos:</FormLabel>
                            <Input type='text' placeholder="Martinez" margin={'1'} onChange={(e) => setLastname(e.target.value)} />
                            <FormLabel margin={'1'}>Email:</FormLabel>
                            <Input type='email' placeholder="foo@bar.com" margin={'1'} onChange={(e) => setEmail(e.target.value)} />
                            <FormLabel margin={'1'}>Numero de celular:</FormLabel>
                            <Input type='text' placeholder="+1-202-555-0195" margin={'1'} onChange={(e) => setPhone(e.target.value)} />
                            <FormLabel margin={'1'}>País</FormLabel>
                            <RadioGroup defaultValue='Argentina'>
                                <HStack spacing='24px'>
                                    <Radio value='Argentina' onChange={(e) => setCountry(e.target.value)}>Argentina</Radio>
                                    <Radio value='España' onChange={(e) => setCountry(e.target.value)}>España</Radio>
                                    <Radio value='Chile' onChange={(e) => setCountry(e.target.value)}>Chile</Radio>
                                </HStack>
                            </RadioGroup>
                            <Button colorScheme='green' type='submit' marginTop={'3'} marginLeft={'1'}>Enviar orden</Button>
                        </FormControl>
                    </form>
                </Flex>
            }
        </>
    )
}

export default GetForm 