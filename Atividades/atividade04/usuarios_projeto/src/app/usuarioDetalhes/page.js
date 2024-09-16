'use client'

import { useEffect, useState } from "react";
import Pagina from "../components/Pagina";
import axios from "axios";
import { Row } from "react-bootstrap";
import DetalheUsuario from "../components/DetalheUsuario";


export default function page() {

  const [usuario, setUsuario] = useState({})

  useEffect(() => {
      buscaAxios()
  }, [])

  async function buscaAxios() {

    const idAleatorio = Math.round(Math.random() * 30)
    const busca = await axios.get(`https://dummyjson.com/users/${idAleatorio}`)

    const resposta = busca.data;
    console.log(resposta)
    setUsuario(resposta)
  }
  return (
    <Pagina titulo='Detalhes do Usuário'>
        <Row className="mt-3">
          <DetalheUsuario detailUsuario={usuario}/>
        </Row>
    </Pagina>
  )
}
