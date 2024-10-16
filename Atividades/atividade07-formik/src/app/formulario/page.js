"use client";

import Pagina from "@/components/Pagina";
import { Formik } from "formik";
import { useState } from "react";
import { Button, CardImg, Col, Form, Modal, Row } from "react-bootstrap";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { LuEraser } from "react-icons/lu";

export default function Formulario() {
    const [convertido, setConvertido] = useState(0.0);
    const [moeda, setMoeda] = useState("");
    const [show, setShow] = useState(false);

    function converter(dados) {
        let resultConvert = 0;

        console.log(dados);

        switch (dados.tipoMoeda) {
            case "dolar":
                resultConvert = dados.valorReal * 0.2;
                setMoeda("Dólar");
                break;

            case "euro":
                resultConvert = dados.valorReal * 0.18;
                setMoeda("Euro");
                break;

            case "bitcoin":
                resultConvert = dados.valorReal * 0.000003;
                setMoeda("Bitcoin");
                break;

            default:
                console.log(`PROBLEMA DE CONVERSÃO X.X`);
                break;
        }

        console.log(resultConvert.toFixed(2));
        setConvertido(resultConvert.toFixed(2));

        setShow(true);
    }

    return (
        <Pagina titulo="Conversor de Moedas">
            {/* imagem */}
            <Row>
                <Col md={5} className="mx-auto">
                    <CardImg src="https://img.freepik.com/fotos-premium/bitcoin-de-dolar-e-sinal-de-euro-em-um-podio-redondo-isolado-na-ilustracao-3d-branca_70251-1204.jpg" />
                </Col>
            </Row>

            {/* formulário */}
            <Row>
                <Col md={9} className="mx-auto">
                    <Formik
                        initialValues={{
                            valorReal: "0.0",
                            tipoMoeda: "",
                        }}
                        onSubmit={(values) => converter(values)}
                    >
                        {({
                            values,
                            handleChange,
                            handleSubmit,
                            handleReset,
                        }) => (
                            <Form onSubmit={converter}>
                                <Form.Group>
                                    <Form.Label>Valor em R$:</Form.Label>
                                    <Form.Control
                                        name="valorReal"
                                        type="number"
                                        min={0.1}
                                        step={0.1}
                                        value={values.valorReal}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Moeda de Conversão:</Form.Label>
                                    <Form.Select
                                        name="tipoMoeda"
                                        value={values.tipoMoeda}
                                        onChange={handleChange}
                                    >
                                        <option>Selecione</option>
                                        <option value="dolar">Dólar</option>
                                        <option value="euro">Euro</option>
                                        <option value="bitcoin">Bitcoin</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group className="my-2">
                                    <Button
                                        className="me-2"
                                        variant="success"
                                        onClick={handleSubmit}
                                    >
                                        {" "}
                                        <FaMoneyBillTransfer /> Converter
                                    </Button>
                                    <Button
                                        variant="secondary"
                                        onClick={handleReset}
                                    >
                                        {" "}
                                        <LuEraser /> Limpar
                                    </Button>
                                </Form.Group>
                            </Form>
                        )}
                    </Formik>
                </Col>
            </Row>
            {/* modal */}

            <Modal show={show} onHide={() => setShow(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Resultado da Conversão</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Valor em {moeda}: {convertido}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShow(false)}>
                        Fechar
                    </Button>
                </Modal.Footer>
            </Modal>
        </Pagina>
    );
}
