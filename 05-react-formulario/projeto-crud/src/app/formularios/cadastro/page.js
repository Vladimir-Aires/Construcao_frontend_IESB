"use client";

import Pagina from "@/components/Pagina";
import { Formik } from "formik";
import { Button, Col, Form, Row } from "react-bootstrap";
import * as Yup from "yup";
import ReactInputMask from "react-input-mask";

export default function CadastroPage() {
    function cadastrar(aluno) {
        console.log(aluno);

        const alunos = JSON.parse(localStorage.getItem('alunos')) || []

        alunos.push(aluno)

        localStorage.setItem('alunos', JSON.stringify(alunos))

        alert('Aluno cadastrado com sucesso!')
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
        foto: "",
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
        foto: Yup.string(),
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
                                    as={ReactInputMask}
                                    mask={"(99)99999-9999"}
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
                                    as={ReactInputMask}
                                    mask={"99999-999"}
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

                        {/* dados acadêmicos */}
                        <div className="text-center">
                            <h3 className="display-6">Dados Acadêmicos</h3>
                            <hr></hr>
                        </div>

                        <Row className="mb-2">
                            <Form.Group as={Col}>
                                <Form.Label>Faculdade:</Form.Label>
                                <Form.Select
                                    name="faculdade"
                                    value={values?.faculdade}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isValid={
                                        touched?.faculdade && !errors?.faculdade
                                    }
                                    isInvalid={
                                        touched?.faculdade &&
                                        !!errors?.faculdade
                                    }
                                >
                                    <option>Selecione</option>
                                    <option>IESB SUL</option>
                                    <option>IESB NORTE</option>
                                    <option>IESB OESTE</option>
                                </Form.Select>
                                <Form.Control.Feedback type="invalid">
                                    {errors?.faculdade}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Col}>
                                <Form.Label>Curso:</Form.Label>
                                <Form.Select
                                    name="curso"
                                    value={values?.curso}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isValid={touched?.curso && !errors?.curso}
                                    isInvalid={
                                        touched?.curso && !!errors?.curso
                                    }
                                >
                                    <option>Selecione</option>
                                    <option>
                                        Análise e Desenvolvimento de Sistemas
                                    </option>
                                    <option>Jogos Digitais</option>
                                    <option>Enfermagem</option>
                                </Form.Select>
                                <Form.Control.Feedback type="invalid">
                                    {errors?.curso}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Col}>
                                <Form.Label>Período:</Form.Label>
                                <Form.Select
                                    name="periodo"
                                    value={values?.periodo}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isValid={
                                        touched?.periodo && !errors?.periodo
                                    }
                                    isInvalid={
                                        touched?.periodo && !!errors?.periodo
                                    }
                                >
                                    <option>Selecione</option>
                                    <option>Matutino</option>
                                    <option>Vespertino</option>
                                    <option>Noturno</option>
                                </Form.Select>
                                <Form.Control.Feedback type="invalid">
                                    {errors?.periodo}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>

                        <Row>
                            <Form.Group as={Col} md={4}>
                                <Form.Label>Matrícula:</Form.Label>
                                <Form.Control
                                    as={ReactInputMask}
                                    mask={"99999999999"}
                                    name="matricula"
                                    type="text"
                                    value={values.matricula}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isValid={
                                        touched.matricula && !errors.matricula
                                    }
                                    isInvalid={
                                        touched.matricula && !!errors.matricula
                                    }
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.matricula}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Col}>
                                <Form.Label>Link da Foto:</Form.Label>
                                <Form.Control
                                    name="foto"
                                    type="text"
                                    value={values.foto}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isValid={touched.foto && !errors.foto}
                                    isInvalid={touched.foto && !!errors.foto}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.foto}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>

                        {/* botões */}

                        <Form.Group className="text-end mb-5">
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
