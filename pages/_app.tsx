import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";

import { extendTheme } from "@chakra-ui/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ChakraProvider
        theme={extendTheme({
          fonts: {
            heading: "hannari, sans-serif;",
            body: "Noto Sans JP, sans-serif;",
          },
          styles: {
            global: {
              body: {
                bg: "black",
                color: "#F7FAFC",
              },
            },
          },
        })}
      >
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}
