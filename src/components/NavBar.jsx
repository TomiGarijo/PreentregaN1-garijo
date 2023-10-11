import CartWidget from './CartWidget'
import { Menu, MenuButton, MenuList, MenuItem, Flex, Box, Spacer } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <>
            <Flex>
                <Box p='4'>
                    <Link to={"/"}>
                    <img src="https://images.blz-contentstack.com/v3/assets/blt3452e3b114fab0cd/blt59abd70988bc4003/601b14cf3689c30bf1492608/logo_realms_classic_na.png?auto=webp" alt="" width="160px" height="90px" />
                    </Link>
                </Box>
                <Spacer />
                <Box p='4'>
                    <Menu>
                        <MenuButton>
                            Categorias
                        </MenuButton>
                        <MenuList>
                            <MenuItem><Link to={`/category/${'A'}`}>Categoria A</Link></MenuItem>
                            <MenuItem><Link to={`/category/${'B'}`}>Categoria B</Link></MenuItem>
                            <MenuItem><Link to={`/category/${'C'}`}>Categoria C</Link></MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
                <Spacer />
                <Box p='4'>
                    <Link to={"/cart"}>
                        <CartWidget />
                    </Link>    
                </Box>
            </Flex>
        </>
    )
}

export default NavBar