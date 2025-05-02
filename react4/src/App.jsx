import React, { useEffect } from 'react'
import {motion} from 'framer-motion';

import {useScroll} from 'framer-motion';


const App = () => {

  const scrollYProgress = useScroll().scrollYProgress
  
  return (
    <div>
      <div className="page1">
        <motion.div 
        style={{
          scaleX:scrollYProgress
        }}
        className="line"
        ></motion.div>

        <motion.div 
        
        className="hero">

        </motion.div>
      </div>
      <div className="page1">
        
      </div>
      <div className="page1"></div>
    </div>
  )
}

export default App