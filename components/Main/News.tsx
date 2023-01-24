import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  Center,
} from "@chakra-ui/react";

const News = () => {
  return (
    <Box
      h={{base:"xl",lg:"2xl"}}
      opacity={{base:"0.6",lg:"0.8"}}
      bgImage={{base:'url("./外観6.JPG")',lg:"url('./外観4.JPG')"}}
      bgSize="cover"
      bgPos="center"
      bgRepeat="no-repeat"
      py={{base:"0",lg:"20"}}
      mt={{base:"20",lg:"0"}}
    
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
        <Center w="100%" px={4} color="white" h="100%" justifyContent="start">
          <Stack pt={{base:"200",lg:"0"}}>
            <Heading>おしらせ</Heading>
            <Text>2023.01.24　ホームページを開設しました </Text>
          </Stack>
        </Center>
      </Container>
    </Box>
  );
};

export default News;
