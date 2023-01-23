import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardWidget from './CartWidget';

const NavBar = () => {

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Deco Home</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#inicio">Inicio</Nav.Link>
          <Nav.Link href="#producto">Productos</Nav.Link>
          <Nav.Link href="#nosotros">Nosotros</Nav.Link>
          <Nav.Link href="#contacto">Contacto</Nav.Link>
        </Nav>
        <CardWidget/>
      </Container>
    </Navbar>
  );


};
export default NavBar;