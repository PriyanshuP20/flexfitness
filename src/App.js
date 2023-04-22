import React from 'react'
import '../src/App.css';
//import Home from './Home'
import Banner from './components/Banner'
import Exercise from './Exercise';
export default function App() {
  return (
   <div>
     <Banner/>

    <h1 style={{fontSize:'2cm',textAlign:'center'}}>Exercises</h1>
   
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
     
    
  );
}
