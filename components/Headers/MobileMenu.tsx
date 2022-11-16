import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import MobileNav from "./MobileNav";

import {
  Menu,
  MenuButton,
  MenuList,
  IconButton,
  Box,
  CloseButton,
} from "@chakra-ui/react";

const MobileMenu = () => {
  return (
    <Menu>
      {({ isOpen }) => (
        <>
          <MenuButton
            isActive={<GiHamburgerMenu />}
            as={IconButton}
            aria-label="Options"
            variant="outline"
            colorScheme="red"
            px={6}
            py={4}
            transition="all 0.2s"
            borderRadius="md"
            borderWidth="1px"
            _hover={{ bg: "red.100" }}
          >
            {!isOpen ? (
              <Box ml="11px">
                <GiHamburgerMenu />
              </Box>
            ) : (
              <Box ml="3.5px">
                <CloseButton />
              </Box>
            )}
            {/* <Icon as={GiHamburgerMenu} w='4' h='4'/> */}
          </MenuButton>
          <MenuList bgColor="blackAlpha.900">
            <MobileNav />
          </MenuList>
        </>
      )}
    </Menu>
  );
};

export default MobileMenu;
