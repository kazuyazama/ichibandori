import React from "react";
import { Box, Container, Flex, Heading, Stack, StackDivider, } from "@chakra-ui/react";

import Carousels from "./SplideCarousels";


const yakitoris = [
  {
  name:'kawa',
  discription:"焼き鳥1",
  src:"./焼き鳥1.JPG",
  alt:"焼き鳥1"
  },
  {
  name:'sasami',
  discription:"焼き鳥4",
  src:"/焼き鳥4.JPG",
  alt:"ささみです"
  },
  {
  name:'zama',
  discription:"焼き鳥7",
  src:"/焼き鳥7.JPG",
  alt:"ざまです。"
  },
  {
  name:'zama2',
  discription:"焼き鳥9",
  src:"/焼き鳥9.JPG",
  alt:"ざまです。"
  },
  {
  name:'zama3',
  discription:"焼き鳥5",
  src:"/焼き鳥5.JPG",
  alt:"ざまです。"
  },
 
]

const ippins = [
  {
  name:'一品もの',
  discription:"トマトチーズ",
  src:"./トマトチーズ.JPG",
  alt:"皮です"
  },
  {
  name:'sasami',
  discription:"ささみです。",
  src:"./釜飯TOP.jpeg",
  alt:"ささみです"
  },
  {
  name:'zama5',
  discription:"ざまです。",
  src:"./焼き鳥9.JPG",
  alt:"ざまです。"
  },
]



const TopMenu = () => {

    return (
    <Container maxW={{base:'container.xl',lg:'container.md',xl:'container.lg','2xl':'container.xl'}}  py='20'>
      <Box w='100%' p={4} color='white' >

      <Stack w='full' divider={<StackDivider borderColor='white' />}
          spacing={4}
          align='stretch' >
      <Heading>めにゅー</Heading>
     
      <Flex direction={{base:'column',lg:'row'}} pt='10' gap='4'>
        <Box flex='1' w='30%'>
        aaaaaaaaaaaaaaaa

         
        </Box>

        <Box flex='3'>

        <Stack borderBottom='1px' pb='10' >
            <Carousels 
            title='やきとり' 
            menus={yakitoris} 
             />
        </Stack>


        <Stack borderBottom='1px' py='10' >
         <Carousels 
          title='一品もの' 
          menus={ippins}
          />
        </Stack>

        </Box>


          {/* <VStack bgColor='tomato'>
            <Heading>「黒岩土鶏と旬野菜串コース　11品</Heading>
            <Image src='/vercel.svg' alt='top'></Image>
            <Text>焼鳥塩３品/焼鳥タレ2品/旬の野菜串/クレソンサラダ/濃厚鶏スープ/鶏いくら/シーアスパラ/甘味4,180円（税込</Text>    
          </VStack> */}
           
     
      </Flex>
      </Stack>
     </Box>
      </Container>
    );
}

export default TopMenu;