import React from 'react'
import '../src/App.css';
//import Home from './Home'

import { Routes, Route, HashRouter } from "react-router-dom";
import LandingPage from './components/landingPage';
import Footer from './components/Footer';
import Conatct from './components/Conatct';
import About from './components/About';
import {Routes, Route, HashRouter} from "react-router-dom";


function App() {
  return (
    <>
    <HashRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}> 
          <Route path="/" element={<LandingPage />} />
          {/* <Route path="/services" element={<Search />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Login" element={<Login />} /> */}
        </Route>
      </Routes>
    </HashRouter>
   
    </>
  )
}

export default App

