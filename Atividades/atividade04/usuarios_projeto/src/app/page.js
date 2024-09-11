import { Col, Container, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import Pagina from "./components/Pagina";

export default function page() {
    return (
        <>
            <Pagina titulo='Página Principal'>
                <h1 className="display-5">Título qualquer</h1>
                <Container>
                    <Row>
                        <Col>
                            <ListGroup>
                                <ListGroupItem>Item 1</ListGroupItem>
                                <ListGroupItem>Item 1</ListGroupItem>
                            </ListGroup>
                        </Col>
                    </Row>
                </Container>
            </Pagina>
        </>
    );
}
