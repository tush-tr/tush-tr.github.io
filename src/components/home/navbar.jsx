import { Navbar, Container, Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css'
const Navbarcom = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="bg-nav">
            <Container>
                <Navbar.Brand href="/#/">Tushar Rajpoot</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav id="navitems" className="ms-auto">
                        <Nav.Link href="/#/">Home</Nav.Link>
                        <Nav.Link href="/#/resume">Resume </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default Navbarcom;