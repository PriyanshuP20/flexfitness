import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Carousel.css';
import cl1 from '../image/a.jpg';
import cl2 from '../image/b.jpg';
import cl3 from '../image/c.jpg';
import cl4 from '../image/d.jpg';
import cl5 from '../image/e.jpg';
import cl6 from '../image/f.jpg';
import cl7 from '../image/g.jpg';
import cl8 from '../image/h.jpg';

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };

    return (
        <Slider {...settings}>
            <div>

                <figure class="snip1197">
                    <figcaption>
                        <blockquote>Joining this gym was the best decision I ever made for my fitness journey. The trainers are knowledgeable and supportive, and the community is incredibly motivating. </blockquote>
                        <div class="arrow"></div>
                    </figcaption>
                    <img src={cl1} alt="sq-sample10" />
                    <div class="author">
                        <h5>Pelican Steve </h5>
                    </div>
                </figure>

            </div>




            <div>

                <figure class="snip1197">
                    <figcaption>
                        <blockquote>I've tried a lot of gyms in the past, but this one stands out. The facilities are top-notch, the classes are challenging, and the staff is always friendly and welcoming.</blockquote>
                        <div class="arrow"></div>
                    </figcaption>
                    <img src={cl2} alt="sq-sample10" />
                    <div class="author">
                        <h5>Iqra Hadid </h5>
                    </div>
                </figure>

            </div>



            <div>

                <figure class="snip1197">
                    <figcaption>
                        <blockquote>This gym helped me get into the best shape of my life. The trainers pushed me to work harder than I ever thought possible, and the results speak for themselves.</blockquote>
                        <div class="arrow"></div>
                    </figcaption>
                    <img src={cl3}alt="sq-sample10" />
                    <div class="author">
                        <h5>Emily Jason </h5>
                    </div>
                </figure>

            </div>




            <div>

                <figure class="snip1197">
                    <figcaption>
                        <blockquote>If you're serious about reaching your fitness goals, this gym is the place to be. The trainers are committed to helping you succeed, and the variety of equipment and classes keeps things interesting.</blockquote>
                        <div class="arrow"></div>
                    </figcaption>
                <img src={cl4} alt="sq-sample10" />
                    <div class="author">
                        <h5>Miacheal Clark </h5>
                    </div>
                </figure>

            </div>





            <div>

                <figure class="snip1197">
                    <figcaption>
                        <blockquote> I can honestly say it's been a game-changer for me. I've gained strength, confidence, and a sense of belonging to a community that supports and encourages each other.</blockquote>
                        <div class="arrow"></div>
                    </figcaption>
                    <img src={cl5} alt="sq-sample10" />
                    <div class="author">
                        <h5>Kylie Thomas </h5>
                    </div>
                </figure>

            </div>




            <div>

                <figure class="snip1197">
                    <figcaption>
                        <blockquote>The trainers at this gym are the real deal. They're knowledgeable, experienced, and passionate about what they do. They push you to be your best and celebrate your successes with you.</blockquote>
                        <div class="arrow"></div>
                    </figcaption>
                    <img src={cl6} alt="sq-sample10" />
                    <div class="author">
                        <h5>Jordan Ali </h5>
                    </div>
                </figure>

          </div>


          <div>

                <figure class="snip1197">
                    <figcaption>
                        <blockquote>This gym has helped me transform my body and my mindset. I've gone from being a self-conscious gym newbie to feeling strong and confident in my abilities.</blockquote>
                        <div class="arrow"></div>
                    </figcaption>
                    <img src={cl7} alt="sq-sample10" />
                    <div class="author">
                        <h5>Katrina Smith</h5>
                    </div>
                </figure>

                </div>




            <div>

            <figure class="snip1197">
                <figcaption>
                    <blockquote>The community at this gym is amazing. Everyone is so supportive and encouraging, and it's helped me stay accountable and motivated on my fitness journey.</blockquote>
                    <div class="arrow"></div>
                </figcaption>
                <img src={cl8} alt="sq-sample10" />
                <div class="author">
                    <h5>Moen Ali </h5>
                </div>
            </figure>

            </div>




        </Slider>
    );

};
export default Carousel;
