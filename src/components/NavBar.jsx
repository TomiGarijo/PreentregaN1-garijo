import React from 'react'
import CartWidget from './CartWidget'
import { Menu, MenuButton, MenuList, MenuItem, Flex, Box, Spacer } from '@chakra-ui/react'

const NavBar = () => {
    return (
        <>
            <Flex>
                <Box p='4'>
                    <img src="https://images.blz-contentstack.com/v3/assets/blt3452e3b114fab0cd/blt59abd70988bc4003/601b14cf3689c30bf1492608/logo_realms_classic_na.png?auto=webp" alt="" width="160px" height="90px" />
                </Box>
                <Spacer />
                <Box p='4'>
                    <Menu>
                        <MenuButton>
                            Categorias
                        </MenuButton>
                        <MenuList>
                            <MenuItem>Inicio</MenuItem>
                            <MenuItem>Market</MenuItem>
                            <MenuItem>Razas y Clases</MenuItem>
                            <MenuItem>Items</MenuItem>
                            <MenuItem>Contacto</MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
                <Spacer />
                <Box p='4'>
                    <CartWidget />
                    46
                </Box>
            </Flex>
        </>
    )
}

export default NavBar