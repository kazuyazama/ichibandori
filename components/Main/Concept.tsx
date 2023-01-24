import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";

const Concept = () => {
  return (
    <Container
      maxW={{
        base: "container.xl",
        lg: "container.md",
        xl: "container.lg",
        "2xl": "container.xl",
      }}
      pt="20"
      pb="10"
    >
      <Box w="100%" px={4}>
        <Stack w="full" divider={<StackDivider borderColor="tomato" />}>
          <Heading as="h1">こんせぷと</Heading>

          <Flex direction={{ base: "column", lg: "row" }} pt="10" gap="4">
            <Stack flex="4" spacing="10">
              <Text my={{ base: -7, lg: -5 }} fontSize={13}>
                ※画像は一部商品です
              </Text>
              <Heading as="h2">
                静岡で3位に入る焼き鳥屋出身のマスターが作る絶品の炭火焼きとり
              </Heading>
              <Text as="p">
              静岡県で3位に輝いた焼き鳥屋出身のマスターが手がける、絶品の炭火焼き鳥。彼のこだわり抜いた技術と高品質の食材を使用し、本当の焼き鳥の味をお届けいたします。是非、彼が作る絶品の炭火焼き鳥を味わってください。
              </Text>
              <Stack
                direction={{ base: "column", lg: "row" }}
                justifyContent="space-between"
                align="center"
                spacing={{ base: "7", lg: "2" }}
              >
                <Box>
                  <Image
                    src="/焼き鳥4.JPG"
                    alt="焼き鳥"
                    boxSize="80"
                    borderRadius="lg"
                  ></Image>
                </Box>
                <Box>
                  <Image
                    src="/アルコール3.JPG"
                    alt="アルコール"
                    boxSize="80"
                    borderRadius="lg"
                  ></Image>
                </Box>
                <Box>
                  <Image
                    src="/内観1.JPG"
                    alt="店舗内観"
                    boxSize="80"
                    borderRadius="lg"
                  ></Image>
                </Box>
              </Stack>
              <Text as="p">
                私たちの焼き鳥屋は、伝統的な日本の料理として愛される焼き鳥を中心に、お客様に美味しい食事を提供することを目指しています。創業以来、高品質な食材を使用し、丁寧に調理することで、一つ一つのお客様に満足いただけるメニューを提供してきました。
                また、店内の雰囲気もこだわり、おしゃべりしながら食事を楽しむことができるようにしています。
                ぜひ、私たちの焼き鳥を味わってみてください。
              </Text>
            </Stack>

            <Stack
              flex="1"
              justifyContent={{ base: "end", lg: "start" }}
              alignItems="end"
            >
              <Image src="/irast/鶏4.png" alt="鶏" boxSize="200px"></Image>
            </Stack>
          </Flex>
        </Stack>
      </Box>
    </Container>
  );
};

export default Concept;
