import React from "react";

import Text from "@/components/ui/Text";

import Slider from "./Slider";
const OurCLient = () => {
  return (
    <div className="bg-[#E2E1DB] min-h-[200px] flex justify-center items-center pt-20 mob:px-5">
      <div className=" w-full max-w-[1327px]  gap-10 " data-aos="fade-up"
  data-aos-duration="1000"
  data-aos-easing="ease-in-out">
        <Text
          as="h1"
          className="text-[45px] text-center text-[#191A05] leading-[57.42px] mob:text-[35px] uppercase"
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
