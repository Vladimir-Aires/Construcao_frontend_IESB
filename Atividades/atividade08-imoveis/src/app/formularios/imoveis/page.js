"use client";
import { Formik } from "formik";
import Pagina from "../../../components/Pagina";
import { Button, Col, Form, Row } from "react-bootstrap";

export default function ImoveisPage() {
    const initialValues = {
        tipo: "",
        finalidade: "",
        valor: "",
        area: "",
        quartos: "",
        banheiros: "",
        descricao: "",
        foto: "",
        vagasGaragem: "",
        endereco: {
            cep: "",
            logradouro: "",
            numero: "",
            complemento: "",
            bairro: "",
            cidade: "",
            UF: "",
        },
        proprietario: {
            nome: "",
            CPF: "",
            telefone: "",
            email: "",
        },
    };
    const validationSchema = 0;

    function cadastro(imovel) {}

    return (
        <Pagina titulo={"Cadastro de Imóveis"}>
            {/* formulário */}
            <Formik
                onSubmit={cadastro}
                initialValues={initialValues}
                validationSchema={validationSchema}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleReset,
                    handleSubmit,
                    handleBlur,
                }) => (
                    <Form onSubmit={handleSubmit}>
                        <div>
                            <h3 className="display-5">Dados do Imóvel</h3>
                            <hr />
                        </div>
                        <Row className="mt-2">
                            <Form.Group as={Col}>
                                <Form.Label>
                                    {" "}
                                    <strong>Tipo</strong>{" "}
                                </Form.Label>
                                <Form.Select
                                    name="tipo"
                                    value={values.tipo}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isValid={touched?.tipo && !errors.tipo}
                                    isInvalid={touched?.tipo && !!errors.tipo}
                                >
                                    <option>Selecione</option>
                                    <option>Casa</option>
                                    <option>Apartamento</option>
                                    <option>Terreno</option>
                                    <option>Sala Comercial</option>
                                </Form.Select>
                                <Form.Control.Feedback>
                                    {errors?.tipo}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Col}>
                                <Form.Label>
                                    {" "}
                                    <strong>Finalidade</strong>{" "}
                                </Form.Label>
                                <Form.Select
                                    name="finalidade"
                                    value={values.finalidade}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isValid={
                                        touched?.finalidade &&
                                        !errors?.finalidade
                                    }
                                    isInvalid={
                                        touched?.finalidade &&
                                        !!errors?.finalidade
                                    }
                                >
                                    <option>Selecione</option>
                                    <option>Venda</option>
                                    <option>Aluguel</option>
                                </Form.Select>
                                <Form.Control.Feedback>
                                    {errors?.finalidade}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>

                        <Row className="mt-2">
                            <Form.Group as={Col}>
                                <Form.Label>
                                    {" "}
                                    <strong>Valor (R$)</strong>{" "}
                                </Form.Label>
                                <Form.Control
                                    name="valor"
                                    type="text"
                                    value={values.valor}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isValid={touched?.valor && !errors.valor}
                                    isInvalid={touched?.valor && !!errors.valor}
                                />
                                <Form.Control.Feedback>
                                    {errors?.valor}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Col}>
                                <Form.Label>
                                    {" "}
                                    <strong>Área (m²)</strong>{" "}
                                </Form.Label>
                                <Form.Control
                                    name="area"
                                    type="text"
                                    value={values.area}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isValid={touched?.area && !errors.area}
                                    isInvalid={touched?.area && !!errors.area}
                                />
                                <Form.Control.Feedback>
                                    {errors?.area}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Col}>
                                <Form.Label>
                                    {" "}
                                    <strong>Quartos</strong>{" "}
                                </Form.Label>
                                <Form.Control
                                    name="quartos"
                                    type="text"
                                    value={values.quartos}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isValid={
                                        touched?.quartos && !errors.quartos
                                    }
                                    isInvalid={
                                        touched?.quartos && !!errors.quartos
                                    }
                                />
                                <Form.Control.Feedback>
                                    {errors?.quartos}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Col}>
                                <Form.Label>
                                    {" "}
                                    <strong>Banheiros</strong>{" "}
                                </Form.Label>
                                <Form.Control
                                    name="banheiros"
                                    type="text"
                                    value={values.banheiros}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isValid={
                                        touched?.banheiros && !errors.banheiros
                                    }
                                    isInvalid={
                                        touched?.banheiros && !!errors.banheiros
                                    }
                                />
                                <Form.Control.Feedback>
                                    {errors?.banheiros}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>

                        <Row className="mt-2">
                            <Form.Group as={Col} md={5}>
                                <Form.Label>
                                    {" "}
                                    <strong>Descrição</strong>{" "}
                                </Form.Label>
                                <Form.Control
                                    name="descricao"
                                    type="text"
                                    value={values.descricao}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isValid={
                                        touched?.descricao && !errors.descricao
                                    }
                                    isInvalid={
                                        touched?.descricao && !!errors.descricao
                                    }
                                />
                                <Form.Control.Feedback>
                                    {errors?.descricao}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Col} md={5}>
                                <Form.Label>
                                    {" "}
                                    <strong>Foto</strong>{" "}
                                </Form.Label>
                                <Form.Control
                                    name="foto"
                                    type="text"
                                    value={values.foto}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isValid={touched?.foto && !errors.foto}
                                    isInvalid={touched?.foto && !!errors.foto}
                                />
                                <Form.Control.Feedback>
                                    {errors?.foto}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Col} md={2}>
                                <Form.Label>
                                    {" "}
                                    <strong>Vagas na Garagem</strong>{" "}
                                </Form.Label>
                                <Form.Control
                                    name="vagasGaragem"
                                    type="text"
                                    value={values.vagasGaragem}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isValid={
                                        touched?.vagasGaragem &&
                                        !errors.vagasGaragem
                                    }
                                    isInvalid={
                                        touched?.vagasGaragem &&
                                        !!errors.vagasGaragem
                                    }
                                />
                                <Form.Control.Feedback>
                                    {errors?.vagasGaragem}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>

                        <div>
                            <h4 className="display-6">Endereço</h4>
                            <hr />
                        </div>
                        <Row>
                            <Form.Group as={Col} md={3}>
                                <Form.Label>
                                    {" "}
                                    <strong>CEP</strong>{" "}
                                </Form.Label>
                                <Form.Control
                                    name="endereco.cep"
                                    type="text"
                                    value={values.endereco?.cep}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isValid={
                                        touched?.endereco?.cep &&
                                        !errors.endereco?.cep
                                    }
                                    isInvalid={
                                        touched?.endereco?.cep &&
                                        !!errors.endereco?.cep
                                    }
                                />
                                <Form.Control.Feedback>
                                    {errors?.endereco?.cep}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md={3}>
                                <Form.Label>
                                    {" "}
                                    <strong>Logradouro</strong>{" "}
                                </Form.Label>
                                <Form.Control
                                    name="endereco.logradouro"
                                    type="text"
                                    value={values.endereco?.logradouro}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isValid={
                                        touched?.endereco?.logradouro &&
                                        !errors.endereco?.logradouro
                                    }
                                    isInvalid={
                                        touched?.endereco?.logradouro &&
                                        !!errors.endereco?.logradouro
                                    }
                                />
                                <Form.Control.Feedback>
                                    {errors?.endereco?.logradouro}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md={3}>
                                <Form.Label>
                                    {" "}
                                    <strong>Número</strong>{" "}
                                </Form.Label>
                                <Form.Control
                                    name="endereco.numero"
                                    type="text"
                                    value={values.endereco?.numero}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isValid={
                                        touched?.endereco?.numero &&
                                        !errors.endereco?.numero
                                    }
                                    isInvalid={
                                        touched?.endereco?.numero &&
                                        !!errors.endereco?.numero
                                    }
                                />
                                <Form.Control.Feedback>
                                    {errors?.endereco?.numero}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md={3}>
                                <Form.Label>
                                    {" "}
                                    <strong>Complemento</strong>{" "}
                                </Form.Label>
                                <Form.Control
                                    name="endereco.complemento"
                                    type="text"
                                    value={values.endereco?.complemento}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isValid={
                                        touched?.endereco?.complemento &&
                                        !errors.endereco?.complemento
                                    }
                                    isInvalid={
                                        touched?.endereco?.complemento &&
                                        !!errors.endereco?.complemento
                                    }
                                />
                                <Form.Control.Feedback>
                                    {errors?.endereco?.complemento}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>

                        <Row>
                            <Form.Group as={Col} md={4}>
                                <Form.Label>
                                    {" "}
                                    <strong>Bairro</strong>{" "}
                                </Form.Label>
                                <Form.Control
                                    name="endereco.bairro"
                                    type="text"
                                    value={values.endereco?.bairro}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isValid={
                                        touched?.endereco?.bairro &&
                                        !errors.endereco?.bairro
                                    }
                                    isInvalid={
                                        touched?.endereco?.bairro &&
                                        !!errors.endereco?.bairro
                                    }
                                />
                                <Form.Control.Feedback>
                                    {errors?.endereco?.bairro}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md={4}>
                                <Form.Label>
                                    {" "}
                                    <strong>Cidade</strong>{" "}
                                </Form.Label>
                                <Form.Control
                                    name="endereco.cidade"
                                    type="text"
                                    value={values.endereco?.cidade}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isValid={
                                        touched?.endereco?.cidade &&
                                        !errors.endereco?.cidade
                                    }
                                    isInvalid={
                                        touched?.endereco?.cidade &&
                                        !!errors.endereco?.cidade
                                    }
                                />
                                <Form.Control.Feedback>
                                    {errors?.endereco?.cidade}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md={3}>
                                <Form.Label>
                                    {" "}
                                    <strong>UF</strong>{" "}
                                </Form.Label>
                                <Form.Control
                                    name="endereco.UF"
                                    type="text"
                                    value={values.endereco?.UF}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isValid={
                                        touched?.endereco?.UF &&
                                        !errors.endereco?.UF
                                    }
                                    isInvalid={
                                        touched?.endereco?.UF &&
                                        !!errors.endereco?.UF
                                    }
                                />
                                <Form.Control.Feedback>
                                    {errors?.endereco?.UF}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>

                        <div>
                            <h4 className="display-6">Proprietário</h4>
                            <hr />
                        </div>
                        <Row>
                            <Form.Group as={Col}>
                                <Form.Label>
                                    {" "}
                                    <strong>Nome</strong>{" "}
                                </Form.Label>
                                <Form.Control
                                    name="proprietario.nome"
                                    type="text"
                                    value={values.proprietario?.nome}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isValid={
                                        touched?.proprietario?.nome &&
                                        !errors.proprietario?.nome
                                    }
                                    isInvalid={
                                        touched?.proprietario?.nome &&
                                        !!errors.proprietario?.nome
                                    }
                                />
                                <Form.Control.Feedback>
                                    {errors?.proprietario?.nome}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label>
                                    {" "}
                                    <strong>CPF</strong>{" "}
                                </Form.Label>
                                <Form.Control
                                    name="proprietario.CPF"
                                    type="text"
                                    value={values.proprietario?.CPF}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isValid={
                                        touched?.proprietario?.CPF &&
                                        !errors.proprietario?.CPF
                                    }
                                    isInvalid={
                                        touched?.proprietario?.CPF &&
                                        !!errors.proprietario?.CPF
                                    }
                                />
                                <Form.Control.Feedback>
                                    {errors?.proprietario?.CPF}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group as={Col}>
                                <Form.Label>
                                    {" "}
                                    <strong>Telefone</strong>{" "}
                                </Form.Label>
                                <Form.Control
                                    name="proprietario.telefone"
                                    type="text"
                                    value={values.proprietario?.telefone}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isValid={
                                        touched?.proprietario?.telefone &&
                                        !errors.proprietario?.telefone
                                    }
                                    isInvalid={
                                        touched?.proprietario?.telefone &&
                                        !!errors.proprietario?.telefone
                                    }
                                />
                                <Form.Control.Feedback>
                                    {errors?.proprietario?.telefone}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label>
                                    {" "}
                                    <strong>Email</strong>{" "}
                                </Form.Label>
                                <Form.Control
                                    name="proprietario.email"
                                    type="text"
                                    value={values.proprietario?.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isValid={
                                        touched?.proprietario?.email &&
                                        !errors.proprietario?.email
                                    }
                                    isInvalid={
                                        touched?.proprietario?.email &&
                                        !!errors.proprietario?.email
                                    }
                                />
                                <Form.Control.Feedback>
                                    {errors?.proprietario?.email}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>

                        <Form.Group className="text-end my-2">
                            <Button
                                type="submit"
                                variant="success"
                                className="me-2"
                            >
                                Enviar
                            </Button>
                            <Button onClick={handleReset}>Limpar</Button>
                        </Form.Group>
                    </Form>
                )}
            </Formik>
        </Pagina>
    );
}
