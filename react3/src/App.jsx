// import React from 'react'
// import {motion} from 'framer-motion';

// const App = () => {
//   return (
//     <div>
//       <motion.div 
//       initial={{
//         x:0,
//         y:0
//       }}
//       animate={{
//         x:[0,650,650,0,0],
//         y:[0,0,300,300,0],
//         rotate:[0,360,0,-360,0]
//       }}
//       transition={{
//         duration:2,
//         delay:1
//       }}

//       className="box">

//       </motion.div>
//     </div>
//   )
// }

// export default App



import React, { useState } from 'react'
import {motion} from 'framer-motion';

const App = () => {

  const moveVariant = {
    start:{
      x:0,
      rotate:0,
      scale:1
    },
    end:{
      x:600,
      rotate:360,
      scale:1.2
    }
    
  }
  
  return (
    <div>
      <motion.div 
      variants={moveVariant}
      initial='start'
      animate='end'
      transition={{
        duration:2,
        delay:1,
        ease:'anticipate'
      }}

      className="box"></motion.div>
      <motion.div 
      variants={moveVariant}
      initial='start'
      animate='end'
      transition={{
        duration:2,
        delay:1,
        ease:'anticipate'
      }}
      className="circle"></motion.div>
    </div>
  )
}

export default App