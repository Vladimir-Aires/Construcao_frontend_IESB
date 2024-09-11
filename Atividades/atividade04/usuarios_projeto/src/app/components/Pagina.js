'use client'

import { Container, Nav, Navbar } from "react-bootstrap";

export default function Pagina(props) {
    return (
        <>
            <Navbar bg="light" data-bs-theme="light">
                <Container>
                    <Navbar.Brand href="/">Home</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/listaUsuarios">Lista de Usuários</Nav.Link>
                        <Nav.Link href="/usuarioDetalhes">Detalhes do Usuário</Nav.Link>
                        
                    </Nav>
                </Container>
            </Navbar>

            <div className="container-fluid bg-dark text-white text-center p-3">
                <h1 className="display-5">{props.titulo}</h1>
            </div>

            <Container>
                {props.children}
            </Container>

            
        </>
    );
}
