import { Box, Center, Flex, Heading, Image, Link, Stack,} from "@chakra-ui/react";
import { Link as Scroll } from 'react-scroll';
import {FaHamburger} from "react-icons/fa"

const PcNav = () => {
    return (
    <>
      <Stack display={{base:'none',lg:'block'}}  >
      <Box pb={5} fontSize='xl' mx={-4}><Scroll to='top' smooth={true} duration={600}><Image src="./choutin.PNG" boxSize='16' alignSelf='center' /></Scroll></Box>
      <Box sx={{writingMode:'vertical-rl'}} pb={5}><Heading fontSize='md'><Link>こんせぷと</Link></Heading></Box>
      <Box sx={{writingMode:'vertical-rl'}} pb={5}><Heading fontSize='md'><Link>めにゅー</Link></Heading></Box>
      <Box sx={{writingMode:'vertical-rl'}} pb={5}><Heading fontSize='md'><Link>おしらせ</Link></Heading></Box>
      <Box sx={{writingMode:'vertical-rl'}} ><Heading fontSize='md'><Link>てんぽじょうほう</Link></Heading></Box>
      </Stack>
    </>
    );
}

export default PcNav;