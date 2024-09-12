"use client";

import { useEffect, useState } from "react";
import apiFilmes from "@/app/api/apiFilmes";
import Pagina from "@/app/components/Pagina";
import { Button, Card, Col, Row } from "react-bootstrap";

export default function page() {
    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        buscarFilmes();
    }, []);

    async function buscarFilmes() {
        const result = await apiFilmes.get("/movie/top_rated?language=pt-BR");
        console.log(result.data.results);

        const filmesRecebidos = result.data.results;
        setFilmes(filmesRecebidos);
    }

    return (
        <Pagina titulo="Melhores Avaliados">
            <Row md={4} sm={2}>
                {filmes.map((filme) => {
                    return (
                        <Col className="py-2">
                            <Card style={{ height: "100%" }}>
                                <Card.Img
                                    src={
                                        "https://image.tmdb.org/t/p/w500/" +
                                        filme.poster_path
                                    }
                                />
                                <Card.Body>
                                    <Card.Title>
                                        {filme.original_title}
                                    </Card.Title>
                                    <p>
                                        {" "}
                                        <b>Nota:</b> {filme.vote_average}{" "}
                                    </p>
                                </Card.Body>
                                <Card.Footer className="text-center">
                                    <Button href={"/filmes/" + filme.id}>
                                        Detalhes
                                    </Button>
                                </Card.Footer>
                            </Card>
                        </Col>
                    );
                })}
            </Row>
        </Pagina>
    );
}
