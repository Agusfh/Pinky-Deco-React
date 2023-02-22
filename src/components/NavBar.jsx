import React from 'react'
import CartWidget from './CartWidget';
import './NavBar.css';
import { Flex,Box,Spacer } from '@chakra-ui/react'

const NavBar = () => {
    return <>
    <div className='nav'>  
        <h1>PINKY DECO</h1>
        <div className='menu'>
            <button>Verano</button>
            <button>Cocina</button>
            <button>Deco</button>
            <button>Bazar</button>
        </div>
        <CartWidget/>
    </div>
        </>
};

export default NavBar;