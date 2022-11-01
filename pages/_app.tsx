import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import Head from 'next/head'
import { extendTheme } from '@chakra-ui/react'
import { Theme } from '@chakra-ui/react'

export default function App({ Component, pageProps }: AppProps) {
  return (
  <>
  <Head>
  <link href="https://fonts.googleapis.com/earlyaccess/hannari.css" rel="stylesheet" />
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap" rel="stylesheet"/>
  </Head>
  <ChakraProvider 
  theme={extendTheme({
    fonts: {
      heading: 'hannari, sans-serif;',
      body: 'Noto Sans JP, sans-serif;',
    },
    styles:{
      global:{
        body: {
          bg: 'Black',
          color: 'WhiteAlpha 200',
        },
        a: {
          color: 'teal.500',
          _hover: {
            textDecoration: 'underline',
          },
        },
      }
    }
  })}>
    <Component {...pageProps} />
  </ChakraProvider>

  </>
  )
}
