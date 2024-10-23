'use client'
import { Formik } from "formik";
import Pagina from "../../../components/Pagina";
import { Form, Row } from "react-bootstrap";


export default function ImoveisPage() {

  const initialValues = {
    tipo: '',
    finalidade: '',
    valor: '',
    area: '',
    quartos: '',
    banheiros: '',
    descricao: '',
    foto: '',
    vagasGaragem: '',
    endereco: {
      cep: '',
      logradouro: '',
      numero: '',
      complemento: '',
      bairro: '',
      cidade: '',
      UF: ''
    },
    proprietario:{
      nome: '',
      CPF: '',
      telefone: '',
      email: ''
    } 

  }
  const validationSchema = 0

  function cadastro(imovel){

  }

  return (
    <Pagina titulo={'Cadastro de Imóveis'}>

      {/* formulário */}
      <Formik
        onSubmit={cadastro}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >

        {({values, errors, touched, handleChange, handleReset, handleSubmit, handleBlur}) => (
          <Form>
              <div>
                <h3 className="display-6">Dados do Imóvel</h3>
              </div>
              <Row>
                <Form.Group>
                  <Form.Label> <strong>Tipo</strong> </Form.Label>
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
                </Form.Group>
              </Row>


          </Form>
        )}

      </Formik>
    </Pagina>
  )
}
