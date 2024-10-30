"use client";

import Pagina from "@/components/Pagina";

import { Formik } from "formik";

import { Button, Col, Form, Row } from "react-bootstrap";
import * as Yup from "yup";
import { v4 } from "uuid";
import { useRouter } from "next/navigation";
import { FaArrowLeft, FaCheck } from "react-icons/fa";

export default function DisciplinaFormPage(props) {
    const router = useRouter();

    // Consultar ou criar um armazenamento de disciplinas
    const disciplinas = JSON.parse(localStorage.getItem("disciplinas")) || [];

    // Consultar lista de cursos. Iniciar uma lista vazia caso não haja
    const cursos = JSON.parse(localStorage.getItem("cursos")) || [];

    // Recuperação de id para edição
    const id = props.searchParams.id;
    console.log(props.searchParams.id);

    const disciplinaEditada = cursos.find((item) => item.id == id);
    console.log(disciplinaEditada);

    function salvar(dados) {
        disciplinaEditada
            ? (Object.assign(disciplinaEditada, dados),
              localStorage.setItem("disciplinas", JSON.stringify(disciplinas)),
              alert("Disciplina alterada com sucesso!"))
            : ((dados.id = v4()),
              disciplinas.push(dados),
              localStorage.setItem("disciplinas", JSON.stringify(disciplinas)),
              alert("Disciplina criada com sucesso!"));

        router.push("/disciplinas");
    }

    const initialValues = {
        nome: "",
        descricao: "",
        status: "",
        curso: "",
        professor: "",
    };

    const validationSchema = Yup.object().shape({
        nome: Yup.string().required("Campo Obrigatório!"),
        descricao: Yup.string().required("Campo Obrigatório!"),
        status: Yup.string().required("Campo Obrigatório!"),
        curso: Yup.string().required("Campo Obrigatório!"),
        professor: Yup.string().required("Campo Obrigatório!"),
    });

    return (
        <Pagina titulo={"Cadastro de Disciplina"}>
            {/* formulário */}
            <Formik
                initialValues={disciplinaEditada || initialValues}
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
                    handleReset,
                }) => {
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

                                <Form.Group as={Col}>
                                    <Form.Label>Descrição:</Form.Label>
                                    <Form.Control
                                        name="descricao"
                                        type="text"
                                        value={values.descricao}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        isValid={
                                            touched.descricao &&
                                            !errors.descricao
                                        }
                                        isInvalid={
                                            touched.descricao &&
                                            !!errors.descricao
                                        }
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.descricao}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row>

                            <Row className="mb-2">
                                {/* <Form.Group as={Col}>
                                    <Form.Label>Área:</Form.Label>
                                    <Form.Select
                                        name="area"
                                        value={values.area}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        isValid={touched.area && !errors.area}
                                        isInvalid={
                                            touched.area && !!errors.area
                                        }
                                    >
                                        <option value="">Selecione</option>
                                        {listaAreas.map((area) => (
                                            <option value={area}>{area}</option>
                                        ))}
                                    </Form.Select>
                                    <Form.Control.Feedback type="invalid">
                                        {errors.area}
                                    </Form.Control.Feedback>
                                </Form.Group> */}

                                <Form.Group as={Col}>
                                    <Form.Label>Nota:</Form.Label>
                                    <Form.Control
                                        name="nota"
                                        type="number"
                                        max={5}
                                        min={1}
                                        value={values.nota}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        isValid={touched.nota && !errors.nota}
                                        isInvalid={
                                            touched.nota && !!errors.nota
                                        }
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.nota}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row>

                            <Row className="mb-2">
                                <Form.Group as={Col}>
                                    <Form.Label>Status:</Form.Label>
                                    <Form.Select
                                        name="status"
                                        value={values.status}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        isValid={
                                            touched.status && !errors.status
                                        }
                                        isInvalid={
                                            touched.status && !!errors.status
                                        }
                                    >
                                        <option value="">Selecione</option>
                                        <option value="ativo">Ativo</option>
                                        <option value="inativo">Inativo</option>
                                    </Form.Select>
                                    <Form.Control.Feedback type="invalid">
                                        {errors.status}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                {/* <Form.Group as={Col}>
                                    <Form.Label>Faculdade:</Form.Label>
                                    <Form.Select
                                        name="faculdade"
                                        value={values.faculdade}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        isValid={
                                            touched.faculdade &&
                                            !errors.faculdade
                                        }
                                        isInvalid={
                                            touched.faculdade &&
                                            !!errors.faculdade
                                        }
                                    >
                                        <option value="">Selecione</option>
                                        {faculdades.map((faculdade) => (
                                            <option value={faculdade.nome}>
                                                {faculdade.nome}
                                            </option>
                                        ))}
                                    </Form.Select>
                                    <Form.Control.Feedback type="invalid">
                                        {errors.faculdade}
                                    </Form.Control.Feedback>
                                </Form.Group> */}
                            </Row>

                            <Row>
                                <Form.Group className="text-start" as={Col}>
                                    <Button href="/disciplinas">
                                        {" "}
                                        <FaArrowLeft /> Voltar
                                    </Button>
                                </Form.Group>

                                <Form.Group className="text-end" as={Col}>
                                    <Button
                                        className="me-2"
                                        onClick={handleReset}
                                    >
                                        <FaArrowLeft /> Limpar
                                    </Button>
                                    <Button type="submit" variant="success">
                                        <FaCheck /> Salvar
                                    </Button>
                                </Form.Group>
                            </Row>
                        </Form>
                    );
                }}
            </Formik>
        </Pagina>
    );
}
