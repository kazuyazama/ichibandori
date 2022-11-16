import { Heading, MenuItem, Stack } from "@chakra-ui/react";
import { Link as Scroll } from "react-scroll";

const MobileNav = () => {
  return (
    <Stack as="nav">
      <Heading p={2} fontSize="lg" color="black">
        一番鶏 町田
      </Heading>

      <MenuItem p={2} _hover={{ bgColor: "black" }} _focus={{bgColor:"white"}}>
        <Scroll to="concept" smooth={true} duration={600}>
          <Heading fontSize="md" color="tomato">
            こんせぷと
          </Heading>
        </Scroll>
      </MenuItem>
      <MenuItem p={2} _hover={{ bgColor: "black" }}>
        <Scroll to="menu" smooth={true} duration={600}>
          <Heading fontSize="md" color="tomato">
            ぎゃらりー
          </Heading>
        </Scroll>
      </MenuItem>
      <MenuItem p={2} _hover={{ bgColor: "black" }}>
        <Scroll to="news" smooth={true} duration={600}>
          <Heading fontSize="md" color="tomato">
            おしらせ
          </Heading>
        </Scroll>
      </MenuItem>
      <MenuItem p={2} _hover={{ bgColor: "black" }}>
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
