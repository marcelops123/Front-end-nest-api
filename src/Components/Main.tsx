import * as React from "react"
import { ChakraProvider,Box,Text,Link, VStack, Code, Grid, theme, Input, Stack } from "@chakra-ui/react"
import { Teste } from "./Teste"

export const Main = () => (
<>
  
<body>
   
   <div className="box">
                <fieldset>
      <legend id="form"><b>FORMULÁRIO</b></legend>

      <div className="inputBox">
      
      <Input placeholder='Basic usage' />
      <label htmlFor ="nome"   className= "labelInput"></label>
      
    <br></br>    <br></br>

    <input type="text" name="nome" placeholder="Email" id="nome" className="inputUser" required></input>
    <label htmlFor ="nome"  className= "labelInput"></label>
    <br></br>    <br></br>

    <input type="text" name="nome" placeholder="Senha"  id="nome" className="inputUser" required></input>
    <label htmlFor ="nome"  className= "labelInput"></label>
    <br></br>    <br></br>

    <input type="text" name="nome" placeholder="Gênero" id="nome" className="inputUser" required></input>
    <label htmlFor ="nome"  className= "labelInput"></label>
  
    <br></br>    <br></br>

    <input type="text" name="nome" placeholder="Cidade"  id="nome" className="inputUser" required></input>
    <label htmlFor ="nome"  className= "labelInput"></label>



    </div>
    </fieldset>
    </div>
    </body>
    
   </>
)
