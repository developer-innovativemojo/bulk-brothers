import React from "react";
import Image from "next/image";

import Text from "@/components/ui/Text";

import bussesimg from "@/public/images/services/sevicebussbg.png";
import backimg from "@/public/images/home/hero/herobgnew.png";
import airl from "@/public/images/home/hero/air-l.png";
import airr from "@/public/images/home/hero/air-r.png";

const Hero = () => {
  return (
    <div className="bg-[#48422D] min-h-[400px] relative flex justify-center items-end  overflow-hidden">
      <div className="w-full max-w-[1484px] max-h-[785px] h-full relative pt-[0px] pb-[190px]">
        {/* content */}
       
        {/* imgs */}
        <div className="flex justify-center">
          <Image
            className="absolute bottom-[-5px] z-[9]"
            src={backimg}
            alt=""
            width={1484}
            height={555}
          />
          <Image
            className="absolute bottom-0 z-10"
            src={bussesimg}
            alt=""
            width={844.9}
            height={377}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
