import React from 'react'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container } from 'react-bootstrap';
function Navigation() {
    return (
<Container>
<Navbar sticky="top" collapseOnSelect expand="lg" bg="light" variant="light">
  <Navbar.Brand href="#home">DIGITAL FLY SOLUTONS</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#services">OUR SERVICES</Nav.Link>
      <Nav.Link href="#profile">PROFILE</Nav.Link>
      <Nav.Link href="#contact">Contact</Nav.Link>
    </Nav>
    <Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-primary">Search</Button>
    </Form>
    </Nav>
  </Navbar.Collapse>
</Navbar>
</Container>
    )
}

export default Navigation


