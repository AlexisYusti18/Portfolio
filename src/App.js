import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './style/style.css'
import bgVideo from './video/video.mp4'
import Navbar from './components/NavBar'
import Home from './components/Home';
import Projects from './components/Projects.js';
import Technologies from './components/Technologies'
import Contact from './components/Contact';

export default function App() {
  return (
    <>
        <video autoPlay loop muted src={bgVideo} type='video/mp4'/>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/*' element={<Home/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/technologies' element={<Technologies/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
    </>
  );
}
