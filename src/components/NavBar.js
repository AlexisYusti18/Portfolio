import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link as LinkRouter} from 'react-router-dom'
// eslint-disable-next-line
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'

export default function NavBar() {
  const pages = [{name:'Home', to:'/*'},{name:'Projects', to:'/projects'},{name:'Technologies and Tools', to:'/technologies'},{name:'Contact', to:'/contact'}]
  return (
    <Navbar bg="transparent" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {pages.map((item,index)=>(
              <LinkRouter to={item.to} key={index}>
                <button className='btn-nav' onClick={() => window.scrollTo({top:0,left: 0,behavior: 'smooth'})}>{item.name}</button>
              </LinkRouter>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}