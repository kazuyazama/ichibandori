import React from 'react';
import {GiHamburgerMenu} from "react-icons/gi"
import {ImCross} from "react-icons/im"
import MobileNav from './MobileNav';

import {
   
  Menu,
  MenuButton,
  MenuList,
  IconButton,
  Box,
  Center,
 
    
    
} from '@chakra-ui/react'


const MobileMenu = () => {
  return (
  <Menu>
    {({isOpen }) => (
    <>
    <MenuButton
    isActive={<GiHamburgerMenu />}
    as={IconButton} 
    aria-label='Options'
    variant='outline'
    colorScheme='red'
    px={6}
    py={4}
    transition='all 0.2s'
    borderRadius='md'
    borderWidth='1px'
    _hover={{ bg: 'red.100' }}
    
    >
    {!isOpen ? <Box ml='11px'><GiHamburgerMenu  /></Box> : <Box ml='11px'><ImCross /></Box>}
    {/* <Icon as={GiHamburgerMenu} w='4' h='4'/> */}
    </MenuButton>
    <MenuList bgColor='blackAlpha.900' >
      <MobileNav />
    </MenuList>
    </>

    )}
  </Menu>
  )
}

export default MobileMenu;
