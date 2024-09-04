'use client'

import { Col, Row } from "react-bootstrap";
import Pagina from "../components/Pagina";
import Cliente from "./Cliente";

export default function page() {
    const clientes = [
        {
            nome: "João",
            sobreNome: "Paulo",
            idade: 20,
            imagem: "https://picsum.photos/100?random=1",
        },
        {
            nome: "João",
            sobreNome: "Miguel",
            idade: 14,
            imagem: "https://picsum.photos/100?random=2",
        },
    ];
    return (
        <Pagina titulo={"Objetos"}>
            <Row sm={2} md={4} lg={6}>
                {clientes.map(cliente => {
                    return(
                        <Col>
                            <Cliente cliente={cliente}></Cliente>
                        </Col>
                    )
                })}
                  
            </Row>
            
        </Pagina>
    );
}
