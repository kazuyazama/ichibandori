import { Box, Container, Center, Image } from "@chakra-ui/react";
import Concept from "../components/Main/Concept";
import LayoutMenu from "../components/Headers";
import News from "../components/Main/News";
import TopMenu from "../components/Main/Gallary";
import Info from "../components/Main/Info";
import Contact from "../components/Main/Contact";
import Meta from "../components/Headers/Meta";

export default function Home() {
  return (
    <>
      <Meta />
      <Box overflowX="hidden" id="top">
        <LayoutMenu />
        <section>
          {/* <Box > */}

          <Box bgColor="white">
            <Box
            // h='4xl'
            // opacity='0.5'
            // bgImage="url('./一番鶏お店2.jpeg')"
            // bgSize='cover'
            // bgPos='top'
            // bgRepeat='no-repeat'
            >
              <Container maxW="container.xl">
                <Box
                  color="whiteAlpha.100"
                  maxW={{
                    base: "container.xl",
                    lg: "container.md",
                    xl: "container.xl",
                    "2xl": "container.xl",
                  }}
                  mx="auto"
                >
                  <Center h={{ base: "xl", lg: "4xl" }}>
                    <Image src="/logo3.png" w={400} h={300} alt="一番鶏" />
                  </Center>
                </Box>
              </Container>
            </Box>
          </Box>
        </section>

        <section id="concept">
          <Concept />
        </section>

        <section id="menu">
          <TopMenu />
        </section>

        <section id="news">
          <News />
        </section>

        <section id="info">
          <Info />
        </section>

        <section id="contact">
          <Contact />

          {/* <Box h='96' bgColor='gray.100'>
      <Image src='./外観2.JPG' />
      </Box> */}
        </section>

        <footer>
          <Center h={100} fontSize="xs">
            Copyright © 2022 - All right reserved by 一番鶏
          </Center>
        </footer>
      </Box>
    </>
  );
}
