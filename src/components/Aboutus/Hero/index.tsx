import React from "react";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaYoutube, FaPhoneAlt } from "react-icons/fa";

import Text from "@/components/ui/Text";

import backimg from "@/public/images/aboutus/bg.png";


const Hero = () => {
  return (
    <div className="bg-[#48422D] min-h-[366px] relative flex justify-center   ">
      <Image
        className="absolute bottom-[0px] mob:bottom-[60px] z-[9] "
        src={backimg}
        alt=""
        width={1484}
        height={555}
      />
      <div className="w-full max-w-[1484px] max-h-[386px] h-full relative ">
        {/* content */}
        <div className="flex justify-center  relative z-10 ">
          <div className="bg-[#191A05] w-full max-w-[860px] min-h-[366px] rounded-[20px] flex justify-center absolute top-[30px]  items-center  z-[11] mb-[-70px]">
            <div className="relative z-[12]">
              <Text
                as="h1"
                className="text-[#FFFFFF] text-center font-rajdhani "
              >
                {" "}
                Veteran owned and <br /> operated company <br /> here to serve you.
              </Text>
              <div className="flex justify-center gap-[30px] mt-10">
                  {/* facebook */}
                  <FaFacebook className="text-[#FFFFFF] cursor-pointer text-[26px] hover:opacity-75 " />
                  {/* insta */}
                  <FaInstagram className="text-[#FFFFFF] cursor-pointer text-[26px] hover:opacity-75 " />
                  {/* youtube */}
                  <FaYoutube className="text-[#FFFFFF] cursor-pointer text-[26px] hover:opacity-75 " />
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
