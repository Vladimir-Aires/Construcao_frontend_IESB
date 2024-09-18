'use client'

import { useEffect, useState } from "react";
import EstruturaPagina from "../components/EstruturaPagina";
import apiSeries from "../api/apiSeries";
import { Card, CardBody, CardImg, Col, Row } from "react-bootstrap";


export default function page() {

    const [series, setSeries] = useState([])

    useEffect(() => {
        buscaSeries();
    }, []);

    async function buscaSeries(){
        const consulta = await apiSeries.get("/tv/popular?language=pt-BR")
        console.log(consulta.data.results);

        const seriesRecebidas = consulta.data.results;

        setSeries(seriesRecebidas)
    }

  return (
    
        <EstruturaPagina titulo='Séries Populares'>
          <Row md={3} sm={2}>
            {series.map((serie) => {
              return(
                <Col className="py-3">
                  <Card style={{height: '100%'}}>
                   <Card.Img src={"https://image.tmdb.org/t/p/w500/" + 
serie.poster_path}/>

                   <Card.Body>
                    <Card.Title>
                      {serie.name}
                    </Card.Title>
                    <Card.Text>
                      <p>
                        Nota:{} <br />
                        Lançamento:{}
                      </p>
                      
                    </Card.Text>
                      
                    
                   </Card.Body>
                   <Card.Footer>

                   </Card.Footer>
                  </Card>
                
                
                </Col>
              )
            })}
          </Row>
            
        </EstruturaPagina>
    
  )
}
