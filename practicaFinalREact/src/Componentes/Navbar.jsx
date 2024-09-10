import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">MIS TAREAS</Navbar.Brand> 
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/AboutUs">About Us</Nav.Link> 
            <Nav.Link as={Link} to="/Contact">Contact</Nav.Link> 
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/action/3.1">Opcion 1</NavDropdown.Item> 
              <NavDropdown.Item as={Link} to="/action/3.2">Opcion 2</NavDropdown.Item> 
              <NavDropdown.Item as={Link} to="/action/3.3">=pcion3</NavDropdown.Item> 
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/action/3.4">Separated link</NavDropdown.Item> 
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavBar;