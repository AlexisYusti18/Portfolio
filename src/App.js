import React from 'react';
import Home from './components/Home';
import './style/style.css'
import Navbar from './components/NavBar'
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import bgVideo from './video/video.mp4'

function App() {
  return (
    <>
      <video autoPlay loop muted src={bgVideo} type='video/mp4'/>
        <Navbar/>
        <Home/>
    </>
  );
}
export default App;
