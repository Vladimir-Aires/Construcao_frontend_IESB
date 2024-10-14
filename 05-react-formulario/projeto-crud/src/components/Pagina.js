"use client";

import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

export default function Pagina(props) {
    return (
        <>
            {/* barra navegação */}
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="/">Home</Navbar.Brand>
                    <Nav className="me-auto">
                        <NavDropdown title="Formulários" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/formularios/nome">
                                Nome
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/formularios/imc">
                                Calculadora de IMC
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/formularios/imcformik">
                                Calculadora de IMC Formik
                            </NavDropdown.Item>
                            
                        </NavDropdown>
                    </Nav>
                </Container>
            </Navbar>

            {/* Barra título */}
            <div className="text-center bg-secondary text-white py-2">
                <h1 className="display-5">{props.titulo}</h1>
            </div>

            {/* Conteúdo */}

            <Container className="mt-2">{props.children}</Container>
        </>
    );
}
