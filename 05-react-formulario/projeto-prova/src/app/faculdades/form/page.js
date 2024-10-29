"use client";

import Pagina from "@/components/Pagina";
import apiLocalidades from "@/services/apiLocalidades";
import { Formik } from "formik";
import { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import * as Yup from "yup";
import { v4 } from "uuid";
import { useRouter } from "next/navigation";

export default function FaculdadeFormPage() {
    const router = useRouter();

    const [paises, setPaises] = useState([]);
    const [estados, setEstados] = useState([]);
    const [cidades, setCidades] = useState([]);

    const faculdades = JSON.parse(localStorage.getItem("faculdades")) || [];

    useEffect(() => {
        apiLocalidades.get("/paises").then((response) => {
            console.log(response.data);
            setPaises(response.data);
        });

        apiLocalidades.get("estados?orderBy=nome").then((response) => {
            console.log("Estados: ", response.data);
            setEstados(response.data);
        });
    }, []);

    function salvar(dados) {
        dados.id = v4()

        console.log(dados)

        faculdades.push(dados)

        localStorage.setItem("faculdades", JSON.stringify(faculdades));

        alert("Faculdade criada com sucesso!");
        router.push("/faculdades");
    }

    const initialValues = {
        nome: "",
        pais: "Brasil",
        estado: "",
        cidade: "",
        endereco: "",
    };

    const validationSchema = Yup.object().shape({
        nome: Yup.string().required("Campo Obrigatório!"),
        pais: Yup.string().required("Campo Obrigatório!"),
        estado: Yup.string(),
        cidade: Yup.string(),
        endereco: Yup.string().required("Campo Obrigatório!"),
    });

    return (
        <Pagina titulo={"Cadastro de Faculdade"}>
            {/* formulário */}
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={salvar}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleBlur,
                    handleChange,
                    handleSubmit,
                }) => {
                    //ações do formulário
                    //   debug
                    console.log("Debug:");
                    console.log({ values, errors, touched });

                    useEffect(() => {
                        console.log("Estado mexido!!!");
                        if (values.estado !== "") {
                            apiLocalidades
                                .get(`/estados/${values.estado}/municipios`)
                                .then((response) => {
                                    console.log("cidades: ", response.data);
                                    setCidades(response.data);
                                });
                        }
                    }, [values.estado]);

                    return (
                        <Form onSubmit={handleSubmit}>
                            <Row className="mb-2">
                                <Form.Group as={Col}>
                                    <Form.Label>Nome</Form.Label>
                                    <Form.Control
                                        name="nome"
                                        type="text"
                                        value={values.nome}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        isValid={touched.nome && !errors.nome}
                                        isInvalid={
                                            touched.nome && !!errors.nome
                                        }
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.nome}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row>

                            <Row className="mb-2">
                                <Form.Group as={Col}>
                                    <Form.Label>Endereço</Form.Label>
                                    <Form.Control
                                        name="endereco"
                                        type="text"
                                        value={values.endereco}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        isValid={
                                            touched.endereco && !errors.endereco
                                        }
                                        isInvalid={
                                            touched.endereco &&
                                            !!errors.endereco
                                        }
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.endereco}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row>

                            <Row className="mb-2">
                                <Form.Group as={Col}>
                                    <Form.Label>País</Form.Label>
                                    <Form.Select
                                        name="pais"
                                        value={values.pais}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        isValid={touched.pais && !errors.pais}
                                        isInvalid={
                                            touched.pais && !!errors.pais
                                        }
                                    >
                                        <option value="">Selecione</option>
                                        {paises.map((pais) => 
                                            <option value={pais.nome}>
                                                {pais.nome}
                                            </option>
                                        )}
                                    </Form.Select>
                                    <Form.Control.Feedback type="invalid">
                                        {errors.pais}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group as={Col}>
                                    <Form.Label>Estado</Form.Label>
                                    <Form.Select
                                        name="estado"
                                        value={values.estado}
                                        disabled={values.pais !== "Brasil"}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        isValid={
                                            touched.estado && !errors.estado
                                        }
                                        isInvalid={
                                            touched.estado && !!errors.estado
                                        }
                                    >
                                        <option value="">Selecione</option>
                                        {estados.map((estado) => (
                                            <option value={estado.sigla}>
                                                {estado.sigla}
                                            </option>
                                        ))}
                                    </Form.Select>
                                    <Form.Control.Feedback type="invalid">
                                        {errors.estado}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group as={Col}>
                                    <Form.Label>Cidade</Form.Label>
                                    <Form.Select
                                        name="cidade"
                                        value={values.cidade}
                                        disabled={values.pais !== "Brasil"}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        isValid={
                                            touched.cidade && !errors.cidade
                                        }
                                        isInvalid={
                                            touched.cidade && !!errors.cidade
                                        }
                                    >
                                        <option value="">Selecione</option>
                                        {cidades.map((cidade) => (
                                            <option value={cidade.nome}>
                                                {cidade.nome}
                                            </option>
                                        ))}
                                    </Form.Select>
                                    <Form.Control.Feedback type="invalid">
                                        {errors.cidade}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row>

                            <Form.Group className="text-end">
                                <Button className="me-2" href="/faculdades">
                                    Voltar
                                </Button>
                                <Button type="submit" variant="success">
                                    Enviar
                                </Button>
                            </Form.Group>
                        </Form>
                    );
                }}
            </Formik>
        </Pagina>
    );
}
