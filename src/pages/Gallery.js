import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Gallery.css";
import pink from '../image/pink.jpg';
import blue from '../image/blue.jpg';
import gold from '../image/gold.jpg';
import purple from '../image/purple.jpg';

import red1 from '../image/red1.jpg';
import white1 from '../image/white1.jpg';


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



				<SwiperSlide><img src={red1} alt="hcabhcbah" className="A"></img></SwiperSlide>
				<SwiperSlide><img src={blue} alt="hcabhcbah" className="A"></img></SwiperSlide>

				<SwiperSlide><img src={white1} alt="hcabhcbah" className="A"></img></SwiperSlide>


				<SwiperSlide><img src={gold} alt="hcabhcbah" className="A" ></img></SwiperSlide>

				<SwiperSlide><img src={purple} alt="hcabhcbah" className="A"></img></SwiperSlide>

				<SwiperSlide><img src={pink} alt="hcabhcbah" className="A"></img></SwiperSlide>


			</Swiper>




		</>
	);
}
