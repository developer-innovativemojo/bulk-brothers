import React from "react";
import Image from "next/image";

import Text from "@/components/ui/Text";

import first from "@/public/images/home/whatweoffer/1st.png";
import second from "@/public/images/home/whatweoffer/2.png";
import third from "@/public/images/home/whatweoffer/3.png";
import four from "@/public/images/home/whatweoffer/4.png";
import firsticon from "@/public/images/home/whatweoffer/serviceicon.png";
import thirdicon from "@/public/images/home/whatweoffer/3icon.png";
import mask from "@/public/images/home/Mask group.png";

import Content from "./Content";
import Button from "@/components/ui/Button";
import Link from "next/link";

const WhatWeOffer = () => {
  return (
    <>
      <div className="bg-[#191A05] min-h-[200px] flex justify-center items-center pb-[100px] mob:px-5 relative">
        <Image
          className="absolute  w-full h-full "
          src={mask}
          alt=""
          width={1440}
          height={1546}
        />

        <div
          className=" w-full max-w-[1140px] "
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <Text
            as="h1"
            className="text-[45px] text-center text-[#FFFFFF] leading-[57.42px] mb-16 mt-20 uppercase"
          >
            What we offer
          </Text>

          {/* cards */}
          <div className="flex flex-wrap justify-center gap-6 ">
          <Link href="/services?id=moving-service">
              <Content
                imageSrc={first}
                iconSrc={firsticon}
                heading="Moving Services"
                text="You don't have to pick between affordable rates or quality service. Trust Bulk Brothers to get your items to your new home safely and efficiently at affordable rates."
              />
            </Link>

            <Link href="/services?id=delivery-service">
              <Content
                imageSrc={second}
                heading="Delivery Services"
                text="Don’t pay high delivery fees or rent a truck to pick up that new item you love. Let Bulk Brothers take care of your delivery needs."
              />
            </Link>
            <Link href="/services?id=trash-service">
              <Content
                imageSrc={third}
                iconSrc={thirdicon}
                heading="Trash Removal Services"
                text="Whether large or small, Bulk Brothers can take care of all of your clutter, trash, and junk removal needs. "
              />
            </Link>
            <Link href="/services?id=labor-service">
              <Content
                imageSrc={four}
                heading="Labor Only Services"
                text="We provide a variety of labor only services when customers need someone to do the heavy lifting."
              />
            </Link>
          </div>

          {/* button */}
          <div className="flex justify-center mt-5">
            <Link className="flex justify-center w-full" href="/services">
              <Button className="uppercase bg-[#E2E1DB] text-[#191A05] max-w-[253px] h-[58px] tracking-[1px] mt-[30px]">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatWeOffer;
