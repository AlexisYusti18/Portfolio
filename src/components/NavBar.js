import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavBar() {
  return (
    <Navbar bg="transparent" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <p className='btn-nav'>Home</p>
            <p className='btn-nav'>Projects</p>
            <p className='btn-nav'>About Me</p>
            <p className='btn-nav'>Contact</p>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}