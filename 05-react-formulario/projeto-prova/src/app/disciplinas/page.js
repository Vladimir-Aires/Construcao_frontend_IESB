

"use client";

import Pagina from "@/components/Pagina";
import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { FaPenAlt, FaPlusCircle, FaTrash } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

export default function FaculdadesPage() {
    const [disciplinas, setDisciplinas] = useState([]);

    useEffect(() => {
        const disciplinasLocalStorage =
            JSON.parse(localStorage.getItem("disciplinas")) || [];
        setDisciplinas(disciplinasLocalStorage);
        console.log(disciplinasLocalStorage);
    }, []);

    // função para excluir um item
    function excluir(itemdisciplina){
        
        if(window.confirm(`Deseja realmente exluir a disciplina ${itemdisciplina.nome}?`)){
            const novaLista = disciplinas.filter(item => item.id !== itemdisciplina.id)

            localStorage.setItem('disciplinas', JSON.stringify(novaLista))

            setDisciplinas(novaLista)

            alert('Disciplina excluída com sucesso!')
        }
    }

    
    
    return (
        <Pagina titulo={"Lista de Disciplinas"}>
            <div className="text-end mb-2">
                <Button href="/disciplinas/form">
                    {" "}
                    <FaPlusCircle /> Novo
                </Button>
            </div>

            <Table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Descrição</th>
                        <th>Status</th>
                        <th>Curso</th>
                        <th>Professor</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {disciplinas.map((disciplina) => {
                        return (
                            <tr>
                                <td>{disciplina.nome}</td>
                                <td>{disciplina.descricao}</td>
                                <td>{disciplina.status}</td>
                                <td>{disciplina.curso}</td>
                                <td>{disciplina.professor}</td>
                                <td>
                                    {/* botões de ações */}

                                    <Button className="my-2" href={`/disciplinas/form?id=${disciplina.id}`} variant="warning"> <FaPenAlt /> </Button>
                                    <Button variant="danger" onClick={() => excluir(disciplina)}> <IoMdClose /> </Button>

                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </Pagina>
    );
}

