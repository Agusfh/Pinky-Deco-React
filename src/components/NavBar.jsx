import React from 'react'
import CartWidget from './CartWidget';
import './NavBar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../assets/logo.jpg';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <>
    <div className="container-fluid">
    <div className="row">
        <div className="col text-left d-none d-md-block"></div>
  <div className="col col-md-6 font-small text-center"> 10% OFF x transf. 3 y 6 CUOTAS SIN INTERÉS!</div>        
  <div className="col text-right d-none d-md-block">
          
          </div>
    </div>
</div>

<Navbar collapseOnSelect expand="lg" className='barra'>
      <Container>
      <Navbar.Brand as={NavLink} to='/'>
      <img
              alt=""
              src= {logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
          Pinky Deco</Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink}to="/category/Cocina">Cocina</Nav.Link>
            <Nav.Link as={NavLink}to="/category/Deco">Deco</Nav.Link>
            <Nav.Link as={NavLink}to="/category/Mates">Mates</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <div id='carro' className='carro'>
        <CartWidget/> 
      </div>
    </Navbar>
    </>
  );
}

export default NavBar;