import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import GlobalContextComponent from './assets/COMPONENTS/context-concept/main.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <App />
   {/* <GlobalContextComponent>
  
   </GlobalContextComponent> */}
  </StrictMode>,
)
