'use client'

import { Col, Image, ListGroup } from "react-bootstrap";

export default function DetalheUsuario({detailUsuario}) {

    const {firstName, maidenName, lastName, age, image, email, phone, gender, birthDate, university } = detailUsuario;
  return (
    <>
    <Col sm={3}>
    <img src={image}></img>
    </Col>
    <Col sm={6}>
    <ListGroup variant="flush">
      <ListGroup.Item>Nome: {firstName} {maidenName} {lastName}</ListGroup.Item>
      <ListGroup.Item>Idade: {age} anos</ListGroup.Item>
      <ListGroup.Item>Gênero: {gender}</ListGroup.Item>
      <ListGroup.Item>Email: {email}</ListGroup.Item>
      <ListGroup.Item>Telefone: {phone}</ListGroup.Item>
      <ListGroup.Item>Data de nascimento: {birthDate}</ListGroup.Item>
      <ListGroup.Item>Universidade: {university}</ListGroup.Item>
    </ListGroup>
    </Col>
    </>
    
  )
}
