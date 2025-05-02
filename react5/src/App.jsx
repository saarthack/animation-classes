import React from 'react'
import Header from './components/Header'
import { useContext } from 'react'
import { SarthakContext } from './context/SheryiansContext'

const App = () => {

  const data = useContext(SarthakContext)

  return (
    <div>
      <Header />
    </div>
  )
}

export default App