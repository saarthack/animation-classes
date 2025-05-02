import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import SheryiansContext from './context/SheryiansContext.jsx'
import BhopalContext from './context/BhopalContext.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BhopalContext>
      <SheryiansContext>
        <App />
      </SheryiansContext>
    </BhopalContext>
  </StrictMode>,
)
