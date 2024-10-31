

"use client";

import Pagina from "@/components/Pagina";
import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { FaPenAlt, FaPlusCircle, FaTrash } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

export default function FaculdadesPage() {
    const [alunos, setAlunos] = useState([]);

    useEffect(() => {
        const alunosLocalStorage =
            JSON.parse(localStorage.getItem("alunos")) || [];
        setAlunos(alunosLocalStorage);
        console.log(alunosLocalStorage);
    }, []);

    // função para excluir um item
    function excluir(itemAluno){
        
        if(window.confirm(`Deseja realmente remover o aluno ${itemAluno.nome}?`)){
            const novaLista = alunos.filter(item => item.id !== itemAluno.id)

            localStorage.setItem('alunos', JSON.stringify(novaLista))

            setAlunos(novaLista)

            alert('Aluno removido com sucesso!')
        }
    }

    
    
    return (
        <Pagina titulo={"Lista de Alunos"}>
            <div className="text-end mb-2">
                <Button href="/alunos/form">
                    {" "}
                    <FaPlusCircle /> Novo
                </Button>
            </div>

            <Table striped bordered hover>
                <thead>
                    <tr className="text-center">
                        <th>Foto</th>
                        <th>Matrícula</th>
                        <th>Nome</th>
                        <th>Sobrenome</th>
                        <th>Faculdade</th>
                        <th>Curso</th>
                        <th>Período</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {alunos.map((aluno) => {
                        return (
                            <tr>
                                <td>
                                    <img src={aluno.foto} width={60} className="rounded"/>
                                </td>
                                <td>{aluno.matricula}</td>
                                <td>{aluno.nome}</td>
                                <td>{aluno.sobrenome}</td>
                                <td>{aluno.faculdade}</td>
                                <td>{aluno.curso}</td>
                                <td>{aluno.periodo}</td>
                                <td>
                                    {/* botões de ações */}

                                    <Button className="my-2 mx-2" href={`/alunos/form?id=${aluno.id}`} variant="warning"> <FaPenAlt /> </Button>
                                    <Button variant="danger" onClick={() => excluir(aluno)}> <IoMdClose /> </Button>

                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </Pagina>
    );
}

