import {
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  Stack,
  StackDivider,
  Text,
  VStack,
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
      <Box w="100%" p={4}>
        <Stack w="full" divider={<StackDivider borderColor="tomato" />}>
          <Heading>こんせぷと</Heading>
          <Flex direction={{ base: "column", lg: "row" }} pt="10" gap="4">
            <Stack flex="4" spacing="10">
              <Heading>
                「カオの見える生産者」と「食材のチカラを活かす」焼鳥・ジビエ・ワインの店
              </Heading>
              <Text>
                化学抗生物質、配合飼料を一切使用せず自然飼育された「黒岩土鶏」を中心に部位の特徴を活かし調理した焼鳥。そしてマタギから直接届く鹿、猪等のジビエを炭火の良さを活かしシンプルに、また時に枠にとらわれない調理をすることで最高の食を提供いたします
              </Text>
              <Stack
                direction={{ base: "column", lg: "row" }}
                justifyContent="space-between"
                align="center"
                spacing={{base:"7",lg:"2"}}
              >
                <Box>
                  <Image src="/焼き鳥4.JPG" alt="top" boxSize="80" borderRadius='lg'></Image>
                </Box>
                <Box>
                  <Image src="/アルコール3.JPG" alt="top" boxSize="80" borderRadius='lg'></Image>
                </Box>
                <Box>
                  <Image src="/内観1.JPG" alt="top" boxSize="80" borderRadius='lg'></Image>
                </Box>
              </Stack>
              <Text>
                黒岩土鶏
                宮崎県児湯郡にある尾鈴山。手つかずの自然が残るこの山の斜面で、“黒岩土鶏”は育てられています。鍵のかかっていない鶏舎を含む、１８ヘクタールの敷地で、鶏たちは自由に野山を駆け回っているのです。
                “土鶏”の名の由来は、土を食べることにあります。土には、天然の抗生物質が豊富に含まれていることを鶏たちは知っており、具合が悪くなると自ら土を食べるのです。かくして、土で自分の体調を整える鶏達は、土鶏と呼ばれます。
                黒岩土鶏の生産者である黒岩　正志さんは、鶏が本来持つ自然治癒力や本能を目覚めさせる環境を整え、ナチュラルな“山林放し飼い”方式で、ヒナから鶏達を育てています。
                黒岩土鶏の飼育は、なんと１２０日以上。長い時には、１８０日にもなります。これに対し、ブロイラーは５０日、地鶏の規格は、８０日以上。飼育には、２〜３倍の時間がかかるのです。
                餌は、オーダーメイドで配合したトウモロコシなどの穀類がメイン。抗生物質など、化学合成物質は一切配合されていません。
                宮崎のさんさんと照る太陽と赤土の恵み。この恵みを受け育った黒岩さんの地鶏、“黒岩土鶏”をぜひご堪能ください！
              </Text>
            </Stack>

            <Stack flex="1"  justifyContent={{base:"end",lg:"start"}} alignItems="end"  >
              <Image src="/irast/鶏4.png" alt="鶏" boxSize="200px"></Image>
            </Stack>
          </Flex>
        </Stack>
      </Box>
    </Container>
  );
};

export default Concept;
