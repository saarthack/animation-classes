import React from 'react'
import { useContext } from 'react';
import { SarthakContext } from '../context/SheryiansContext';
import { MinisterContext } from '../context/BhopalContext';

const Nav2 = () => {
  const data = useContext(SarthakContext)

  const bhopalData = useContext(MinisterContext)
  

  console.log(data);
  return (
    <div className='nav2'>
      <h1>{data}</h1>
      <h2>{bhopalData}</h2>
    </div>
  )
}

export default Nav2