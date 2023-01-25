import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Home/App';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { Certificados } from './Certificados/Certificados';
import { NavBar } from './NavBar/NavBar';
import { NotFoundPage } from './NotFoud';
import { Contacto } from './Contacto/Contacto';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='certificados' element={<Certificados/>}/>
        <Route path='contacto' element={<Contacto/>}/>
        <Route path='*' element={<NotFoundPage/>}/>
        </Routes>
    </BrowserRouter>
    
    
  </React.StrictMode>
);


