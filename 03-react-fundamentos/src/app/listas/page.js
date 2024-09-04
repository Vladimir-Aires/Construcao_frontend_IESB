'use client'

import React from "react";
import Pagina from "../components/Pagina";
import { Carousel, CarouselItem, Col, Row, Table } from "react-bootstrap";

export default function page() {
    const carros = ["Palio", "HB20", "S10", "ECO-SPORT"];
    const images = ['https://picsum.photos/100?random=1', 'https://picsum.photos/100?random=2', 'https://picsum.photos/100?random=3'];

    return (
        <Pagina titulo="Listas">
            <Row>
                <Col>
                    {carros.map((carro) => {
                        return <p>{carro}</p>;
                    })}
                </Col>

                <Col>
                    <ul>
                        {carros.map((carro) => {
                            return <li>{carro}</li>;
                        })}
                    </ul>
                </Col>
            </Row>

            <Row>
                <Table>
                    <thead>
                        <tr>
                            <th>Carro</th>
                        </tr>
                    </thead>
                    <tbody>
                        {carros.map((carro) => {
                            return (
                                <tr>
                                    <td>{carro}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
            </Row>

            <Row>
                <Carousel>
                    {images.map(imagem => {
                        return (
                            <CarouselItem>
                                <img src={imagem} width={700} height={700}></img>
                            </CarouselItem>
                        )
                    })}
                </Carousel>
            </Row>
        </Pagina>
    );
}
