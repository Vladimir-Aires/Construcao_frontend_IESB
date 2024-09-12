"use client";

import apiFilmes from "../../api/apiFilmes";
import Pagina from "../../components/Pagina";
import { useEffect, useState } from "react";
import { CardImg, Col, Row } from "react-bootstrap";

export default function page(props) {
    const [filme, setFilme] = useState({});

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
        <Pagina titulo={filme.title}>
            {filme.id && (
                <Row>
                    {/* imagem filme */}
                    <Col md={3}>
                        <CardImg
                            src={
                                "https://image.tmdb.org/t/p/w500/" +
                                filme.poster_path
                            }
                        ></CardImg>
                    </Col>

                    {/* detalhes filme */}
                    <Col md={9}>
                        <p>
                            <b>Data de Lançamento:</b> {filme.release_date}
                        </p>
                        <p>
                            <b>Duração:</b> {filme.runtime}
                        </p>
                        <p>
                            <b>Orçamento:</b> {filme.revenue}
                        </p>
                        <p>
                            <b>Nota:</b> {filme.vote_average}
                        </p>
                        <p>
                            <b>Sinopse:</b> {filme.overview}
                        </p>
                        <p>
                            <b>Gêneros:</b>
                        </p>
                        <ul>
                            {filme.genres.map((item) => {
                                return <li>{item.name}</li>;
                            })}
                        </ul>
                    </Col>
                </Row>
            )}
        </Pagina>
    );
}
