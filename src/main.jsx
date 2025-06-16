import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Mousetracker from './components/Mousetracker/Mousetracker.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Mousetracker>
    <App />
     </Mousetracker>
  </StrictMode>,
)
