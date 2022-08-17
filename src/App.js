import React from 'react';
import Home from './components/Home';
import './style/style.css'
import Navbar from './components/NavBar'
import bgVideo from './video/video.mp4'
import Projects from './components/Projects.js';
import { Route, Routes } from 'react-router-dom';
import Technologies from './components/Technologies'

function App() {
  return (
    <>
      <video autoPlay loop muted src={bgVideo} type='video/mp4'/>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/*' element={<Home/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/technologies' element={<Technologies/>}/>
        </Routes>
    </>
  );
}
export default App;
