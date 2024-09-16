'use client'

import { Card, CardImg, ListGroup, ListGroupItem } from "react-bootstrap";


export default function Usuario({propUsuario}) {

    const {firstName, maidenName, lastName, age, image } = propUsuario;

  return (
    <Card>
        <CardImg src={image}/>
        <ListGroup>
            <ListGroupItem>Nome: {firstName} {maidenName} {lastName}</ListGroupItem>
            <ListGroupItem>Idade: {age} anos</ListGroupItem>
        </ListGroup>

    </Card>
  )
}
