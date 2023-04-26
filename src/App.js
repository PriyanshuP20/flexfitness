import React from 'react'
import '../src/App.css';
//import Home from './Home'

import { Routes, Route, HashRouter } from "react-router-dom";
import LandingPage from './components/landingPage';
import Video from './video/Video';
import Header from './components/Header';
import Footer from './components/Footer';
import Exercise from './components/Excersise';




function App() {
  return (
    <>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Header />}> 
          <Route path="/" element={<LandingPage />} />
          <Route path="/video" element={<Video />} />
          <Route path="/exercise" element={<Exercise />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
          {/* <Route path="/Login" element={<Login />} /> */}
        </Route>
      </Routes>
    </HashRouter>
    
    <Footer/>  
    </>
  )
}

export default App

