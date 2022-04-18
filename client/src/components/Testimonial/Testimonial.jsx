import React from "react";
// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import member1 from "../../resources/images/members/1.jpg";
import member2 from "../../resources/images/members/2.jpg";
import member3 from "../../resources/images/members/3.jpg";
import member4 from "../../resources/images/members/4.jpg";
import member5 from "../../resources/images/members/5.jpg";
import "./Testimonial.css";

const Testimonial = () => {
  return (
    <div className=" my-60 ">
      <div className="  flex  flex-col items-center justify-center">
        <div className="testimonial-background   w-full bg-fixed lg:h-screen   ">
          <p className=" my-10  text-center text-3xl  text-orange-500  lg:mt-36 lg:text-6xl ">
            MEET OUR TEAM
          </p>
          <div className="container-2 ">
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              // pagination={true}
              modules={[EffectCoverflow, Pagination, Autoplay]}
              className="mySwiper h-96 w-11/12	  md:h-full md:w-full  "
            >
              <SwiperSlide className="flex  flex-col  bg-slate-800	text-slate-200  ">
                <img className="    shadow-xl" src={member2} />
                <div className="mx-5 py-5 px-2 lg:py-5">
                  <div className="text-xs lg:text-xl ">
                    SM Shamsuzzaman Azad
                  </div>
                  <div className="text-xs text-orange-500 lg:text-base">
                    Executive Director
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="flex  flex-col  bg-slate-800	text-slate-200  ">
                <img className="    shadow-xl" src={member3} />
                <div className="mx-5 py-5 px-2 lg:py-5">
                  <div className="text-xs lg:text-xl ">
                    SM Shamsuzzaman Azad
                  </div>
                  <div className="text-xs text-orange-500 lg:text-base">
                    Executive Director
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="flex  flex-col  bg-slate-800	text-slate-200  ">
                <img className="    shadow-xl" src={member4} />
                <div className="mx-5 py-5 px-2 lg:py-5">
                  <div className="text-xs lg:text-xl ">
                    SM Shamsuzzaman Azad
                  </div>
                  <div className="text-xs text-orange-500 lg:text-base">
                    Executive Director
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="flex  flex-col  bg-slate-800	text-slate-200  ">
                <img className="    shadow-xl" src={member5} />
                <div className="mx-5 py-5 px-2 lg:py-5">
                  <div className="text-xs lg:text-xl ">
                    SM Shamsuzzaman Azad
                  </div>
                  <div className="text-xs text-orange-500 lg:text-base">
                    Executive Director
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="flex  flex-col  bg-slate-800	text-slate-200  ">
                <img className="    shadow-xl" src={member2} />
                <div className="mx-5 py-5 px-2 lg:py-5">
                  <div className="text-xs lg:text-xl ">
                    SM Shamsuzzaman Azad
                  </div>
                  <div className="text-xs text-orange-500 lg:text-base">
                    Executive Director
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="flex  flex-col  bg-slate-800	text-slate-200  ">
                <img className="    shadow-xl" src={member3} />
                <div className="mx-5 py-5 px-2 lg:py-5">
                  <div className="text-xs lg:text-xl ">
                    SM Shamsuzzaman Azad
                  </div>
                  <div className="text-xs text-orange-500 lg:text-base">
                    Executive Director
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="flex  flex-col  bg-slate-800	text-slate-200  ">
                <img className="    shadow-xl" src={member4} />
                <div className="mx-5 py-5 px-2 lg:py-5">
                  <div className="text-xs lg:text-xl ">
                    SM Shamsuzzaman Azad
                  </div>
                  <div className="text-xs text-orange-500 lg:text-base">
                    Executive Director
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="flex  flex-col  bg-slate-800	text-slate-200  ">
                <img className="    shadow-xl" src={member5} />
                <div className="mx-5 py-5 px-2 lg:py-5">
                  <div className="text-xs lg:text-xl ">
                    SM Shamsuzzaman Azad
                  </div>
                  <div className="text-xs text-orange-500 lg:text-base">
                    Executive Director
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="flex  flex-col  bg-slate-800	text-slate-200  ">
                <img className="    shadow-xl" src={member2} />
                <div className="mx-5 py-5 px-2 lg:py-5">
                  <div className="text-xs lg:text-xl ">
                    SM Shamsuzzaman Azad
                  </div>
                  <div className="text-xs text-orange-500 lg:text-base">
                    Executive Director
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
