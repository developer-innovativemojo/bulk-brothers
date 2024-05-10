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
        prevButton.style.zIndex = "10";
        nextButton.style.zIndex = "10";
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
        prevButton.style.zIndex = "10";
        nextButton.style.zIndex = "10";
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
        spaceBetween={2}
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
            name="Natasha - Baltimore, MD"
            review="I can't thank Bulk Brothers enough for their moving services. After another company scammed me, I contacted Dante who quickly scheduled for me an emergency move they very next morning."
          />
        </SwiperSlide>

        <SwiperSlide className="mob:px-[20px]">
          <CardContent
            heading="Grateful for Bulk Brothers"
            time="4 days ago"
            name="Paula - Baltimore, MD"
            review="I have to highly recommend Bulk Brothers!! I called, I got instant information, a quick call back to schedule, fast service!! The price was very fair, the best customer service I have ever experienced!! Thank you so much, I will be calling again soon!!"
          />
        </SwiperSlide>

        <SwiperSlide className="mob:px-[20px]">
          <CardContent
            heading="Outstanding Service Experience"
            time="4 days ago"
            name="Chanel - Baltimore, MD"
            review="Service was completely outstanding! Kenneth and Tim were phenomenal. We'll definitely be using them again!"
          />
        </SwiperSlide>


        <SwiperSlide className="mob:px-[20px]">
          <CardContent
            heading="Positive Experience"
            time="4 days ago"
            name="Evelyn M. Ashburn, VA"
            review="They were awesome. I would definitely recommend this team of respectful, professional and friendly movers. They are very reasonably priced and took great care in moving my storage items."
          />
        </SwiperSlide>

        <SwiperSlide className="mob:px-[20px]">
          <CardContent
            heading="Professional Movers"
            time="4 days ago"
            name="Chris R. MD, MD"
            review="We were referred to Bulk Brothers from a hauling company in Bel Air. We called them, and they picked up our sleeper sofa within about 90 minutes of our request (and this is on a Sunday!). Courteous, quick, and careful. A great experience, we would use them again, and highly recommend them without reservation!"
          />
        </SwiperSlide>

        <SwiperSlide className="mob:px-[20px]">
          <CardContent
            heading="Exceptional Experience"
            time="4 days ago"
            name="Shah J Towson, MD"
            review="Great customer service, timely responses. Guys came in and got right started on work. Very friendly and professional! Definitely will use this company again!!!"
          />
        </SwiperSlide>

        
      </Swiper>
    </div>
  );
};

export default Slider;
