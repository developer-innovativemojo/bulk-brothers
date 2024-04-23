import React from "react";
import Image from "next/image";

import Text from "@/components/ui/Text";

import bussesimg from "@/public/images/home/hero/busses.png";
import backimg from "@/public/images/home/hero/herobg.png";
import airl from "@/public/images/home/hero/air-l.png";
import airr from "@/public/images/home/hero/air-r.png";

const Hero = () => {
  return (
    <div className="bg-[#48422D] min-h-[735px] relative flex justify-center items-center  overflow-hidden">
      <div className="w-full max-w-[1484px] max-h-[785px] h-full relative pt-[0px] pb-[190px]">
        {/* content */}
        <div className="flex justify-center  relative z-10">
          <div className="bg-[#191A05]/85 w-full max-w-[860px] min-h-[418px] rounded-[20px] flex justify-center  items-center relative z-[11]">

          <Image
            className="absolute left-[-50px] bottom-[170px] z-[10]"
            src={airl}
            alt=""
            width={172.57}
            height={89.85}
          />
          <Image
            className="absolute right-[-50px] bottom-[170px] z-[10]"
            src={airr}
            alt=""
            width={172.57}
            height={89.85}
          />

            <div className="relative z-[12]">
              <Text as="h1" className="text-[#FFFFFF] text-center font-rajdhani ">
                {" "}
                Move with strength, <br /> move with us
              </Text>
             <div className="flex justify-center">
             <Text
                as="p"
                className="text-[#FFFFFF] font-rajdhani text-center max-w-[345px] leading-[27px] mt-2 "
              >
                {" "}
                Don’t pay high delivery fees or rent a truck to pick up that new
                item you love. Let Bulk Brothers take care of the delivery
                needs.
              </Text>
             </div>
            </div>
          </div>
        </div>
        {/* imgs */}
        <div className="flex justify-center">
          <Image
            className="absolute bottom-[130px] mob:bottom-[60px] z-[9]"
            src={backimg}
            alt=""
            width={1484}
            height={555}
          />
          <Image
            className="absolute bottom-[10px] z-10"
            src={bussesimg}
            alt=""
            width={1290.6}
            height={331}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
