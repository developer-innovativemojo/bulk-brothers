import React from "react";
import Image from "next/image";

import Text from "@/components/ui/Text";

import stars from "@/public/icons/starsclient.svg";
import Slider from "./Slider";
const OurCLient = () => {
  return (
    <div className="bg-[#E2E1DB] min-h-[200px] flex justify-center items-center py-16">
      <div className=" w-full max-w-[1327px]  gap-10 pb-[100px]">
        <Text
          as="h1"
          className="text-[45px] text-center text-[#191A05] leading-[57.42px]"
        >
          What Our Clients Say
        </Text>
        <Text
          as="p"
          className="text-[17px] text-center  text-[#191A05] leading-[27px] font-inter "
        >
          Don’t stress. Call Bulk Brothers and let us take care of your labor
          needs.
        </Text>
{/* 
        <div className="w-full bg-[#FFFFFF] max-w-[397px] rounded-[4px] p-[30px] mt-[50px]">
          <div className="flex justify-between">
            <Image src={stars} alt="" width={148} height={29.04} />
            <Text as="p" className="text-[#191A05] text-[15px] leading-[27px]">
              4 days ago
            </Text>
          </div>

          <Text
            as="h2"
            className="text-[#191A05] font-bold text-[22px] leading-[28.07px] my-3"
          >
            Quick and reliable
          </Text>

          <Text
            as="p"
            className="text-[15px]  text-[#191A05] leading-[25px] font-inter "
          >
            I can't thank Bulk Brothers enough for their moving services. After
            another company scammed me, I contacted Dante who quickly scheduled
            for me an emergency move they very next morning.
          </Text>
          <Text
            as="p"
            className="text-[16px]  text-[#191A05] leading-[22px] font-inter mt-3"
          >
            David Narrator
          </Text>
        </div> */}
        <Slider/>
      </div>
    </div>
  );
};

export default OurCLient;
