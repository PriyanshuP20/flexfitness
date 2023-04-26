import React from 'react'
import "../components/header.css"
import logo from "../image/logo.png"

import { Outlet, Link } from "react-router-dom";

export default function Header() {
  return (
    
      
        <nav>
        <li><img className='logo' src={logo}/></li>
        <ul>
        
        <li> <Link to="/">Home</Link></li>
        <li> <Link to="/video">Videos</Link></li>
        <li> <Link to="/exercise">Exercise</Link></li>
        <li> <a href="#">Contact</a></li>
        <li>< a href="#">About</a></li>
        <li className='member'>< a href="#">Become a member</a></li>
         </ul>
         <Outlet />
         </nav>
         
      
  )
}
