import Banner from '../components/Banner'
import Exercise from '../components/reusable/Eprop.js';
import ParallaxScroll from '../components/Parallax';
import { Outlet, Link } from "react-router-dom";
import './Landinpage.css'




export default function LandingPage() {
    return (
     <div>
       <Banner/>
  
      <h2  class="title11" style={{fontSize:'2cm',textAlign:'center'}}>Exercises</h2>
        <div class="mid">
          <Exercise img=<img src='https://d205bpvrqc9yn1.cloudfront.net/0001.gif' alt='Loading...'/>name="3/4 Sit-Up" des="Exercises keep you strong. 3/4 Sit-Up bup is one of the best
            exercises to target your abs. It will help you improve your
            mood and gain energy."  />
  
              <Exercise img=<img src='https://d205bpvrqc9yn1.cloudfront.net/0002.gif'alt='Loading...'/>name="45° Side Bend" des="Exercises keep you strong. 45° Side Bend bup is one of the best
              exercises to target your abs. It will help you improve your
              mood and gain energy."/> 
  
              <Exercise img=<img src='https://d205bpvrqc9yn1.cloudfront.net/0003.gif'alt='Loading...'/>name="Air Bike" des="Exercises keep you strong. Air Bike bup is one of the best
              exercises to target your abs. It will help you improve your
              mood and gain energy."/> 
              
        </div>
        <div class="cent">
                    <Link to="/Exercise"><button class="custom-btn7 btn-7"><span>More..</span></button></Link>
                    
                
                    
                </div>


            
                                  
        
        <ParallaxScroll></ParallaxScroll>
       
        
  
  
  
       
       
  
      </div>
       
      
    );
  }