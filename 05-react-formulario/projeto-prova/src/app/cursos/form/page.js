"use client";

import Pagina from "@/components/Pagina";

import { Formik } from "formik";

import { Button, Col, Form, Row } from "react-bootstrap";
import * as Yup from "yup";
import { v4 } from "uuid";
import { useRouter } from "next/navigation";
import { FaArrowLeft, FaCheck } from "react-icons/fa";

export default function CursoFormPage(props) {
    const router = useRouter();

    // Consultar faculdades
    const faculdades = JSON.parse(localStorage.getItem("faculdades")) || [];

    // Consultar lista de cursos. Iniciar uma lista vazia caso não haja
    const cursos = JSON.parse(localStorage.getItem("cursos")) || [];

    // Recuperação de id para edição
    const id = props.searchParams.id;
    console.log(props.searchParams.id);

    const cursoEditado = cursos.find((item) => item.id == id);
    console.log(cursoEditado);

    function salvar(dados) {
        cursoEditado
            ? (Object.assign(cursoEditado, dados),
              localStorage.setItem("cursos", JSON.stringify(cursos)))
            : ((dados.id = v4()),
              cursos.push(dados),
              localStorage.setItem("cursos", JSON.stringify(cursos)));

        alert("Curso criado com sucesso!");
        router.push("/cursos");
    }

    const listaAreas = [
        "Ciências Exatas",
        "Ciências Humanas",
        "Tecnologia da Informação",
        "Engenharia",
    ];

    const initialValues = {
        nome: "",
        descricao: "",
        area: "",
        nota: "",
        status: "",
        faculdade: "",
    };

    const validationSchema = Yup.object().shape({
        nome: Yup.string().required("Campo Obrigatório!"),
        descricao: Yup.string().required("Campo Obrigatório!"),
        area: Yup.string().required("Campo Obrigatório!"),
        nota: Yup.number()
            .min(1, "Nota Inválida")
            .max(5, "Nota Inválida")
            .required("Campo Obrigatório!"),
        status: Yup.string().required("Campo Obrigatório!"),
        faculdade: Yup.string().required("Campo Obrigatório!"),
    });

    return (
        <Pagina titulo={"Cadastro de Curso"}>
            {/* formulário */}
            <Formik
                initialValues={cursoEditado || initialValues}
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
                                <Form.Group as={Col}>
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
                                </Form.Group>

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

                                <Form.Group as={Col}>
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
                                </Form.Group>
                            </Row>

                            <Form.Group className="text-end">
                                <Button className="me-2" href="/faculdades">
                                    <FaArrowLeft /> Voltar
                                </Button>
                                <Button type="submit" variant="success">
                                    <FaCheck /> Enviar
                                </Button>
                            </Form.Group>
                        </Form>
                    );
                }}
            </Formik>
        </Pagina>
    );
}
