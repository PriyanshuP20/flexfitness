import React from 'react'
import Eprop from '../components/reusable/Eprop'
import './exercise.css'
import { Outlet, Link } from "react-router-dom";

export default function Excersise() {
    return (
  
      <div>
                    
            <div >
                <section class="hero">
                
                <div class="hero-info">
                    <span class="hero-subtitle">
                    Unsure about what excersises to do?
                    </span>
                    <h1 class="hero-title">
                    WE GOT YOU COVERED
                    </h1>
                    <small class="hero-description">
                    Scroll down to check our collection of detailed excersises.
                    </small>
                    <div class="hero-social">
                    <a href="#" class="social vk-bg">
                        <i class="fab fa-vk"></i>
                    </a>
                    <a href="#" class="social facebook-bg">
                        <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" class="social instagram-bg">
                        <i class="fab fa-instagram"></i>
                    </a>
                    <a href="#" class="social behance-bg">
                        <i class="fab fa-behance"></i>
                    </a>
                    </div>
                    <br/>
                    <small class="hero-description">
                    Contact or register for more.
                    </small>
                    <div class="hero-buttons">
                    <Link to="/contact" class="button button-primery">Contact</Link>
                    <Link to="/login" class="button button-o">Register</Link>
                   
                    </div>
                </div>
                </section>
            </div>
            
            <div id="parallax-world-of-ugg">
  
                <section>
                    <div class="title">
                        <h3>ExcersiseS FOR</h3>
                        <h1>YOU</h1>
                    </div>
                </section>

                <section>
                    <div class="parallax-one">
                    
                    <div class="mid">
                        <Eprop img=<img src='https://d205bpvrqc9yn1.cloudfront.net/0001.gif' alt='Loading...'/>
                            name = "3/4 Sit-Up" des="Exercises keep you strong. 3/4 Sit-Up bup is one of the best
                        exercises to target your abs. It will help you improve your
                        mood and gain energy."  />

                        <Eprop img=<img src='https://d205bpvrqc9yn1.cloudfront.net/0002.gif'alt='Loading...'/>name="45° Side Bend" des="Exercises keep you strong. 45° Side Bend bup is one of the best
                        exercises to target your abs. It will help you improve your
                        mood and gain energy."/> 

                        <Eprop img=<img src='https://d205bpvrqc9yn1.cloudfront.net/0003.gif'alt='Loading...'/>name="Air Bike" des="Exercises keep you strong. Air Bike bup is one of the best
                        exercises to target your abs. It will help you improve your
                        mood and gain energy."/> 
                   </div>
                    
                   <div class="mid">
                        <Eprop img=<img src='http://d205bpvrqc9yn1.cloudfront.net/1512.gif' alt='Loading...'/>name="All Fours Squad" des="Exercises keep you strong. 3/4 Sit-Up bup is one of the best
                        exercises to target your abs. It will help you improve your
                        mood and gain energy."  />

                            <Eprop img=<img src='http://d205bpvrqc9yn1.cloudfront.net/0006.gif'alt='Loading...'/>name="Alternate Heel Toucher" des="Exercises keep you strong. 45° Side Bend bup is one of the best
                            exercises to target your abs. It will help you improve your
                            mood and gain energy."/> 

                            <Eprop img=<img src='http://d205bpvrqc9yn1.cloudfront.net/0007.gif'alt='Loading...'/>name="Alternate Lateral Pulldown" des="Exercises keep you strong. Air Bike bup is one of the best
                            exercises to target your abs. It will help you improve your
                            mood and gain energy."/> 
                    </div>

                    
                    <div class="mid">
                        <Eprop img=<img src='http://d205bpvrqc9yn1.cloudfront.net/1368.gif' alt='Loading...'/>name="Ankle Circles" des="Exercises keep you strong. 3/4 Sit-Up bup is one of the best
                        exercises to target your abs. It will help you improve your
                        mood and gain energy."  />

                            <Eprop img=<img src='http://d205bpvrqc9yn1.cloudfront.net/3293.gif'alt='Loading...'/>name="Archer Pull Up" des="Exercises keep you strong. 45° Side Bend bup is one of the best
                            exercises to target your abs. It will help you improve your
                            mood and gain energy."/> 

                            <Eprop img=<img src='http://d205bpvrqc9yn1.cloudfront.net/3294.gif'alt='Loading...'/>name="Archer Push Up" des="Exercises keep you strong. Air Bike bup is one of the best
                            exercises to target your abs. It will help you improve your
                            mood and gain energy."/> 
                    </div>
                    <div class="mid">
                        <Eprop img=<img src='http://d205bpvrqc9yn1.cloudfront.net/2355.gif' alt='Loading...'/>name="Arm Slingers Hanging Bent Knee" des="Exercises keep you strong. 3/4 Sit-Up bup is one of the best
                        exercises to target your abs. It will help you improve your
                        mood and gain energy."  />

                            <Eprop img=<img src='http://d205bpvrqc9yn1.cloudfront.net/2333.gif'alt='Loading...'/>name="Arm Slingers Hanging Straight Knee" des="Exercises keep you strong. 45° Side Bend bup is one of the best
                            exercises to target your abs. It will help you improve your
                            mood and gain energy."/> 

                            <Eprop img=<img src='http://d205bpvrqc9yn1.cloudfront.net/3214.gif'alt='Loading...'/>name="Arm Apart Circular Toe Touch" des="Exercises keep you strong. Air Bike bup is one of the best
                            exercises to target your abs. It will help you improve your
                            mood and gain energy."/> 
                    </div>


                    <div class="mid">
                        <Eprop img=<img src='http://d205bpvrqc9yn1.cloudfront.net/3204.gif' alt='Loading...'/>name="Arms Overhead Full Sit-Up" des="Exercises keep you strong. 3/4 Sit-Up bup is one of the best
                        exercises to target your abs. It will help you improve your
                        mood and gain energy."  />

                            <Eprop img=<img src='http://d205bpvrqc9yn1.cloudfront.net/0009.gif'alt='Loading...'/>name="Assisted Chest Dip" des="Exercises keep you strong. 45° Side Bend bup is one of the best
                            exercises to target your abs. It will help you improve your
                            mood and gain energy."/> 

                            <Eprop img=<img src='http://d205bpvrqc9yn1.cloudfront.net/0011.gif'alt='Loading...'/>name="Assisted Hanging Knee Raise" des="Exercises keep you strong. Air Bike bup is one of the best
                            exercises to target your abs. It will help you improve your
                            mood and gain energy."/> 
                    </div>

                </div>
                </section>
            </div>


        {/* <div class="mid">
            <Eprop img=<img src='https://d205bpvrqc9yn1.cloudfront.net/0001.gif' alt='Loading...'/>name="3/4 Sit-Up" des="Exercises keep you strong. 3/4 Sit-Up bup is one of the best
            exercises to target your abs. It will help you improve your
            mood and gain energy."  />

                <Eprop img=<img src='https://d205bpvrqc9yn1.cloudfront.net/0002.gif'alt='Loading...'/>name="45° Side Bend" des="Exercises keep you strong. 45° Side Bend bup is one of the best
                exercises to target your abs. It will help you improve your
                mood and gain energy."/> 

                <Eprop img=<img src='https://d205bpvrqc9yn1.cloudfront.net/0003.gif'alt='Loading...'/>name="Air Bike" des="Exercises keep you strong. Air Bike bup is one of the best
                exercises to target your abs. It will help you improve your
                mood and gain energy."/> 
        </div>
        <div class="mid">
            <Eprop img=<img src='https://d205bpvrqc9yn1.cloudfront.net/0001.gif' alt='Loading...'/>name="3/4 Sit-Up" des="Exercises keep you strong. 3/4 Sit-Up bup is one of the best
            exercises to target your abs. It will help you improve your
            mood and gain energy."  />

                <Eprop img=<img src='https://d205bpvrqc9yn1.cloudfront.net/0002.gif'alt='Loading...'/>name="45° Side Bend" des="Exercises keep you strong. 45° Side Bend bup is one of the best
                exercises to target your abs. It will help you improve your
                mood and gain energy."/> 

                <Eprop img=<img src='https://d205bpvrqc9yn1.cloudfront.net/0003.gif'alt='Loading...'/>name="Air Bike" des="Exercises keep you strong. Air Bike bup is one of the best
                exercises to target your abs. It will help you improve your
                mood and gain energy."/> 
        </div>
        <div class="mid">
            <Eprop img=<img src='https://d205bpvrqc9yn1.cloudfront.net/0001.gif' alt='Loading...'/>name="3/4 Sit-Up" des="Exercises keep you strong. 3/4 Sit-Up bup is one of the best
            exercises to target your abs. It will help you improve your
            mood and gain energy."  />

                <Eprop img=<img src='https://d205bpvrqc9yn1.cloudfront.net/0002.gif'alt='Loading...'/>name="45° Side Bend" des="Exercises keep you strong. 45° Side Bend bup is one of the best
                exercises to target your abs. It will help you improve your
                mood and gain energy."/> 

                <Eprop img=<img src='https://d205bpvrqc9yn1.cloudfront.net/0003.gif'alt='Loading...'/>name="Air Bike" des="Exercises keep you strong. Air Bike bup is one of the best
                exercises to target your abs. It will help you improve your
                mood and gain energy."/> 
        </div> */}
      </div>
    )
  }
