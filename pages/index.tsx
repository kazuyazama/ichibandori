import { Box, Container, Flex, HStack ,StackDivider,Text,VStack,Stack, Icon, Center,Image } from '@chakra-ui/react'
import Concept from '../components/Main/Concept'
import LayoutMenu from '../components/Headers'
import News from '../components/Main/News'
import TopMenu from '../components/Main/TopMenu'
import Info from '../components/Main/Info'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <Box overflowX='hidden' id='top'> 

    <LayoutMenu />
    <section>
    {/* <Box > */}

    <Box bgColor='white'>

    <Box 
        // h='4xl'
        // opacity='0.5'
        // bgImage="url('./一番鶏お店2.jpeg')"
        // bgSize='cover'
        // bgPos='top'
        // bgRepeat='no-repeat'
        >
    
    <Container maxW='container.xl' >
    <Box color='whiteAlpha.100' maxW={{base:'container.xl',lg:'container.md',xl:'container.xl','2xl':'container.xl'}} >
     <Center h={{base:'lg',lg:'4xl'}}>
    <Image src="./logo3.PNG" w={400} h={300} alt='top' />
    </Center>
    
    </Box>
    </Container>
    </Box>

    </Box>
    </section>

    <section id='concept'>
      <Concept />
    </section>

    <section id='menu'>
      <TopMenu />
    </section>

    <section id='news'>
      <News />
  
    </section>

    <section id='info'>
      <Info />
  
      
    </section>

    <section>

    <Box bgColor='gray.100' >
    <Container maxW={{base:'container.xl',lg:'container.md',xl:'container.lg','2xl':'container.xl'}} h='100%'  >
    <Box>
    <Image src="./外観2.JPG"  boxSize='md' alt='top' />
    </Box>
    </Container>
    </Box>

      
      {/* <Box h='96' bgColor='gray.100'>
      <Image src='./外観2.JPG' />
      </Box> */}

    </section>

 


    </Box>
    </>
  )
}
