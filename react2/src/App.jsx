// import React, { useRef, useState } from 'react'
// import {useGSAP} from '@gsap/react';
// import gsap from 'gsap';

// const App = () => {



//   const [x, setX] = useState(0)
//   const [y, setY] = useState(0)

//   const boxRef = useRef(null)

//   useGSAP(function(){
//     gsap.to(boxRef.current,{
//       x:x,
//       y:y
//     })
//   },[x,y])



//   return (
//     <div>
//       <div ref={boxRef} className="box"></div>
//       <button onClick={()=>{
//         setX(x+100)

//       }}>MoveX</button>
//       <button onClick={()=>{
//         setY(y+100)

//       }}>MoveY</button>
//     </div>
//   )
// }

// export default App


import React, { useRef } from 'react'

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Lenis from 'lenis';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const App = () => {

  gsap.registerPlugin(ScrollTrigger)

  const boxRef = useRef(null)

  // Initialize Lenis
  const lenis = new Lenis({
    autoRaf: true,
  });

  // Listen for the scroll event and log the event data
  lenis.on('scroll', (e) => {
    console.log(e);
  });

  useGSAP(function () {
    gsap.from(boxRef.current, {
      scale: 0,
      rotate: 360,
      duration: 2,
      scrollTrigger: {
        trigger: boxRef.current,
        markers: true,
        start: 'top 60%'
      }
    })
  })

  return (
    <div>
      <div className="page1"></div>
      <div className="page2">
        <div ref={boxRef} className="box"></div>
      </div>
      <div className="page3"></div>
    </div>
  )
}

export default App