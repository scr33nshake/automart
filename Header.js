import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="/">AutoMart</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/todaysdeals">Today's Deals</Nav.Link>
            <Nav.Link href="/support">Help & Support</Nav.Link>
            <Nav.Link href="/app">Download app</Nav.Link>

            <NavDropdown title="En" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">বাংলা</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Chinese</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Spanish</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#" disabled>Become a Seller</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/signup">Sign Up</Nav.Link>
            <Nav.Link href="/cart">My Cart</Nav.Link>

          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;