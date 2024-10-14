import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

export default function Pagina({ titulo, children }) {
    return (
        <>
            {/* barra de navegação */}
            <Navbar expand="lg" className="bg-dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="/">Home</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavDropdown
                                title="Formulários"
                                id="basic-nav-dropdown"
                            >
                                <NavDropdown.Item href="/formulario">
                                    Conversor de Moedas
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* barra de título  */}
            <div className="bg-secondary text-white text-center py-2">
                <h1 className="display-5">{titulo}</h1>
            </div>
            {/* conteúdo */}
            <Container className="my-3">{children}</Container>
        </>
    );
}
