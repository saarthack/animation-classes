import React, { useRef } from 'react'
import {useGSAP} from '@gsap/react';
import gsap from 'gsap';

const App = () => {

  const boxRef = useRef(null)
  
  useGSAP(function(){
    gsap.to(boxRef.current,{
      x:700,
      duration:2,
      delay:1
    })
  })
  
  return (
    <div>
      <div ref={boxRef} className="box">

      </div>
    </div>
  )
}

export default App