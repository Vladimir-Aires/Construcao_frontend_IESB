"use client";

import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

export default function BarraNavegacao() {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Início</Nav.Link>

                            <NavDropdown title="Séries" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/series">
                                    Populares
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/series/melhores">
                                    Melhores Avaliadas
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/series/hojenatv">
                                    Hoje na TV
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/series/hoje">
                                    Em Exibição
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}
