



'use client'

import { useEffect, useState } from "react";
import EstruturaPagina from "../../components/EstruturaPagina";
import apiSeries from "../../api/apiSeries";
import { Button, Card, Col, Row } from "react-bootstrap";


export default function page() {

    const [series, setSeries] = useState([])

    useEffect(() => {
        buscaSeries();
    }, []);

    async function buscaSeries(){
        const consulta = await apiSeries.get("/tv/airing_today?language=pt-BR")
        console.log(consulta.data.results);

        const seriesRecebidas = consulta.data.results;

        setSeries(seriesRecebidas)
    }

  return (
    
        <EstruturaPagina titulo='Séries na TV'>
          <Row md={3} sm={2}>
            {series.map((serie) => {
              return(
                <Col className="py-3">
                  <Card style={{height: '100%'}}>
                   <Card.Img src={"https://image.tmdb.org/t/p/w500/" + 
serie.poster_path}/>

                   <Card.Body>
                    <Card.Title>
                      <h4>{serie.name}</h4>
                      
                    </Card.Title>
                    <Card.Text>
                      <p>
                        <b>Nota:</b> {serie.vote_average} <br />
                        <b>Lançamento:</b> {serie.first_air_date}
                      </p>
                      
                    </Card.Text>
                      
                    
                   </Card.Body>
                   <Card.Footer className="text-center">
                      <Button href={'/filmes/' + serie.id} className="bg-info border border-0">Detalhes</Button>
                   </Card.Footer>
                  </Card>
                
                
                </Col>
              )
            })}
          </Row>
            
        </EstruturaPagina>
    
  )
}
