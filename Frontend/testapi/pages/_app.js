import '../styles/globals.css'
import '../styles/main.css'
import '../styles/auth.css'
import '../styles/left.css'
import '../styles/newreq.css'
// import { ChakraProvider } from '@chakra-ui/react'

function MyApp({ Component, pageProps }) {
  return(
    // <ChakraProvider>
      <Component {...pageProps} />
    // </ChakraProvider>
  )
}

export default MyApp
