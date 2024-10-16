"use client";

import Pagina from "@/components/Pagina";
import { Formik } from "formik";
import { Button, Col, Form, Row } from "react-bootstrap";
import * as Yup from "yup";

export default function CadastroPage() {
    function cadastrar(dados) {
        console.log(dados);
    }

    const initialValues = {
        nome: "",
        sobrenome: "",
        email: "",
        dataNascimento: "",
        telefone: "",
        endereco: {
            cep: "",
            logradouro: "",
            numero: "",
            complemento: "",
            bairro: "",
            cidade: "",
            uf: "",
        },
        faculdade: "",
        curso: "",
        periodo: "",
        matricula: "",
    };

    const validationSchema = Yup.object().shape({
        nome: Yup.string().required("Campo obrigatório!"),
        sobrenome: Yup.string().required("Campo Obrigatório!"),
        email: Yup.string()
            .email("E-mail inválido")
            .required("Campo Obrigatório!"),
        dataNascimento:
            Yup.date("Data inválida").required("Campo Obrigatório!"),
        telefone: Yup.string().required("Campo Obrigatório!"),
        endereco: Yup.object().shape({
            cep: Yup.string().required("Campo Obrigatório!"),
            logradouro: Yup.string().required("Campo Obrigatório!"),
            numero: Yup.string().required("Campo Obrigatório!"),
            complemento: Yup.string(),
            bairro: Yup.string().required("Campo Obrigatório!"),
            cidade: Yup.string().required("Campo Obrigatório!"),
            uf: Yup.string().required("Campo Obrigatório!"),
        }),
        faculdade: Yup.string().required("Campo Obrigatório!"),
        curso: Yup.string().required("Campo Obrigatório!"),
        periodo: Yup.string().required("Campo Obrigatório!"),
        matricula: Yup.string().required("Campo Obrigatório!"),
    });

    return (
        <Pagina titulo="Cadastro de Aluno">
            {/* formulário */}

            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={cadastrar}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleBlur,
                    handleSubmit,
                    handleReset,
                    handleChange,
                }) => (
                    <Form onSubmit={handleSubmit}>
                        {/* dados pessoais */}

                        <div className="text-center">
                            <h3 className="display-6">Dados Pessoais</h3>
                            <hr></hr>
                        </div>

                        <Row className="mb-2">
                            <Form.Group as={Col}>
                                <Form.Label>Nome:</Form.Label>
                                <Form.Control
                                    name="nome"
                                    type="text"
                                    value={values.nome}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isValid={touched.nome && !errors.nome}
                                    isInvalid={touched.nome && !!errors.nome}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.nome}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Col}>
                                <Form.Label>Sobrenome:</Form.Label>
                                <Form.Control
                                    name="sobrenome"
                                    type="text"
                                    value={values.sobrenome}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isValid={
                                        touched.sobrenome && !errors.sobrenome
                                    }
                                    isInvalid={
                                        touched.sobrenome && !!errors.sobrenome
                                    }
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.sobrenome}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>

                        <Row className="md-2">
                            <Form.Group as={Col}>
                                <Form.Label>Email:</Form.Label>
                                <Form.Control
                                    name="email"
                                    type="email"
                                    placeholder="example@gmail.com"
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isValid={touched.email && !errors.email}
                                    isInvalid={touched.email && !!errors.email}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.email}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Col}>
                                <Form.Label>Data de Nascimento:</Form.Label>
                                <Form.Control
                                    name="dataNascimento"
                                    type="date"
                                    value={values.dataNascimento}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isValid={
                                        touched.dataNascimento &&
                                        !errors.dataNascimento
                                    }
                                    isInvalid={
                                        touched.dataNascimento &&
                                        !!errors.dataNascimento
                                    }
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.dataNascimento}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>

                        <Row className="mb-2">
                            <Form.Group as={Col} md={6}>
                                <Form.Label>Telefone:</Form.Label>
                                <Form.Control
                                    name="telefone"
                                    type="text"
                                    value={values.telefone}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isValid={
                                        touched.telefone && !errors.telefone
                                    }
                                    isInvalid={
                                        touched.telefone && !!errors.telefone
                                    }
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.telefone}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>

                        {/* endereço */}

                        <div className="text-center">
                            <h3 className="display-6">Endereço</h3>
                            <hr></hr>
                        </div>
                        <Row className="mb-2">
                            <Form.Group as={Col} md={3}>
                                <Form.Label>Cep:</Form.Label>
                                <Form.Control
                                    name="endereco.cep"
                                    type="text"
                                    value={values?.endereco?.cep}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isValid={
                                        touched?.endereco?.cep &&
                                        !errors?.endereco?.cep
                                    }
                                    isInvalid={
                                        touched?.endereco?.cep &&
                                        !!errors?.endereco?.cep
                                    }
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors?.endereco?.cep}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Col}>
                                <Form.Label>Logradouro:</Form.Label>
                                <Form.Control
                                    name="endereco.logradouro"
                                    type="text"
                                    value={values?.endereco?.logradouro}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isValid={
                                        touched?.endereco?.logradouro &&
                                        !errors?.endereco?.logradouro
                                    }
                                    isInvalid={
                                        touched?.endereco?.logradouro &&
                                        !!errors?.endereco?.logradouro
                                    }
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors?.endereco?.logradouro}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>

                        <Row className="mb-2">
                            <Form.Group as={Col}>
                                <Form.Label>Número:</Form.Label>
                                <Form.Control
                                    name="endereco.numero"
                                    type="text"
                                    value={values?.endereco?.numero}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isValid={
                                        touched?.endereco?.numero &&
                                        !errors?.endereco?.numero
                                    }
                                    isInvalid={
                                        touched?.endereco?.numero &&
                                        !!errors?.endereco?.numero
                                    }
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors?.endereco?.numero}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Col}>
                                <Form.Label>Complemento:</Form.Label>
                                <Form.Control
                                    name="endereco.complemento"
                                    type="text"
                                    value={values?.endereco?.complemento}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isValid={
                                        touched?.endereco?.complemento &&
                                        !errors?.endereco?.complemento
                                    }
                                    isInvalid={
                                        touched?.endereco?.complemento &&
                                        !!errors?.endereco?.complemento
                                    }
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors?.endereco?.complemento}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>

                        <Row className="mb-2">
                            <Form.Group as={Col}>
                                <Form.Label>Cidade:</Form.Label>
                                <Form.Control
                                    name="endereco.cidade"
                                    type="text"
                                    value={values?.endereco?.cidade}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isValid={
                                        touched?.endereco?.cidade &&
                                        !errors?.endereco?.cidade
                                    }
                                    isInvalid={
                                        touched?.endereco?.cidade &&
                                        !!errors?.endereco?.cidade
                                    }
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors?.endereco?.cidade}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label>Bairro:</Form.Label>
                                <Form.Control
                                    name="endereco.bairro"
                                    type="text"
                                    value={values?.endereco?.bairro}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isValid={
                                        touched?.endereco?.bairro &&
                                        !errors?.endereco?.bairro
                                    }
                                    isInvalid={
                                        touched?.endereco?.bairro &&
                                        !!errors?.endereco?.bairro
                                    }
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors?.endereco?.bairro}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Col}>
                                <Form.Label>UF:</Form.Label>
                                <Form.Control
                                    name="endereco.uf"
                                    type="text"
                                    value={values?.endereco?.uf}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isValid={
                                        touched?.endereco?.uf &&
                                        !errors?.endereco?.uf
                                    }
                                    isInvalid={
                                        touched?.endereco?.uf &&
                                        !!errors?.endereco?.uf
                                    }
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors?.endereco?.uf}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>

                        {/* botões */}

                        <Form.Group className="text-end">
                            <Button onClick={handleReset} className="me-2">
                                Limpar
                            </Button>
                            <Button type="submit" variant="success">
                                Enviar
                            </Button>
                        </Form.Group>
                    </Form>
                )}
            </Formik>
        </Pagina>
    );
}
