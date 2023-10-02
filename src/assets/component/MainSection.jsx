import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
// import 'swiper/css/navigation';
import 'swiper/css';
// import './Swiper';
import { Autoplay, Pagination } from 'swiper/modules';



export default function MainSection(){
    return(
        <div className="container-fluid p-0 mainSection1">
              <Swiper
        
        centeredSlides={true}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='swiperPic1'><div></div></SwiperSlide>
        <SwiperSlide className='swiperPic3'><div></div></SwiperSlide>
        
      </Swiper>


      <div className='mainSection1-2'>
        <h1>IT TAKES RAIN TO MAKE RAINBOW</h1>
        <h3>An Ideal Regional Partnership</h3>
      </div>
       </div>
    )
}