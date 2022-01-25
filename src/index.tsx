import { ColorModeScript } from "@chakra-ui/react"
import * as React from "react"
import ReactDOM from "react-dom"
import { Main } from "./Components/Main"
import { Teste }  from './Components/Teste'
import { ChakraProvider } from '@chakra-ui/react'
import GlobalStyle from './Components/Styles'
ReactDOM.render(
  <React.StrictMode>
    
    
    <Main />
    <Teste />
    <ChakraProvider>
    <ColorModeScript />
    </ChakraProvider>
    <GlobalStyle />
  </React.StrictMode>,
  

  document.getElementById("root"),
)

