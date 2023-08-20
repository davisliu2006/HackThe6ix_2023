import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function BasicExample() {
  return (
    <Navbar expand="lg" className="navbar-dark" style={{
        backgroundColor:"#3494f4",
        position: 'fixed',
        top: '0',
        width: '100%',
        zIndex:'1'
    }} >
      <Container>
        <Navbar.Brand href="/" style={{
            fontWeight:'bolder',
            fontSize:'30px'
        }}>GuideBot</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" style={{
                paddingLeft: '70px'
            }}>Home</Nav.Link>
            <Nav.Link href="/payments" style={{
                paddingLeft: '70px'
            }}>Purchase</Nav.Link>
            <Nav.Link href="/contacts" style={{
                paddingLeft: '70px'
            }}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;