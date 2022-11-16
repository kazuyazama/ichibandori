import { Box, Heading, HStack, Image, Stack, VStack } from "@chakra-ui/react";
import DrawerMenu from "./MobileMenu";
import MobileNav from "./MobileNav";
import PcNav from "./PcNav";

const LayoutMenu = () => {
  return (
    <Stack>
      <HStack
        p={{ base: "4", lg: "0" }}
        bgColor="white"
        spacing="250px"
        justifyContent="space-between"
      >
        <Box display={{ base: "block", lg: "none" }} color="black">
          <Image src="./logo3.png" w={14} />
        </Box>
        <Box display={{ base: "block", lg: "none" }}>
          {" "}
          {/* for mobile */}
          <DrawerMenu />
        </Box>
      </HStack>

      <Box
        pos="fixed"
        top={{ base: "3", lg: "20" }}
        left={{ base: "3", lg: "20" }}
        color="tomato"
      >
        <PcNav />
      </Box>
    </Stack>
  );
};

export default LayoutMenu;