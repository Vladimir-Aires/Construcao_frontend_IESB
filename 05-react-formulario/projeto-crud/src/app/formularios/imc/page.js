"use client";

import Pagina from "@/components/Pagina";
import { useState } from "react";
import { Button, CardImg, Form, Modal } from "react-bootstrap";
import { PiMathOperationsFill } from "react-icons/pi";

export default function ImcPage() {
    const [showModal, setShowModal] = useState(false);

    const [nome, setNome] = useState("");
    const [peso, setPeso] = useState(0);
    const [genero, setGenero] = useState("");
    const [altura, setAltura] = useState(0);

    const [imc, setImc] = useState(0);
    const [classificar, setClassificar] = useState("");

    function calcular(evento) {
        evento.preventDefault();

        const pesoNumerico = Number(peso);
        const alturaNumerico = Number(altura);

        console.log({ nome, pesoNumerico, genero, alturaNumerico });

        const resultadoIMC = (
            pesoNumerico /
            (alturaNumerico * alturaNumerico)
        ).toFixed(1);

        setImc(resultadoIMC);

        if (imc < 18.5) {
            setClassificar("Abaixo do peso");
        } else if (imc >= 18.5 && imc < 24.9) {
            setClassificar("Peso Normal");
        } else if (imc >= 25 && imc < 29.9) {
            setClassificar("Sobrepeso");
        } else if (imc >= 30 && imc < 35) {
            setClassificar("Obesidade grau 1");
        } else {
            setClassificar("Obesidade Mórbida");
        }

        console.log({ imc, classificar });

        setShowModal(true)
    }

    return (
        <Pagina titulo={"Calculadora de IMC"}>
            {/* formulario */}

            <div>
                <CardImg src="/imc.jfif"></CardImg>
            </div>

            <Form onSubmit={calcular}>
                <Form.Group>
                    <Form.Label>Nome:</Form.Label>
                    <Form.Control
                        type="text"
                        name="nome"
                        value={nome}
                        onChange={(e) => {
                            setNome(e.target.value);
                        }}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Gênero:</Form.Label>
                    <Form.Select
                        name="genero"
                        value={genero}
                        onChange={(e) => {
                            setGenero(e.target.value);
                        }}
                    >
                        <option>Selecione</option>
                        <option value="Masculino">Masculino</option>
                        <option value="Feminino">Femenino</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Peso</Form.Label>
                    <Form.Control
                        type="number"
                        name="peso"
                        value={peso}
                        onChange={(e) => {
                            setPeso(e.target.value);
                        }}
                        min={1}
                        step={1}
                    />
                    <Form.Text>Peso em KG. ex: 80</Form.Text>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Altura:</Form.Label>
                    <Form.Control
                        type="number"
                        name="altura"
                        value={altura}
                        onChange={(e) => {
                            setAltura(e.target.value);
                        }}
                        min={0.01}
                        step={0.01}
                    />
                    <Form.Text>Altura em metros. Ex: 1,66</Form.Text>
                </Form.Group>

                <Form.Group className="mb-3 text-center">
                    <Button variant="success" className="me-2" type="submit">
                        {" "}
                        <PiMathOperationsFill /> Calcular
                    </Button>
                </Form.Group>
            </Form>

            <Modal show={showModal} centered onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Resultado</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                    SEU IMC: {imc}
                    </p>
                    <p>
                        SUA CLASSIFICAÇÃO: {classificar}
                    </p>
                    
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Fechar 
                    </Button>
                    
                </Modal.Footer>
            </Modal>
        </Pagina>
    );
}
