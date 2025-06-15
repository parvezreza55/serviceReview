import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "motion/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";
const Banner = () => {
  return (
    <>
      <div className="relative">
        <Swiper
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="text-center">
              <img
                className="h-[20em] md:h-[35rem] w-11/12 mx-auto"
                src={img1}
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-center">
              <img
                className="h-[20em] md:h-[35rem] w-11/12 mx-auto"
                src={img2}
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-center">
              <img
                className="h-[20em] md:h-[35rem] w-11/12 mx-auto"
                src={img3}
                alt=""
              />
            </div>
          </SwiperSlide>
          <div className="absolute p-2 md:p-4 z-10 top-[10em] md:top-[17em] left-[2em] md:left-[5em] lg:top-[15em] lg:left-[8em]">
            <motion.div
              animate={{
                x: [0, -2, 2, -2, 2, 0],
                y: [0, -4, 0, 4, 0],
                transition: { duration: 3, repeat: Infinity },
              }}
            >
              <h1 className="text-2xl md:text-5xl text-white font-extrabold">
                Rate & Review{" "}
              </h1>
              <p className="text-white w-3/4">
                Welcome to the ultimate destination for service reviews and real
                user experiences. Share your thoughts, rate your favorites, and
                help others choose wisely.
              </p>
            </motion.div>
          </div>
        </Swiper>
      </div>
    </>
  );
};

export default Banner;
