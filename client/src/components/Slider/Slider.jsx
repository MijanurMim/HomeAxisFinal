/** @format */

import React from "react";
// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import sliderImg1 from "../../resources/images/1.jpg";
import sliderImg2 from "../../resources/images/2.jpg";
import sliderImg3 from "../../resources/images/3.jpg";
import sliderImg4 from "../../resources/images/4.jpg";
import "./Slider.css";

const Slider = () => {
  return (
    <>
      <div className="container-1 ">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="xl:h-screen"
        >
          <SwiperSlide>
            <img src={sliderImg1} alt="" />
            <div className="hero-text h-40 w-1/2 bg-slate-800	pt-5 opacity-75 md:h-96 md:pt-20	 ">
              <h1 className="text-base text-gray-200 lg:text-4xl">
                WELCOME TO <br />
                <span className="text-lg md:text-3xl lg:text-6xl">
                  <span className="text-orange-500">HOME</span>
                  AXIS LTD
                </span>
              </h1>
              <p className="text-sm italic text-orange-500  md:mt-5 md:text-2xl">
                The Best Real Estate Company of The Country
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <img src={sliderImg2} alt="" />
            <div className="hero-text h-40 w-1/2 bg-slate-800	pt-5 opacity-75 md:h-96 md:pt-20	 ">
              <h1 className="text-base text-gray-200 lg:text-4xl">
                WELCOME TO <br />
                <span className="text-lg md:text-3xl lg:text-6xl">
                  <span className="text-orange-500">HOME</span>
                  AXIS LTD
                </span>
              </h1>
              <p className="text-sm italic text-orange-500  md:mt-5 md:text-2xl">
                The Best Real Estate Company of The Country
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <img src={sliderImg3} alt="" />
            <div className="hero-text h-40 w-1/2 bg-slate-800	pt-5 opacity-75 md:h-96 md:pt-20	 ">
              <h1 className="text-base text-gray-200 lg:text-4xl">
                WELCOME TO <br />
                <span className="text-lg md:text-3xl lg:text-6xl">
                  <span className="text-orange-500">HOME</span>
                  AXIS LTD
                </span>
              </h1>
              <p className="text-sm italic text-orange-500  md:mt-5 md:text-2xl">
                The Best Real Estate Company of The Country
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <img src={sliderImg4} alt="" />
            <div className="hero-text h-40 w-1/2 bg-slate-800	pt-5 opacity-75 md:h-96 md:pt-20	 ">
              <h1 className="text-base text-gray-200 lg:text-4xl">
                WELCOME TO <br />
                <span className="text-lg md:text-3xl lg:text-6xl">
                  <span className="text-orange-500">HOME</span>
                  AXIS LTD
                </span>
              </h1>
              <p className="text-sm italic text-orange-500  md:mt-5 md:text-2xl">
                The Best Real Estate Company of The Country
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Slider;
