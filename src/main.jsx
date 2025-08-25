import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route} from "react-router-dom"
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/Tic-Tac-Toe/">
    <Routes>
      <Route path="*" element = {<App/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
