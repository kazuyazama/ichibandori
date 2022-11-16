import { Heading, MenuDivider, MenuItem, Stack } from "@chakra-ui/react";
import { Link as Scroll } from "react-scroll";

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
            ぎゃらりー
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
