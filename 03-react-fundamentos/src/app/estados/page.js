'use client'

import { Button, Col, Row } from "react-bootstrap";
import Pagina from "../components/Pagina";
import { useState } from "react";


export default function page() {
    const[contador, setContador] = useState(0)

    const [celMarca, setCellMarca] = useState('???????');


    function mudarMarcaCell(){
        setCellMarca('SAMSUNG');
    }

    function mudarMarcaCell2(){
        setCellMarca('MOTOROLA');
    }

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

   

  return (
    <Pagina titulo={'Controle de Estados'}>
        <Row className="mt-2">
            <Col>
                <Button onClick={decrementar}>Diminuir</Button>
                <p>Volume: {contador}</p>
                <Button onClick={incrementar}>Aumentar</Button>
            </Col>
            

        </Row>
        <hr></hr>

        <Row>
            <Col className="sm-2">
                <h3 className="display-5">ADIVINHE QUAL A MARCA DE CELULAR</h3>
                <p> Marca: {celMarca}</p>
                
                    <Button onClick={mudarMarcaCell} className="m-2">Primeira Marca</Button> 
                    <Button onClick={mudarMarcaCell2}>Segunda Marca</Button>
                
            </Col>
            
        </Row>

    </Pagina>
  )
}
