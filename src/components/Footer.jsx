
import React from 'react'
import { Container } from 'react-bootstrap'
import './Footer.css'
import medios from '../assets/medios.png'


function Footer (){
return (

    <>
    <div className='info'>

    <div className='redes'>
        <h4>Nuestras Redes</h4>

            <a href=""><i class="fa-brands fa-facebook"></i></a>
            <a href=""><i class="fa-brands fa-instagram"></i></a>
            <a href=""><i class="fa-brands fa-whatsapp"></i></a>

    </div>
    
    <div className='contacto'>

        <h4>Contacto</h4>
            <p>Por cualquier consulta escribinos a: hola@PinkyDeco.com.ar</p>
        </div>

        <div className="pagos">

    <h4>Medios de Pago</h4>

        <img className='pago' src= {medios} />

        </div>

    </div>
    
    </>
)
}

export default Footer