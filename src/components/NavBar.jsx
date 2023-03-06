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
            
            <Navbar collapseOnSelect expand="lg" className='barra'>
      <Container>
        <div className='logotipo'>
        <Navbar.Brand>
      <img
              alt=""
              src= {logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}</Navbar.Brand>
         <Navbar.Brand>Pinky Deco</Navbar.Brand>

        </div>
      
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">Features</Nav.Link>
            <Nav.Link href="#action/3.1">Pricing</Nav.Link>
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

export default NavBar;