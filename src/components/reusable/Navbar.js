import './Navbar.css';
import { Outlet, Link } from "react-router-dom";
import logo from "C:/Users/priya/Desktop/flexfitness/src/image/logo.png";
import React, { useEffect, useState } from "react";

function Navbar() {

  const [scroll, setScroll] = useState(false)
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 100)
    })
  }, [])
  return (
    <>
      <nav id="navbar"  className={scroll ? "solid" : "transparent"}>
        <div class="nav-wrapper">

          <div class="logo">

            <Link to="/"><img class="navIcon" src={logo}/> </Link>
          </div>
          {/* <div class="logo">

            <Link to="/"><i class="fas fa-chess-knight"></i> FLEX FITNESS</Link>
          </div> */}


          <ul id="menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/excersise">Excersise</Link></li>
            <li><Link to="/video">Video</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/Login">Login/SignUp</Link></li>
           

          </ul>
        </div>
      </nav>


      {/* <div class="menuIcon" onClick={toggle}>
        <span class="icon icon-bars"></span>
        <span class="icon icon-bars overlay"></span>
      </div>
 

      <div class="overlay-menu"> 
        <ul id="menu">
          <li><Link to="/">Home</Link></li>
          <li><a href="#services">Services</a></li>
          <li><Link to="/search">Search</Link></li>
          <li><a href="#about">About</a></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div> */}
      <Outlet />
    </>
)
}

export default Navbar;

// function toggle(){

//       let menuIcon = document.querySelector('.menuIcon');
//       let nav = document.querySelector('.overlay-menu');
//           if (nav.style.transform != 'translateX(0%)') {
//               nav.style.transform = 'translateX(0%)';
//               nav.style.transition = 'transform 0.2s ease-out';
//           } else { 
//               nav.style.transform = 'translateX(-100%)';
//               nav.style.transition = 'transform 0.2s ease-out';
//           }


//       // Toggle Menu Icon ========================================
//       let toggleIcon = document.querySelector('.menuIcon');

//           if (toggleIcon.className != 'menuIcon toggle') {
//               toggleIcon.className += ' toggle';
//           } else {
//               toggleIcon.className = 'menuIcon';
//           }
      
 
// }

