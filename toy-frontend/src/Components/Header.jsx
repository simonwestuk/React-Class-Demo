import React from 'react'
import {Navbar, Container, Nav,} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function Header() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Toy Shop</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link as={Link} to="/">Home</Nav.Link>
      <Nav.Link as={Link} to="/products">Products</Nav.Link>

      <Nav.Link as={Link} to="/locations">Locations</Nav.Link>
      
      <Nav.Link as={Link} to="/about">About Us</Nav.Link>
      <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
        </div>
    )
}

export default Header
