import React from 'react'
import styled from "styled-components";
import { Typography } from '@mui/material';
import bg from '../image/lg.jpg';

export default function About() {
  return (
    <div>

<Typography style={{padding:'2%'}}>
    <p/>
        Welcome to <span style={{color:'#FEE8B0',fontFamily:'sans-serif',fontSize:'1.2cm'}}>Flexfitness</span>, the ultimate destination for fitness enthusiasts who want to transform their bodies and improve their overall health. Our gym is a one-stop-shop for all your fitness needs, offering a wide range of state-of-the-art equipment, expert personal trainers, and a supportive community to help you reach your goals.

At Flexfitness, we believe that fitness is not just about looking good but feeling good too. That's why we focus on creating an inclusive and motivating environment that caters to all fitness levels and goals. Whether you're a beginner looking to get in shape or a seasoned athlete seeking to take your fitness to the next level, our gym has everything you need to succeed.

Our facility is equipped with the latest cardio and strength training equipment, including free weights, machines, and functional training tools. Our expert trainers are certified professionals who will work with you to develop a personalized fitness plan that fits your unique needs and goals. They will guide and motivate you every step of the way, ensuring that you stay on track and achieve your desired results.

In addition to our top-notch facilities and expert trainers,Flexfitness also offers a variety of group fitness classes, including yoga, Pilates, Zumba, and more. These classes provide a fun and engaging way to stay active and meet new people, all while working towards your fitness goals.

At<span style={{color:'#FEE8B0',fontFamily:'sans-serif',fontSize:'1.2cm'}}>Flexfitness</span>, we are committed to providing our members with an exceptional fitness experience. Whether you're looking to lose weight, build muscle, or simply feel better and healthier, we've got you covered. Join us today and start your journey towards a fitter, healthier, and happier you!
</Typography>
   </div>
  )
}
const Main = styled.div`
  width: 100%;
  height: 100vh;
   background-image: url(${bg});
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  overflow: hidden;
`;