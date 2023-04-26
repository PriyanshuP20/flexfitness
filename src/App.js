import React from 'react'
import '../src/App.css';
//import Home from './Home'

import { Routes, Route, HashRouter } from "react-router-dom";
import LandingPage from './components/landingPage';
import Video from './video/Video';
import Header from './components/Header';
import RoomPage from './video/Room/Room';


function App() {
  return (
    <>
    <HashRouter>
      {/* <LandingPage/> */}
      <Routes>

        <Route path="/" element={<Header />}> 
          <Route path="/" element={<LandingPage />} />
          <Route path="/video" element={<Video />} />
          <Route path="/room/:roomId" element={<RoomPage/>}></Route>
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
          {/* <Route path="/Login" element={<Login />} /> */}
        </Route>
      </Routes>
    </HashRouter>
    
    {/* <Foot />      */}
    </>
  )
}

export default App
