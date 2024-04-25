import React from "react";
import Image from "next/image";

import Text from "@/components/ui/Text";

import first from "@/public/images/home/whatweoffer/1st.png";
import second from "@/public/images/home/whatweoffer/2.png";
import third from "@/public/images/home/whatweoffer/3.png";
import four from "@/public/images/home/whatweoffer/4.png";
import firsticon from "@/public/images/home/whatweoffer/serviceicon.png";
import thirdicon from "@/public/images/home/whatweoffer/3icon.png";

import Content from "./Content";
import Button from "@/components/ui/Button";

const WhatWeOffer = () => {
  return (
    <>
      <div className="bg-[#191A05] min-h-[200px] flex justify-center items-center pb-[100px] mob:px-5">
        <div className=" w-full max-w-[1140px] ">
          <Text
            as="h1"
            className="text-[45px] text-center text-[#FFFFFF] leading-[57.42px] mb-16 mt-20"
          >
            What we offer
          </Text>

          {/* cards */}
          <div className="flex flex-wrap justify-center gap-6 ">
            <Content
              imageSrc={first}
              iconSrc={firsticon}
              heading="Moving Services"
              text="You don't have to pick between affordable rates or quality service. Trust Bulk Brothers to get your items to your new home safely and efficiently at affordable rates."
            />
            <Content
              imageSrc={second}
              heading="Moving Services"
              text="You don't have to pick between affordable rates or quality service. Trust Bulk Brothers to get your items to your new home safely and efficiently at affordable rates."
            />
            <Content
              imageSrc={third}
              iconSrc={thirdicon}
              heading="Moving Services"
              text="You don't have to pick between affordable rates or quality service. Trust Bulk Brothers to get your items to your new home safely and efficiently at affordable rates."
            />
            <Content
              imageSrc={four}
              heading="Moving Services"
              text="You don't have to pick between affordable rates or quality service. Trust Bulk Brothers to get your items to your new home safely and efficiently at affordable rates."
            />
          </div>

          {/* button */}
          <div className="flex justify-center mt-5">
            <Button className="uppercase bg-[#E2E1DB] text-[#191A05] max-w-[253px] h-[58px] tracking-[1px] mt-[30px]">
              View All Services
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatWeOffer;
