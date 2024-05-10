import React from "react";
import Image from "next/image";


import bussesimg from "@/public/images/services/servicehero1.png";
import backimg from "@/public/images/home/hero/herobgnew.png";


const Hero = () => {
  return (
    <div className="bg-[#48422D] min-h-[400px] mob:min-h-full mob:pt-16 relative flex justify-center items-end  overflow-hidden" >
       <Image
            className="absolute w-full bottom-[-5px] z-[9]"
            src={backimg}
            alt=""
            width={1484}
            height={555}
          />
      <div className="w-full max-w-[1484px] max-h-[785px] h-full relative pt-[0px] pb-[190px]"  >
        {/* content */}
       
        {/* imgs */}
        <div className="flex justify-center" >
         
          <Image
           data-aos="fade-up"
           data-aos-duration="1000"
           data-aos-easing="ease-in-out"
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
