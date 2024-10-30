"use client";

import Pagina from "@/components/Pagina";
import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { FaPen, FaPlusCircle, FaTrash } from "react-icons/fa";

export default function FaculdadesPage() {
    const [cursos, setCursos] = useState([]);

    useEffect(() => {
        const cursosLocalStorage =
            JSON.parse(localStorage.getItem("cursos")) || [];
        setCursos(cursosLocalStorage);
        console.log(cursosLocalStorage);
    }, []);

    // função para excluir um item
    function excluir(itemCurso){
        
        if(window.confirm(`Deseja realmente exluir o curso ${itemCurso.nome}?`)){
            const novaLista = cursos.filter(item => item.id !== itemCurso.id)

            localStorage.setItem('cursos', JSON.stringify(novaLista))

            setCursos(novaLista)

            alert('Curso excluído com sucesso!');
        }
    }
    
    return (
        <Pagina titulo={"Lista de Cursos"}>
            <div className="text-end mb-2">
                <Button href="/cursos/form">
                    {" "}
                    <FaPlusCircle /> Novo
                </Button>
            </div>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Área</th>
                        <th>Nota</th>
                        <th>Status</th>
                        <th>Faculdade</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {cursos.map((curso) => {
                        return (
                            <tr>
                                <td>{curso.nome}</td>
                                <td>{curso.area}</td>
                                <td>{curso.nota}</td>
                                <td>{curso.status}</td>
                                <td>{curso.faculdade}</td>
                                <td>
                                    {/* botões de ações */}

                                    <Button className="me-2" href={`/cursos/form?id=${curso.id}`}> <FaPen /> </Button>
                                    <Button variant="danger" onClick={() => excluir(curso)}> <FaTrash /> </Button>

                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </Pagina>
    );
}

