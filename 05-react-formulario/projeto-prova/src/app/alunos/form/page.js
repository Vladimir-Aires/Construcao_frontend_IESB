"use client";

import Pagina from "@/components/Pagina";
import { Formik } from "formik";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { FaArrowLeft, FaCheck, FaTrash } from "react-icons/fa";
import { v4 } from "uuid";
import * as Yup from "yup";

export default function AlunoFormPage(props) {

    const [Cursos, setCursos] = useState([]);
    // router -> hook para navegação de telas
    const router = useRouter();

    // Busca a lista de cursos para usar no select
    const cursos = JSON.parse(localStorage.getItem("cursos")) || [];
    const faculdades = JSON.parse(localStorage.getItem("faculdades")) || [];

    // Buscar a lista de alunos no localStorage, se não existir, inicializa uma lista vazia
    const alunos = JSON.parse(localStorage.getItem("alunos")) || [];

    // Recuperando id para edição
    const id = props.searchParams.id;
    console.log(props.searchParams.id);
    // Buscar na lista a faculdade com o ID recebido no parametro
    const alunoEditado = alunos.find((item) => item.id == id);
    console.log(alunoEditado);

    // função para salvar os dados do form
    function salvar(dados) {
        // Se professorEditado existe, mudar os dados e gravar no localStorage
        if (alunoEditado) {
            Object.assign(alunoEditado, dados);
            // Substitui a lista antiga pela nova no localStorage
            localStorage.setItem("alunos", JSON.stringify(alunos));
            alert("Aluno editado com sucesso!");
        } else {
            // se alunoEditado não existe, é criação de uma nova
            // gerar um ID (Identificador unico)
            dados.id = v4();
            // Adiciona a nova faculdade na lista de faculdades
            alunos.push(dados);
            // Substitui a lista antiga pela nova no localStorage
            localStorage.setItem("alunos", JSON.stringify(alunos));
            alert("Aluno criado com sucesso!");
        }

        router.push("/alunos");
    }

    // Campos do form e valores iniciais(default)
    const initialValues = {
        nome: "",
        sobrenome: "",
        email: "",
        dataNascimento: "",
        telefone: "",
        faculdade: "",
        curso: "",
        periodo: "",
        matricula: "",
        foto: "",
    };

    // Esquema de validação com Yup
    const validationSchema = Yup.object().shape({
        nome: Yup.string().required("Campo obrigatório"),
        sobrenome: Yup.string().required("Campo obrigatório"),
        email: Yup.string()
            .email("E-mail inválido!")
            .required("Campo obrigatório!"),
        dataNascimento:
            Yup.date("Data inválida!").required("Campo obrigatório!"),
        telefone: Yup.string().required("Campo obrigatório"),
        faculdade: Yup.string().required("Campo obrigatório"),
        curso: Yup.string().required("Campo obrigatório"),
        periodo: Yup.string().required("Campo obrigatório"),
        matricula: Yup.string().required("Campo obrigatório"),
        foto: Yup.string(),
    });

    return (
        <Pagina titulo={"Cadastro de Aluno"}>
            {/* Formulário */}

            <Formik
                // Atributos do formik
                // Se for edição, coloca os dados de professorEditado
                // Se for nova, colocar o initialValues com os valores vazios
                initialValues={alunoEditado || initialValues}
                validationSchema={validationSchema}
                onSubmit={salvar}
            >
                {/* construção do template do formulário */}
                {
                    // os valores e funções do formik
                    ({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        handleReset
                    }) => {
                        // ações do formulário
                        // debug
                        // console.log("DEBUG >>>")
                        // console.log({values, errors, touched})

                        useEffect(() => {
                           const cursoFiltro = cursos.filter((curso) => curso.faculdade == values.faculdade)
                            setCursos(cursoFiltro)
                        }, [values.faculdade])

                        // retorno com o template jsx do formulário
                        return (
                            <Form onSubmit={handleSubmit}>
                                <div className="text-center">
                                    <h1 className="display-6">
                                        Dados Pessoais
                                    </h1>
                                    <hr></hr>
                                </div>
                                {/* Campos do form */}
                                <Row className="mb-2">
                                    <Form.Group as={Col}>
                                        <Form.Label>Nome:</Form.Label>
                                        <Form.Control
                                            name="nome"
                                            type="text"
                                            value={values.nome}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            isValid={
                                                touched.nome && !errors.nome
                                            }
                                            isInvalid={
                                                touched.nome && errors.nome
                                            }
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
                                                touched.sobrenome &&
                                                !errors.sobrenome
                                            }
                                            isInvalid={
                                                touched.sobrenome &&
                                                errors.sobrenome
                                            }
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.sobrenome}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Row>

                                <Row>
                                    <Form.Group as={Col}>
                                        <Form.Label>Email:</Form.Label>
                                        <Form.Control
                                            name="email"
                                            type="email"
                                            value={values.email}
                                            placeholder="example@email.com"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            isValid={
                                                touched.email && !errors.email
                                            }
                                            isInvalid={
                                                touched.email && errors.email
                                            }
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.email}
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group as={Col}>
                                        <Form.Label>
                                            Data de Nascimento:
                                        </Form.Label>
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
                                                errors.dataNascimento
                                            }
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.dataNascimento}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Row>

                                <Row>
                                    <Form.Group as={Col}>
                                        <Form.Label>Telefone:</Form.Label>
                                        <Form.Control
                                            name="telefone"
                                            type="text"
                                            placeholder="(00)00000-0000"
                                            value={values.telefone}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            isValid={
                                                touched.telefone &&
                                                !errors.telefone
                                            }
                                            isInvalid={
                                                touched.telefone &&
                                                errors.telefone
                                            }
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.telefone}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Row>

                                <div className="text-center my-3">
                                    <h1 className="display-6">Acadêmico</h1>
                                    <hr></hr>
                                </div>

                                <Row>
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
                                                errors.faculdade
                                            }
                                        >
                                            <option value=''>Selecione</option>
                                            {faculdades.map((faculdade) => (
                                                <option value={faculdade.nome}>{faculdade.nome}</option>
                                            ))}

                                        </Form.Select>
                                        <Form.Control.Feedback type="invalid">
                                            {errors.faculdade}
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group as={Col}>
                                        <Form.Label>Curso:</Form.Label>
                                        <Form.Select
                                            name="curso"
                                            value={values.curso}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            isValid={
                                                touched.curso &&
                                                !errors.curso
                                            }
                                            isInvalid={
                                                touched.curso &&
                                                errors.curso
                                            }
                                        >
                                            <option value=''>Selecione</option>
                                            {Cursos.map((curso) => (
                                                <option value={curso.nome}>{curso.nome}</option>
                                            ))}

                                        </Form.Select>
                                        <Form.Control.Feedback type="invalid">
                                            {errors.curso}
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group as={Col}>
                                        <Form.Label>Período:</Form.Label>
                                        <Form.Select
                                            name="periodo"
                                            value={values.periodo}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            isValid={
                                                touched.periodo &&
                                                !errors.periodo
                                            }
                                            isInvalid={
                                                touched.periodo &&
                                                errors.periodo
                                            }
                                        >
                                            <option value=''>Selecione</option>
                                            <option value='matutino'>Matutino</option>
                                            <option value='vespertino'>Vespertino</option>
                                            <option value='noturno'>Noturno</option>
                                            
                                        </Form.Select>
                                        <Form.Control.Feedback type="invalid">
                                            {errors.periodo}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Row>

                                <Row>

                                <Form.Group as={Col} md={4}>
                                        <Form.Label>Matrícula:</Form.Label>
                                        <Form.Control
                                            name="matricula"
                                            type="text"
                                            value={values.matricula}
                                            placeholder="000000"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            isValid={
                                                touched.matricula && !errors.matricula
                                            }
                                            isInvalid={
                                                touched.matricula && errors.matricula
                                            }
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.matricula}
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group as={Col}>
                                        <Form.Label>Foto:</Form.Label>
                                        <Form.Control
                                            name="foto"
                                            type="text"
                                            value={values.foto}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            isValid={
                                                touched.foto && !errors.foto
                                            }
                                            isInvalid={
                                                touched.foto && errors.foto
                                            }
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.foto}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Row>

                                {/* botões */}
                                <Form.Group className="text-end my-3">
                                <Button className="me-2" href="/faculdades" variant="secondary">
                                        <FaArrowLeft /> Voltar
                                    </Button>
                                    <Button className="me-2" href="/faculdades" onClick={handleReset}>
                                      <FaTrash/> Limpar
                                    </Button>
                                    <Button type="submit" variant="success">
                                        <FaCheck /> Enviar
                                    </Button>
                                </Form.Group>
                            </Form>
                        );
                    }
                }
            </Formik>
        </Pagina>
    );
}
