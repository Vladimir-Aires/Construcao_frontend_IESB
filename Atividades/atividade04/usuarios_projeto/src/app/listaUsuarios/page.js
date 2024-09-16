'use client'

import { useEffect, useState } from "react";
import Pagina from "../components/Pagina";
import axios from 'axios';
import { Col, Row } from "react-bootstrap";
import Usuario from "../components/Usuario";


export default function page() {

  const [usuarios, setUsuarios] = useState([])

  useEffect(() => {
     BuscaAxios()
  }, [])

  async function BuscaAxios() {
    const busca = await axios.get('https://dummyjson.com/users');

    const resposta = busca.data.users;

    console.log(resposta);
    setUsuarios(resposta);
  }

  return (
    <>
      <Pagina titulo='Nossos Usuários'>
        <Row xm={1} sm={2} md={3}  className="">
          {usuarios.map(pessoa => {
            return(
              <Col className="py-2">
                <Usuario propUsuario={pessoa} />
              </Col>
            )
          })}

        </Row>

      </Pagina>
    </>
  )
}
