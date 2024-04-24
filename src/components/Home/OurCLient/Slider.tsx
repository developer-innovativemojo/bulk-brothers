"use client";

import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  Mousewheel,
} from "swiper/modules";
import Text from "@/components/ui/Text";

import CardContent from "./CardContent";
import Image from "next/image";

import prevar from "@/public/images/home/arrowleft.png";
import forwadar from "@/public/images/home/arrowright.png";
const Slider = () => {
  const swiper = useSwiper();

  const handleprevbtn = () => {
    const nextButton = document.querySelector<HTMLDivElement>(".custom-next");
    const prevButton = document.querySelector<HTMLDivElement>(".custom-prev");
    if (prevButton && nextButton) {
        prevButton.style.zIndex = "0";
        nextButton.style.zIndex = "0";
        setTimeout(() => {
            swiper?.slidePrev();
            console.log("prev button clicked");
            prevButton.style.zIndex = "10";
            nextButton.style.zIndex = "10";
        }, 1000);
    }
};

const handleNextvbtn = () => {
    const nextButton = document.querySelector<HTMLDivElement>(".custom-next");
    const prevButton = document.querySelector<HTMLDivElement>(".custom-prev");
    if (prevButton && nextButton) {
        prevButton.style.zIndex = "0";
        nextButton.style.zIndex = "0";
        setTimeout(() => {
            swiper?.slideNext();
            console.log("next button clicked");
            prevButton.style.zIndex = "10";
            nextButton.style.zIndex = "10";
        }, 1000);
    }
};



  return (
    <div className="  mob:w-full mt-4 mob:max-w-full max-w-[1327px] xl:max-w-[480px] px-[35px] xl:px-[25px] m-auto mob:px-[0px] relative flex items-center overflow-hidden">
      <Image
        className="custom-prev absolute left-0 z-10 cursor-pointer"
        onClick={handleprevbtn}
        src={prevar}
        alt="moveprevbtn"
        width={41}
        height={37.84}
      />
      <Image
        className="custom-next absolute right-0 z-10 cursor-pointer"
        onClick={handleNextvbtn}
        src={forwadar}
        alt="movenextbtn"
        width={41}
        height={37.84}
      />
      <Swiper
        className="portfolioSlider"
        loop={true}
        modules={[
          Navigation,
          Pagination,
          Scrollbar,
          A11y,
          Autoplay,
          Mousewheel,
        ]}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        spaceBetween={0}
        slidesPerView={1}
        // pagination={{ clickable: true }}
        breakpoints={{
          768: {
            slidesPerView: 1,
          },

          1200: {
            slidesPerView: 3,
          },
        }}
      >
        <SwiperSlide className="mob:px-[20px]">
          <CardContent
            heading="Quick and reliable"
            time="4 days ago"
            name="David Narrator"
            review="I can't thank Bulk Brothers enough for their moving services. After another company scammed me, I contacted Dante who quickly scheduled for me an emergency move they very next morning."
          />
        </SwiperSlide>

        <SwiperSlide className="mob:px-[20px]">
          <CardContent
            heading="Quick and reliable"
            time="4 days ago"
            name="David Narrator"
            review="I can't thank Bulk Brothers enough for their moving services. After another company scammed me, I contacted Dante who quickly scheduled for me an emergency move they very next morning."
          />
        </SwiperSlide>

        <SwiperSlide className="mob:px-[20px]">
          <CardContent
            heading="Quick and reliable"
            time="4 days ago"
            name="David Narrator"
            review="I can't thank Bulk Brothers enough for their moving services. After another company scammed me, I contacted Dante who quickly scheduled for me an emergency move they very next morning."
          />
        </SwiperSlide>

        <SwiperSlide className="mob:px-[20px]">
          <CardContent
            heading="Quick and reliable"
            time="4 days ago"
            name="David Narrator"
            review="I can't thank Bulk Brothers enough for their moving services. After another company scammed me, I contacted Dante who quickly scheduled for me an emergency move they very next morning."
          />
        </SwiperSlide>

        <SwiperSlide className="mob:px-[20px] ">
          <CardContent
            heading="Quick and reliable"
            time="4 days ago"
            name="David Narrator"
            review="I can't thank Bulk Brothers enough for their moving services. After another company scammed me, I contacted Dante who quickly scheduled for me an emergency move they very next morning."
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
