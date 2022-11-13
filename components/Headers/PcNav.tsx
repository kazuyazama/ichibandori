import { Box, Heading, Image, Link, Stack } from "@chakra-ui/react";
import { Link as Scroll } from "react-scroll";

const PcNav = () => {
  return (
    <>
      <Stack display={{ base: "none", lg: "block" }} zIndex={10}>
        <Box pb={5} fontSize="xl" mx={-4}>
          <Scroll to="top" smooth={true} duration={600}>
            <Image src="./choutin.PNG" boxSize="16" alignSelf="center" />
          </Scroll>
        </Box>
        <Box sx={{ writingMode: "vertical-rl" }} pb={5}>
          <Scroll to="concept" smooth={true} duration={600}>
            <Heading
              fontSize="md"
              color="tomato"
              _hover={{ cursor: "pointer" }}
            >
              こんせぷと
            </Heading>
          </Scroll>
        </Box>
        <Box sx={{ writingMode: "vertical-rl" }} pb={5}>
          <Scroll to="menu" smooth={true} duration={600}>
            <Heading
              fontSize="md"
              color="tomato"
              _hover={{ cursor: "pointer" }}
            >
               おしながき
            </Heading>
          </Scroll>
        </Box>
        <Box sx={{ writingMode: "vertical-rl" }} pb={5}>
          <Scroll to="news" smooth={true} duration={600}>
            <Heading
              fontSize="md"
              color="tomato"
              _hover={{ cursor: "pointer" }}
            >
              おしらせ
            </Heading>
          </Scroll>
        </Box>
        <Box sx={{ writingMode: "vertical-rl" }}>
          <Scroll to="info" smooth={true} duration={600}>
            <Heading
              fontSize="md"
              color="tomato"
              _hover={{ cursor: "pointer" }}
            >
              てんぽじょうほう
            </Heading>
          </Scroll>
        </Box>
      </Stack>
    </>
  );
};

export default PcNav;
