import React from 'react'
import { createContext } from 'react'

export const MinisterContext = createContext()

const BhopalContext = ({ children }) => {


    const BhopalInstitute = ['Sheryians', 'LNCT', 'TITS']

    return (
        <div>
            <MinisterContext.Provider value={BhopalInstitute}>
            {children}     
            </MinisterContext.Provider>   
        </div>
    )
}

export default BhopalContext