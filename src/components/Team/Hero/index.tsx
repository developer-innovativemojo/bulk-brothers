import React from "react";
import Image from "next/image";

import Text from "@/components/ui/Text";

import backimg from "@/public/images/home/hero/herobgnew.png";
import img1 from "@/public/images/team/1.png";
import img2 from "@/public/images/team/2.png";
import img3 from "@/public/images/team/3.png";
import img4 from "@/public/images/team/4.png";
import img5 from "@/public/images/team/5.png";
import img6 from "@/public/images/team/6.png";

const Hero = () => {
  return (
    <div className="bg-[#48422D]  relative flex justify-center items-end  overflow-hidden">
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
          <div className="w-full max-w-[559.28px]   min-h-[472.28px] mob:min-h-[402.28px] relative flex items-center justify-center mob:mt-8 z-10">
            <div className="">
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

            <Image
              className="absolute top-0 left-[22%] mob:left-[20%] mob:max-w-[100px]"
              src={img1}
              alt=""
              width={130.28}
              height={130.28}
            />
            <Image
              className="absolute top-0 right-[22%] mob:right-[20%] mob:max-w-[100px]"
              src={img2}
              alt=""
              width={130.28}
              height={130.28}
            />
            <Image
              className="absolute top-[36%] left-[0%] mob:top-[37%] mob:max-w-[100px]"
              src={img6}
              alt=""
              width={130.28}
              height={130.28}
            />
            <Image
              className="absolute top-[36%] right-[0%] mob:top-[37%] mob:max-w-[100px]"
              src={img3}
              alt=""
              width={130.28}
              height={130.28}
            />
            <Image
              className="absolute bottom-0 left-[22%] mob:left-[20%] mob:max-w-[100px]"
              src={img5}
              alt=""
              width={130.28}
              height={130.28}
            />
            <Image
              className="absolute bottom-0 right-[22%] mob:right-[20%] mob:max-w-[100px]"
              src={img4}
              alt=""
              width={130.28}
              height={130.28}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
