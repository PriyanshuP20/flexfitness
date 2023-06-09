import React from 'react'
import '../src/App.css';

//import Home from './Home'

import { Routes, Route, HashRouter } from "react-router-dom";
import LandingPage from './pages/landingPage';
import Video from './video/Video';

import Footer from './components/Footer';
import Exercise from './pages/Excersise';
import Form from '../src/components/Form';

import RoomPage from './video/Room/Room';
import Navbar from './components/reusable/Navbar';
import About from './pages/About.js';
import Contact from './pages/Contact.jsx';
import Login from './pages/Login';
import Foot from './components/reusable/Footer';
function App() {
  return (
    <>
    <HashRouter>
      <Routes>
        <Route path="/" element={< Navbar/>}> 
          <Route path="/" element={<LandingPage />} />
          <Route path="/video" element={<Video />} />
          <Route path="/exercise" element={<Exercise />} />
          <Route path="/room/:roomId" element={<RoomPage/>}></Route>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Login" element={<Login />} />
             <Route path="/Form" element={<Form />} />
        </Route>
      </Routes>
    </HashRouter>
    {/* <About/>
    <Contact/> */}
    <Foot />  
    {/* <Footer/>   */}
    </>
  )
}

export default App
