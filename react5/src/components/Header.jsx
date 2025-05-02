import React from 'react'
import Navbar from './Navbar'
import Nav2 from './Nav2'
import { useContext } from 'react'
import { SarthakContext } from '../context/SheryiansContext'

const Header = () => {


    const data = useContext(SarthakContext)

    console.log(data);

    return (
        <div className='header'>
            
            <Navbar />
            <Nav2 />
        </div>
    )
}

export default Header