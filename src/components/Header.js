import React from 'react'
import "../components/header.css"
import logo from "../image/logo.png"
export default function Header() {
  return (
    <div>
      <img className='logo' src={logo}/>
        <nav>
       
        <ul>
        <li> <a href="app.js">Home</a></li>
        <li> <a href="#">Exercises</a></li>
        <li> <a href="#">Contact</a></li>
        <li>< a href="#">About</a></li>
        <li className='member'>< a href="#">Become a member</a></li>
         </ul>
         </nav>
      
    </div>
  )
}
