"use client";

import { CardImg, Col, Row, Table } from "react-bootstrap";
import apiSeries from "../../api/apiSeries";
import EstruturaPagina from "../../components/EstruturaPagina";
import { useEffect, useState } from "react";

export default function page(props) {
    const [serie, setSerie] = useState({});

    useEffect(() => {
        buscarSerie();
    }, []);

    async function buscarSerie() {
        const resultado = await apiSeries.get(
            "/tv/" + props.params.id + "?language=pt-BR"
        );

        console.log(resultado.data);
        setSerie(resultado.data);
    }
    return (
        <EstruturaPagina titulo={serie.name}>
            {serie.id && (
                <Row className="mb-3">
                    <Col md={3}>
                        <CardImg
                            src={
                                "https://image.tmdb.org/t/p/w500/" +
                                serie.poster_path
                            }
                        ></CardImg>
                    </Col>
                    <Col md={5}>
                        <Table className="table table-sm align-middle" hover>
                            <thead>
                              <tr>
                                <th className="w-25"></th>
                                <th></th>
                              </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><b>Lançamento:</b></td>
                                    <td>{serie.first_air_date}</td>
                                    
                                </tr>
                                <tr>
                                    <td><b>Nota:</b></td>
                                    <td>{serie.vote_average.toFixed(1)}</td>
                                    
                                </tr>
                                <tr>
                                    <td><b>Temporadas:</b></td>
                                    <td>{serie.number_of_seasons}</td>
                                    
                                </tr>
                                <tr>
                                    <td><b>Episódios:</b></td>
                                    <td>{serie.number_of_episodes}</td>
                                    
                                </tr>
                                <tr>
                                    <td><b>Gênero:</b></td>
                                    <td>{serie.genres.map((genero) => {
                                      return genero.name
                                    })}</td>
                                    
                                </tr>
                                <tr>
                                    <td><b>Sinopse:</b></td>
                                    <td>{serie.overview}</td>
                                    
                                </tr>
                                
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            )}
        </EstruturaPagina>
    );
}
