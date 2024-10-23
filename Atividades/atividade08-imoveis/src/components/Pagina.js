import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

export default function Pagina({ children, titulo }) {
    return (
        <>
            {/* barra navegação */}
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                            <NavDropdown
                                title="Dropdown"
                                id="basic-nav-dropdown"
                            >
                                <NavDropdown.Item href="#action/3.1">
                                    Action
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
