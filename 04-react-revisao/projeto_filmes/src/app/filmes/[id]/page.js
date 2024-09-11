"use client";

import apiFilmes from "../../api/apiFilmes";
import Pagina from "../../components/Pagina";
import { useEffect, useState } from "react";
import { CardImg, Col, Row } from "react-bootstrap";

export default function page(props) {
    const [filme, setFilme] = useState();

    useEffect(() => {
        buscarFilme();
    }, []);

    async function buscarFilme() {
        const resultado = await apiFilmes.get(
            "/movie/" + props.params.id + "?language=pt-BR"
        );
        console.log(resultado.data);
        setFilme(resultado.data);
    }

    return (
        <Pagina titulo="Detalhes do Filme">
            {filme.id && (
                <Row>
                    {/* imagem filme */}
                    <Col>
                        <CardImg
                            src={
                                "https://image.tmdb.org/t/p/w500/" +
                                backdrop_path
                            }
                        ></CardImg>
                    </Col>

                    {/* detalhes filme */}
                    <Col></Col>
                </Row>
            )}
        </Pagina>
    );
}
