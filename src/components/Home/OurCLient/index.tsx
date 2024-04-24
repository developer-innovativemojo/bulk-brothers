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

        <Slider/>
      </div>
    </div>
  );
};

export default OurCLient;
