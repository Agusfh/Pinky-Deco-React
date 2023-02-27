import React from 'react'
import CartWidget from './CartWidget';
import './NavBar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../assets/logo.jpg';
import { border } from '@chakra-ui/react';

function NavBar() {
  return (
    <>
    <Navbar expand="lg" className='barra'>
      <Container>
      <Navbar.Brand href="#home">
            <img
              alt=""
              src= {logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Pinky Deco
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Sale</Nav.Link>
            <Nav.Link href="#link">Cocina</Nav.Link>
            <NavDropdown title="Bazar" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Botellas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Mates
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Tazas</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <div container id='carro'>
        <CartWidget/>
      </div>
      </Container>
    </Navbar>
    </>
  );
}

export default NavBar;