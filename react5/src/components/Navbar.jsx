import React from 'react'
import { useContext } from 'react';
import { SarthakContext } from '../context/SheryiansContext';

const Navbar = () => {

    const [data,setData] = useContext(SarthakContext)

    
    return (

        <div className="nav">
            <h1>{data}</h1>
        <button onClick={()=>{
            setData('Redux Toolkit')
        }}>Click</button>
        </div>
    )
}

export default Navbar