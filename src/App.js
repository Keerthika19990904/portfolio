import React from 'react';
import "./App.css"
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact';
import Header from './Component/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Navbar/>}>
      <Route index element={<Home/>}/>
      <Route path="About" element={<About/>}/>
      <Route path="Contact" element={<Contact/>}/>
      <Route path="Header" element={<Header/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </div>
    
  );
}

