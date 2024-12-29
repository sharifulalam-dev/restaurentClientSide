import React from "react";
// Import Swiper React components
import { FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import slide1 from "../assets/home/slide1.jpg";
import slide2 from "../assets/home/slide2.jpg";
import slide3 from "../assets/home/slide3.jpg";
import slide4 from "../assets/home/slide4.jpg";
import Heading from "./Heading";

export default function Category() {
  return (
    <>
      <div className="my-10">
        <Heading
          subheading={"From 11:00am to 10:00pm"}
          heading={"Order Online"}
        />
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src={slide1}
              alt="Slide 1"
              className="h-80 w-full object-cover"
            />
            <div className="text-center cat-text text-white">
              <h3 className="text-2xl">Salads</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={slide2}
              alt="Slide 1"
              className="h-80 w-full object-cover"
            />
            <div className="text-center cat-text text-white">
              <h3 className="text-2xl font-bold">Soups</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={slide3}
              alt="Slide 1"
              className="h-80 w-full object-cover"
            />
            <div className="text-center cat-text text-white">
              <h3 className="text-2xl">Pizzas</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={slide4}
              alt="Slide 1"
              className="h-80 w-full object-cover"
            />
            <div className="text-center cat-text text-white">
              <h3 className="text-2xl">Deserts</h3>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <img
              src={slide1}
              alt="Slide 1"
              className="h-80 w-full object-cover"
            />
            <div className="text-center cat-text text-white">
              <h3 className="text-2xl">Salads</h3>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
