import React from "react";
import './About.css';
function About(){
    return(
       <>

    <div id="about-main">
        <div class="jumbotron">
            <div class="jumbotron-inner">
                <div class="top-box">
                    <div class="content-box">
                        <h1>
                            About FLEX FITNESS
                        </h1>
                        <p>Welcome to FlexFitness, the ultimate destination for fitness enthusiasts who strive to achieve their fitness goals and live a healthy lifestyle. Our platform offers a wide range of resources and tools to help you optimize your fitness routine and reach your full potential.</p>
                    </div>
                </div>
            </div>
            <div class="img-layer-container">
                <div class="team-image" id="team-image">
                    <img src="https://apimatic.io/img/theme/aboutUs/images-1.png" />
                </div>

                <div class="circles-container">
                    <div class="img-1">
                        <img src="https://apimatic.io/img/theme/aboutUs/Circles-1-1.svg" />                        
                    </div>
                    <div class="img-2">
                        <img src="https://apimatic.io/img/theme/aboutUs/Circles-2-1.svg" />                        
                    </div>                    
                </div>           
            </div>
        </div>
        <div class="story-container">
            <div class="need-for-dx-container">
                <h3 class="text-center">
                    What we offer
                </h3>
                <p>FlexFitness is the ultimate fitness destination for anyone looking to transform their body and improve their health. Our state-of-the-art facility is equipped with everything you need to achieve your fitness goals, whether you're a beginner or a seasoned athlete.

At FlexFitness, we believe that fitness should be fun, accessible, and tailored to each individual's needs. That's why we offer a wide range of classes and equipment, from cardio machines and free weights to yoga, Pilates, and group fitness classes.

Our team of certified personal trainers is here to guide you every step of the way, helping you create a customized workout plan that fits your goals and lifestyle. They're also available for one-on-one coaching sessions, nutritional advice, and accountability support.

We're not just a gym, we're a community. Our friendly and supportive atmosphere is perfect for making new friends, getting motivated, and staying on track with your fitness journey. Whether you prefer to work out alone or in a group, FlexFitness has something for everyone.

So why wait? Join us today and experience the benefits of a healthier, stronger, and more confident you. With flexible membership options and 24/7 access, there's no excuse not to start now. At FlexFitness, we're here to help you achieve your fitness goals, one rep at a time.</p>
                
            </div>
            <div class="container-divider"></div>
            
        </div>
    </div>  
    </>
    );
};
export default About;