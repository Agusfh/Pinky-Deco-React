import React from 'react'
import CartWidget from './CartWidget';
import './NavBar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logo.jpg';
import { border } from '@chakra-ui/react';

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
            
    <Navbar expand="lg" className='barra'>
        
      <Container>
        
      <Navbar.Brand href="#home">
            <img
              alt=""
              src= {logo} 
              width="55"
              height="55"
              className="d-inline-block align-top"
            />{' '}
          </Navbar.Brand>
          <Navbar.Brand href="#home" className='text'>Pinky Deco</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#bazar">Bazar</Nav.Link>
            <Nav.Link href="#deco">Deco</Nav.Link>
            <Nav.Link href="#mates">Mates</Nav.Link>
            <Nav.Link href="#nosotros">Nosotros</Nav.Link>
          </Nav>
        <div id='carro'>
        <CartWidget/> 
      </div>
      </Container>
    </Navbar>
    </>
  );
}

export default NavBar;