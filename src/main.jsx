import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/Tic-Tac-Toe/">
    <Routes>
      <Route path="*" element = {<App/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
