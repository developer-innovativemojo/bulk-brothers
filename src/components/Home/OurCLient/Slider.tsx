"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
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

const Slider = () => {
  return (
    <div className=" pb-[45px] mob:w-full mt-4 mob:max-w-full max-w-[1327px] px-[50px] m-auto mob:px-[0px] relative ">
    

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
        spaceBetween={0}
        slidesPerView={1}
        // navigation
        // direction="vertical"
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
        pagination={{ clickable: true }}
        breakpoints={{
          768: {
            slidesPerView: 1,
          },

          1300: {
            slidesPerView: 3,
          },
        }}
        // mousewheel={{ invert: true }}
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
