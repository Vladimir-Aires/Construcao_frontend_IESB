import { Card, ListGroup } from "react-bootstrap";

export default function Cliente(props) {
    const { nome, sobreNome, idade, imagem } = props.cliente;
    return (
        <Card>
            <Card.Img src={imagem}></Card.Img>
            <ListGroup variant="flush">
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
            </ListGroup>
        </Card>
    );
}
