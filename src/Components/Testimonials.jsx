import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import Rating from "react-rating";
// Import Swiper React components
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import Heading from "./Heading";

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);

  // Fetch testimonials data
  useEffect(() => {
    axios.get("Data.json").then((response) => setTestimonials(response.data));
  }, []);

  return (
    <div>
      {/* Heading */}
      <Heading heading={"TESTIMONIALS"} subheading={"What Our Client Say"} />

      {/* Swiper Component */}
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        slidesPerView={1} // Adjust for responsiveness
        spaceBetween={30} // Adjust spacing between slides
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial._id} className="p-4">
            <div className="max-w-lg mx-auto text-center py-10">
              {/* Star Rating */}
              <div className="mb-4">
                <Rating
                  initialRating={testimonial.rating} // Set the rating value
                  emptySymbol={<FaStar className="text-gray-300" />}
                  fullSymbol={<FaStar className="text-yellow-500" />}
                  fractions={2} // Allows half-star ratings
                  readonly // Makes the rating display-only
                />
              </div>

              {/* Quote Icon */}
              <div className="text-4xl text-black mb-4 flex items-center justify-center">
                <FaQuoteLeft />
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 text-sm mb-4">
                {testimonial.details}
              </p>

              {/* Author */}
              <p className="text-yellow-500 font-bold text-lg">
                {testimonial.name}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
