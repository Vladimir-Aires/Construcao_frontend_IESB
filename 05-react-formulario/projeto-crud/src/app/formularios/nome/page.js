"use client";

import Pagina from "@/components/Pagina";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { FaCalendarCheck } from "react-icons/fa";
import { IoTrashBin } from "react-icons/io5";

export default function FormulariosNomePage() {
    const [nome, setNome] = useState();
    const [email, setEmail] = useState();

    function handleNome(evento) {
        
        setNome(evento.target.value);
    }

    function handleEmail(evento) {
       
        setEmail(evento.target.value)
    }

    function submit(evento){
        evento.preventDefault()
        console.log(nome, email)
    }

    function reset(){
        console.log("Chamou para limpar???")
        setNome('')
        setEmail('')
    }

    return (
        <Pagina titulo={"Formulário Nome"}>
            <div>
                <h2>Seu nome é: {nome}</h2>
                <h2>Seu email é: {email}</h2>
            </div>
            <Form onSubmit={submit}>
                <Form.Group className="mb-2">
                    <Form.Label>Nome:</Form.Label>
                    <Form.Control
                        type="text"
                        name="nome"
                        placeholder="Nome completo"
                        value={nome}
                        onChange={handleNome}
                    />
                    <Form.Text>Informe o nome</Form.Text>
                </Form.Group>
                <Form.Group className="mb-2">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleEmail}
                    />
                    <Form.Text>Informe o seu email</Form.Text>
                </Form.Group>

                <Button type="submit"> <FaCalendarCheck /> Enviar</Button>
                <Button onClick={reset}> <IoTrashBin /> Limpar</Button>
            </Form>
        </Pagina>
    );
}
