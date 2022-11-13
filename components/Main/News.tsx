import {
  Box,
  Container,
  Heading,
  Text,
  Image,
  Stack,
  VStack,
  Flex,
  Center,
} from "@chakra-ui/react";

const News = () => {
  return (
    <Box
      h="2xl"
      opacity="0.8"
      bgImage="url('./外観4.JPG')"
      bgSize="cover"
      bgPos="center"
      bgRepeat="no-repeat"
    >
      {/* <Image src="./一番鶏お店.jpeg" boxSize='100%' opacity='0.7' /> */}
      <Container
        maxW={{
          base: "container.xl",
          lg: "container.md",
          xl: "container.lg",
          "2xl": "container.xl",
        }}
        h="100%"
      >
        <Center color="white" h="100%" justifyContent="start">
          <Stack>
            <Heading>にゅーす</Heading>
            <Text>2022.10.27日メニュー変更のお知らせ</Text>
          </Stack>
        </Center>
      </Container>
    </Box>
  );
};

export default News;
