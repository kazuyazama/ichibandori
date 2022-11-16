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
            {!isOpen ? <HamburgerIcon my={1} /> : <CloseIcon my={1} />}
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
