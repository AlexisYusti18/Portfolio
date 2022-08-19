import React, {useState,useEffect} from 'react';
import { Route, Routes } from 'react-router-dom';
import './style/style.css'
import bgVideo from './video/video.mp4'
import Navbar from './components/NavBar'
import Home from './components/Home';
import Projects from './components/Projects.js';
import Technologies from './components/Technologies'
import Contact from './components/Contact';
import CircleLoader from "react-spinners/CircleLoader";

export default function App() {
  const [loading,setLoading]= useState(false)

  useEffect(()=>{
    setLoading(true)
    setTimeout(false)

    setTimeout(()=>{
      setLoading(false)

    },2000)
  },[])

  return (
    <>
      <video autoPlay loop muted src={bgVideo} type='video/mp4'/>
      {loading ?
        <div className='ctn-loader'>
          <CircleLoader color={'#fff'} loading={loading} size={150} align='center'/>
        </div>
        :
          <>
            <Navbar/>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/*' element={<Home/>}/>
              <Route path='/projects' element={<Projects/>}/>
              <Route path='/technologies' element={<Technologies/>}/>
              <Route path='/contact' element={<Contact/>}/>
            </Routes>
          </>}
    </>
  );
}
