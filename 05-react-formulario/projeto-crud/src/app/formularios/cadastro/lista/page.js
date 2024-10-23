"use client";

import Pagina from "@/components/Pagina";
import { Table } from "react-bootstrap";

export default function page() {
    const alunos = JSON.parse(localStorage.getItem("alunos")) || [];

    console.log(alunos);

    return (
        <Pagina titulo="Lista de Alunos">
            <Table>
                <thead>
                    <tr>
                        <th>Matrícula</th>
                        <th>Nome</th>
                        <th>Foto</th>
                    </tr>
                </thead>
                <tbody>
                    {alunos.map((aluno) => (
                        <tr>
                            <td>{aluno.matricula}</td>
                            <td>{aluno.nome}</td>
                            <td>
                                <img src={aluno.foto} width={58} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Pagina>
    );
}
