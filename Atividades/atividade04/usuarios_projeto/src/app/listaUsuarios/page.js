'use client'

import { useEffect, useState } from "react";
import Pagina from "../components/Pagina";
import axios from 'axios';


export default function page() {

  const [usuarios, setUsuarios] = useState([])

  useEffect(() => {
     BuscaAxios()
  }, [])

  async function BuscaAxios() {
    const busca = await axios.get('https://dummyjson.com/users');

    const resposta = busca.data.users;

    console.log(resposta);
    // setUsuarios(resposta.data.users);
  }

  return (
    <>
      <Pagina titulo='Nossos Usuários'>
        

      </Pagina>
    </>
  )
}
