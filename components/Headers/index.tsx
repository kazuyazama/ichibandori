import { Box, HStack, Image, Spacer, Stack } from "@chakra-ui/react";
import MobileMenu from "./MobileMenu";
import PcNav from "./PcNav";

const LayoutMenu = () => {
  return (
    <Stack>
      <HStack
        p={{ base: "4", lg: "0" }}
        bgColor="white"
      
      >
        <Spacer />
        {/* <Box display={{ base: "block", lg: "none" }} color="black">
          <Image src="/logo3.png" alt="一番鶏." w={14} />
        </Box> */}
        <Box display={{ base: "block", lg: "none" }}>
        
          {/* for mobile */}
          <MobileMenu />
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
