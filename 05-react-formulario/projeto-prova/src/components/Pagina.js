'use client'

import { Container, Nav, Navbar} from "react-bootstrap";

export default function Pagina({ children, titulo }) {
    return (
        <>
            {/* barra navegação */}
            <Navbar className="bg-dark" data-bs-theme='dark'>
                <Container>
                    <Navbar.Brand href="/">Home</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/faculdades">Faculdades</Nav.Link>
                        <Nav.Link href="/cursos">Cursos</Nav.Link>
                        <Nav.Link href="/disciplinas">Disciplinas</Nav.Link>
                        <Nav.Link href="/professores">Professores</Nav.Link>
                        <Nav.Link href="/alunos">Alunos</Nav.Link>
                    </Nav>
                    
                </Container>
            </Navbar>

            {/* titulo */}
            <div className="text-center text-white bg-secondary py-2">
                <h1 className="display-5">{titulo}</h1>
            </div>

            {/* conteúdo */}
            <Container className="mt-2">{children}</Container>
        </>
    );
}
