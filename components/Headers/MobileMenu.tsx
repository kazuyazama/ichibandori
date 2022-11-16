import React from "react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import MobileNav from "./MobileNav";

import { Menu, MenuButton, MenuList, IconButton } from "@chakra-ui/react";


const MobileMenu = () => {
  return (
    <Menu>
      {({ isOpen }) => (
        <>
          <MenuButton
            isActive={<HamburgerIcon />}
            as={IconButton}
            size="4"
            aria-label="Options"
            variant="outline"
            colorScheme="red"
            px={4}
            py={2}
            transition="all 0.2s"
            borderRadius="md"
            borderWidth="1px"
            _hover={{ bg: "red.100" }}
          >
            {!isOpen ? (
              <HamburgerIcon boxSize={7} my={1} />
            ) : (
              <CloseIcon boxSize={7} my={1} />
            )}
          </MenuButton>
          <MenuList shadow="xl" w="50vw">
            <MobileNav />
          </MenuList>
        </>
      )}
    </Menu>
  );
};

export default MobileMenu;
