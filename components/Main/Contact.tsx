import {
  Container,
  Stack,
  Center,
  VStack,
  Heading,
  HStack,
  Button,
  Box,
  Image,
} from "@chakra-ui/react";

const Contact = () => {
  return (
    <>
      <Box bgColor="gray.100">
        <Container
          maxW={{
            base: "container.xl",
            lg: "container.md",
            xl: "container.lg",
            "2xl": "container.xl",
          }}
          py={{ base: "0", sm: "10", lg: "20" }}
        >
          <Stack
            flexDirection={{ base: "column", lg: "row" }}
            alignItems="center"
          >
            <Box w={{ base: "100vw", lg: "50%" }}>
              <Image
                src="./外観2.JPG"
                boxSize="md"
                alt="店舗外観"
                opacity={0.8}
                borderTopEndRadius={{ base: 0, sm: "2xl" }}
              />
            </Box>
            <Center w="50%" py={{ base: "14", lg: "0" }}>
              <VStack color="black" spacing={3} mt="-2">
                <Heading fontSize="2xl" whiteSpace="nowrap">
                  ごよやくはこちら
                </Heading>
                <HStack spacing={5}>
                  <Button
                    as="a"
                    href="tel:042-794-4260"
                    colorScheme="red"
                    size="md"
                  >
                    電話する
                  </Button>
                  <Button as="a" colorScheme="red" size="md">
                    WEBで予約
                  </Button>
                </HStack>
              </VStack>
            </Center>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default Contact;
