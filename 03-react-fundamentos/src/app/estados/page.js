'use client'

import { Button, Col, Row } from "react-bootstrap";
import Pagina from "../components/Pagina";
import { useState } from "react";


export default function page() {
    const[contador, setContador] = useState(0)

    function incrementar(){
        if (contador < 10){
        setContador(contador + 1)
    }
}

    function decrementar(){
        if (contador > 0){
        setContador(contador - 1)
    }
}

   

    function clicarBotao(){
       setContador(contador + 1)
        console.log('clicado')
    }
  return (
    <Pagina titulo={'Controle de Estados'}>
        <Row>
            <Col>
                <Button onClick={decrementar}>Diminuir</Button>
                <p>Volume: {contador}</p>
                <Button onClick={incrementar}>Aumentar</Button>
            </Col>
            

        </Row>
        

    </Pagina>
  )
}
