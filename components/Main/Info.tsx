import { AspectRatio, Box, Container, Flex, Heading, Stack, VStack ,Text} from "@chakra-ui/react";

const Info = () => {
    return (
        <Container maxW={{base:'container.xl',lg:'container.md',xl:'container.lg','2xl':'container.xl'}} py='20'>
        <Flex direction={{base:'column',lg:'row'}} alignItems='center' >
        <Stack flex='2' bg='' color='white' >
          <VStack align='start' >
            <Heading pb={5}>てんぽじょうほう</Heading>

            <Box pb={2}>
              <Text>電話番号</Text>
              <Text>050-3503-1819</Text>
            </Box>

            <Box pb={2}>
            <Text>住所</Text>

            </Box>
            <Box pb={2}>
            <Text>営業時間</Text>
            <Text>
              月曜〜土曜 <br />
              11：00～14：00（LO 13：30）<br />
              17：00～23：00（LO 22：00）
            </Text>
            </Box>
            <Box pb={2}>

            <Text>定休日</Text>
            <Text>無休（但し、1/1及び法定点検日は除く）</Text>

            </Box>
            <Box pb={2}>
              <Text>座席数</Text>
              <Text>35席</Text>
            </Box>
         
          
           
          </VStack>
         </Stack>
         <Stack flex='3' w='full' color='white'>
          <AspectRatio ratio={16 / 10}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3246.11403588935!2d139.42968821560962!3d35.55088574471603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018ff29f204fc93%3A0xedba1eaeb6791e0e!2z5LiA6JWD6baPIOeUuueUsA!5e0!3m2!1sja!2sjp!4v1666867109879!5m2!1sja!2sjp" />
          </AspectRatio>
         </Stack>
        </Flex>

        
            
          </Container>
    );
}

export default Info;