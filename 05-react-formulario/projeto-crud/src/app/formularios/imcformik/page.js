"use client";

import Pagina from "@/components/Pagina";
import { Formik } from "formik";
import { useState } from "react";
import { Button, CardImg, Form, Modal } from "react-bootstrap";
import { FaCircleCheck } from "react-icons/fa6";
import { RxReset } from "react-icons/rx";

export default function page() {
    const [imc, setImc] = useState(0);
    const [classificar, setClassificar] = useState("");

    const [showModal, setShowModal] = useState(false);

    function calcularDados(batata) {
        let classificacao = '';
        console.log(batata);

        const resultIMC = (
            batata.peso /
            (batata.altura * batata.altura)
        ).toFixed(1);

        console.log(resultIMC);

        

        if (classificacao < 18.5) {
            classificacao = "Abaixo do Peso";
        } else if (classificacao >= 18.5 && classificacao < 25) {
            classificacao = "Peso Normal";
        } else if (classificacao >= 25 && classificacao < 29.9) {
            classificacao = "Excesso de Peso";
        } else if (classificacao >= 30) {
            classificacao = "Obesidade";
        } else if (classificacao >= 35) {
            classificacao = "Obesidade Extrema";
        }

        console.log(classificacao);

        setImc(resultIMC);
        setClassificar(classificacao);

        setShowModal(true)
    }

    return (
        <Pagina titulo={"Calculadora IMC Formik"}>
            {/* imagem tabela */}

            <div>
                <CardImg src="/imc.jfif"></CardImg>
            </div>
            {/* formulário */}
            <Formik
                initialValues={{
                    nome: "",
                    genero: "",
                    peso: "0",
                    altura: "0.00",
                }}
                onSubmit={(values) => calcularDados(values)}
            >
                {({ values, handleChange, handleSubmit, handleReset }) => (
                    <Form onSubmit={calcularDados}>
                        <Form.Group>
                            <Form.Label>Nome:</Form.Label>
                            <Form.Control
                                type="text"
                                name="nome"
                                value={values.nome}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Gênero:</Form.Label>
                            <Form.Select
                                name="genero"
                                value={values.genero}
                                onChange={handleChange}
                            >
                                <option>Selecione</option>
                                <option value="Masculino">Masculino</option>
                                <option value="Feminino">Feminino</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Peso:</Form.Label>
                            <Form.Control
                                name="peso"
                                type="number"
                                min={1}
                                value={values.peso}
                                onChange={handleChange}
                            />

                            <Form.Text>Peso em kg. Ex: 80</Form.Text>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Altura:</Form.Label>
                            <Form.Control
                                name="altura"
                                type="number"
                                min={0.01}
                                step={0.01}
                                value={values.altura}
                                onChange={handleChange}
                            />
                            <Form.Text>Altura em metros. Ex: 1,75</Form.Text>
                        </Form.Group>
                        <Form.Group>
                            <Button onClick={handleSubmit}>
                                {" "}
                                <FaCircleCheck /> Enviar
                            </Button>
                            <Button onClick={handleReset}>
                                {" "}
                                <RxReset /> Limpar
                            </Button>
                        </Form.Group>
                    </Form>
                )}
            </Formik>

            <Modal show={showModal} centered onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Resultado</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>SEU IMC: {imc}</p>
                    <p>SUA CLASSIFICAÇÃO: {classificar}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="secondary"
                        onClick={() => setShowModal(false)}
                    >
                        Fechar
                    </Button>
                </Modal.Footer>
            </Modal>
        </Pagina>
    );
}
