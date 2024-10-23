import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

export default function Pagina({ children, titulo }) {
    return (
        <>
            {/* barra navegação */}
            <Navbar expand="lg" className="bg-dark" data-bs-theme='dark'>
                <Container>
                    <Navbar.Brand href="/">Home</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                           
                            <NavDropdown
                                title="Formulários"
                                id="basic-nav-dropdown"
                            >
                                <NavDropdown.Item href="/formularios/imoveis">
                                    Cadastrar Imóvel
                                </NavDropdown.Item>
                                
                                
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
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
