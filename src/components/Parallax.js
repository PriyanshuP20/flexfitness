import { Eventcalendar } from '@mobiscroll/react';
import Carousel from '../pages/Carousel';
import "@mobiscroll/react/dist/css/mobiscroll.min.css";

 

import Gallery from '../pages/Gallery';
import './Parallax.css'
// import cred from '../resources/cred.png'
import { Outlet, Link } from "react-router-dom";
import Diet from '../pages/Dietplanner';


function ParallaxScroll() {
    return (
        <div id="parallax-world-of-ugg">
            
            <section>
                {/* <div class="title">
                    <h3>SERVICES FOR</h3>
                    <h1>YOU</h1>
                    
                </div> */}

                <div class="title">
                    
                    <h1>Diet Planner</h1>
                </div>
            </section>
          {/* <Eventcalendar></Eventcalendar> */}
          <Diet></Diet>
            <section>
                <div class="parallax-four">
                    <h2>Our Gallery</h2>
                </div>
            </section>
            <Gallery></Gallery>

            

            <section>
           
            <div class="parallax-two">
                    <h2>SHOP</h2>
                </div>
            <div class="block">
                <p><span class="first-character ny">W</span>Welcome to our gym website, the ultimate destination for fitness enthusiasts! Our gym is more than just a place to work out - it's a community that's dedicated to helping you achieve your fitness goals and living a healthier, happier life.

At our gym, we believe that fitness should be fun and accessible to everyone, regardless of their fitness level or experience. That's why we've created a welcoming environment that's designed to make you feel comfortable and empowered as you work toward your goals.

Our state-of-the-art facility is equipped with the latest and greatest fitness equipment, from cardio machines to strength-training equipment and everything in between. Plus, we offer a wide range of classes and training programs that are designed to help you get the most out of your workout and achieve the results you want.

But we're not just about fitness - we're also about community. Our gym is a place where you can connect with like-minded people who share your passion for fitness and support you on your journey. Our friendly staff is always on hand to offer guidance, motivation, and support, whether you're just starting out or looking to take your fitness to the next level.

So whether you're looking to lose weight, build muscle, increase your endurance, or simply improve your overall health and well-being, we've got everything you need to succeed. Explore our website to learn more about our programs and services, or stop by our gym to see for yourself why we're the best in the business. We can't wait to help you achieve your fitness goals and live your best life!</p>
                <p class="line-break margin-top-10"></p>
                <p class="margin-top-10"></p>
                <h1 >We will be adding the shop feature soon, stay tuned for updates.</h1>
            </div>
                
            </section>



            <section>
            <div class="title">
                {/* <h3>JOIN </h3> */}
                <h1>JOIN US</h1>
            </div>
            </section>


            <section>
            <div class="parallax-three">
                {/* <img src={cred}/> */}

                <h2>Let's get started</h2>
                <p class="heading1">Click on Login or Sign Up button</p>
                <div class="cent">
                    <Link to="/Login"><button class="custom-btn7 btn-7"><span>Login</span></button></Link>
                    <Link to="/Login"><button class="custom-btn7 btn-7"><span>SIGN UP</span></button></Link>
                    
                </div>
            </div>
            
            </section>

            <section>
                <div class="ABC">
                    
                </div>
            </section>

            

            <section>
                <div class="parallax-five">
                    <h2 >Testimonials</h2>
                </div>
            </section>
            <Carousel />


        </div>
    )
}

export default ParallaxScroll;