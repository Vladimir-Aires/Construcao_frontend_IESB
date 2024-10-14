"use client";

import Pagina from "@/components/Pagina";
import { useState } from "react";
import { Button, CardImg, Form, Modal } from "react-bootstrap";

export default function Conversor() {
    const [real, setReal] = useState(0.0);
    const [moeda, setMoeda] = useState("");
    const [convertido, setConvertido] = useState(0.0);
    const [show, setShow] = useState(false);

    function converter(evento) {
        evento.preventDefault();

        const valorReal = Number(real);
        const tipoMoeda = String(moeda);

        console.log({ valorReal, tipoMoeda });

        let resultConvert = 0;

        switch (tipoMoeda) {
            case "euro":
                resultConvert = valorReal * 0.18;
                break;

            case "dolar":
                resultConvert = valorReal * 0.2;
                break;

            case "bitcoin":
                resultConvert = valorReal * 0.000003;
                break;

            default:
                console.log("Problema de conversão x.x");
                break;
        }

        console.log(resultConvert.toFixed(2));
        setConvertido(resultConvert.toFixed(2));
        setShow(true);
    }

    function reset(){
        setMoeda('');
        setReal(0.0);
    }

    return (
        <Pagina titulo="Conversor de Moedas">
            {/* imagem */}
            <div class="imagem">
                <CardImg src="https://img.freepik.com/fotos-premium/bitcoin-de-dolar-e-sinal-de-euro-em-um-podio-redondo-isolado-na-ilustracao-3d-branca_70251-1204.jpg" />
            </div>

            {/* formulário */}
            <Form onSubmit={converter}>
                <Form.Group>
                    <Form.Label>Valor em R$:</Form.Label>
                    <Form.Control
                        type="number"
                        name="valorReais"
                        value={real}
                        min={1}
                        step={0.01}
                        onChange={(info) => {
                            setReal(info.target.value);
                        }}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Moeda de Conversão:</Form.Label>
                    <Form.Select
                        name="moedaTipo"
                        value={moeda}
                        onChange={(info) => {
                            setMoeda(info.target.value);
                        }}
                    >
                        <option>Selecione</option>
                        <option value="euro">Euro</option>
                        <option value="dolar">Dólar</option>
                        <option value="bitcoin">Bitcoin</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="my-3">
                    <Button className="me-2" variant="success" type="submit">
                        Converter
                    </Button>

                    <Button variant="secondary" onClick={reset}>Limpar</Button>
                </Form.Group>
            </Form>

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
