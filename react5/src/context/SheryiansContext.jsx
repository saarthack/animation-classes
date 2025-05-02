import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'

export const SarthakContext = createContext()

const SheryiansContext = (props) => {

    const [tutorial, setTutorial] = useState('Context API')

    return (
        <div>
            <SarthakContext.Provider value={[tutorial,setTutorial]}>
                {props.children}
            </SarthakContext.Provider>
        </div>
    )
}

export default SheryiansContext