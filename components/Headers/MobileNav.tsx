import {
  Box,
  Heading,
  Link,
  LinkProps,
  MenuDivider,
  MenuItem,
  Stack,
} from "@chakra-ui/react";
import { Link as Scroll } from "react-scroll";

// const HoverLink = (props: LinkProps) => <Link rounded="base" _hover={{bg:"gray.200"}} p={2} {...props } />

const MobileNav = () => {
  return (
    <Stack as="nav">
      <Heading p={2} fontSize="lg">
        一番鶏 町田
      </Heading>
      <MenuDivider />
      <MenuItem p={2}>
        <Scroll to="concept" smooth={true} duration={600}>
          <Heading fontSize="md" color="tomato">
            こんせぷと
          </Heading>
        </Scroll>
      </MenuItem>
      <MenuItem p={2}>
        <Scroll to="menu" smooth={true} duration={600}>
          <Heading fontSize="md" color="tomato">
            おしながき
          </Heading>
        </Scroll>
      </MenuItem>
      <MenuItem p={2}>
        <Scroll to="news" smooth={true} duration={600}>
          <Heading fontSize="md" color="tomato">
            おしらせ
          </Heading>
        </Scroll>
      </MenuItem>
      <MenuItem p={2}>
        <Scroll to="info" smooth={true} duration={600}>
          <Heading fontSize="md" color="tomato">
            てんぽじょうほう
          </Heading>
        </Scroll>
      </MenuItem>
    </Stack>
  );
};

export default MobileNav;
