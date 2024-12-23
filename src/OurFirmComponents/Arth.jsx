import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import './Arth.css';
import { motion } from 'motion/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import slide_image_1 from '/Images/Arthians/Arth (1).jpeg';
import slide_image_2 from '/Images/Arthians/Arth (2).jpeg';
import slide_image_3 from '/Images/Arthians/Arth (3).jpeg';
import slide_image_4 from '/Images/Arthians/Arth (4).jpeg';
import slide_image_5 from '/Images/Arthians/Arth (5).jpeg';
import slide_image_6 from '/Images/Arthians/Arth (6).jpeg';
import slide_image_7 from '/Images/Arthians/Arth (7).jpeg';
import slide_image_8 from '/Images/Arthians/Arth (8).jpeg';
import slide_image_9 from '/Images/Arthians/Arth (9).jpeg';
import slide_image_10 from '/Images/Arthians/Arth (10).jpeg';
import slide_image_11 from '/Images/Arthians/Arth (12).jpeg';
import slide_image_12 from '/Images/Arthians/Arth (12).jpeg';

const Swiper2 = () => {
  const imageVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: "easeInOut"
      }
    }
  };
  return (
      <div className="slider-container">
        {/* <h1 className="heading">Moments That Define Us</h1> */}
        <motion.div variants={imageVariants} initial="hidden"
            whileInView="visible" viewport = { {once: true }} className="tertiaryText flexColCenter1 paddings innerWidth arth-heading">OUR PEOPLE, OUR CULTURE</motion.div>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: '.swiper-pagination', clickable: true }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          <SwiperSlide>
            <img src={slide_image_1} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_2} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_3} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_4} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_5} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_6} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_8} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_9} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_10} alt="slide_image" />
          </SwiperSlide>
  
          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
              <img src="\Icons\back.png" alt="" width={20}/>
            </div>
            <div className="swiper-button-next slider-arrow">
              <img src="\Icons\right-arrow.png" alt="" width={20}/>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
  )
}

export default Swiper2
