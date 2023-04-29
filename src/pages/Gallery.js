import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Gallery.css";
import gym11 from '../image/gym11.jpg';
import gym2 from '../image/gym2.jpg';
import gym3 from '../image/gym3.jpg';
import gym4 from '../image/gym4.jpg';
import gym5 from '../image/gym5.jpg';
import gym6 from '../image/gym6.jpg';
import gym7 from '../image/gym7.jpg';


import { Pagination } from "swiper";
import SwiperCore, { Autoplay } from 'swiper';
SwiperCore.use([Autoplay])

// import required modules


export default function Gallery() {
	return (
		<>

			<Swiper
				slidesPerView={3}
				spaceBetween={15}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false
				}}
				pagination={{
					clickable: true,
				}}
				modules={[Pagination]}
				className="mySwiper"
			>



				<SwiperSlide><img src={gym11} alt="hcabhcbah" className="A"></img></SwiperSlide>
				<SwiperSlide><img src={gym2} alt="hcabhcbah" className="A"></img></SwiperSlide>

				<SwiperSlide><img src={gym3} alt="hcabhcbah" className="A"></img></SwiperSlide>


				<SwiperSlide><img src={gym4} alt="hcabhcbah" className="A" ></img></SwiperSlide>
 
				<SwiperSlide><img src={gym5} alt="hcabhcbah" className="A"></img></SwiperSlide>

				<SwiperSlide><img src={gym6} alt="hcabhcbah" className="A"></img></SwiperSlide>
				<SwiperSlide><img src={gym7} alt="hcabhcbah" className="A"></img></SwiperSlide> 


			</Swiper>




		</>
	);
}
