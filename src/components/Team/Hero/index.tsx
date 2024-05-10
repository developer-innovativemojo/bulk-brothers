import React from "react";
import Image from "next/image";

import Text from "@/components/ui/Text";

import backimg from "@/public/images/home/hero/herobgnew.png";
import img1 from "@/public/images/team/members/ceo.png";
import img2 from "@/public/images/team/members/2.png";
import ContentMembers from "../Members/ContentMembers";

const Hero = () => {
  return (
    <div className="bg-[#48422D]  relative flex justify-center items-end  ">
      <div className="w-full max-w-[1484px]  h-full relative pt-[0px] pb-[40px]">
        {/* content */}

        {/* imgs */}
        <div className="flex justify-center">
          <Image
            className="absolute bottom-[-5px] z-[9]"
            src={backimg}
            alt=""
            width={1484}
            height={595}
          />
          <div className="w-full max-w-[718px]   min-h-[472.28px] mob:min-h-[402.28px] relative  justify-center mob:mt-8 z-10" data-aos="fade-up"
  data-aos-duration="1000"
  data-aos-easing="ease-in-out">
            <div className="mt-20 mb-16">
              <Text
                as="p"
                className="text-center text-[17px] leading-[27px] mb-2 mob:text-[14px]"
              >
                OUR PEOPLE
              </Text>
              <Text
                as="h2"
                className="text-center text-[40px] leading-[100%] font-bold uppercase mob:text-[30px]"
              >
                Who we are
              </Text>
            </div>

            <div className="w-full  flex flex-wrap gap-4 justify-center items-center">
            <ContentMembers name="Sean Rideout" title="Founder / CEO" imgSrc={img1}  />
            <ContentMembers name="Donte Snipes" title="COO" imgSrc={img2} />
          </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
