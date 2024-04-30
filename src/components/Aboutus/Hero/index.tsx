import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaYoutube, FaPhoneAlt } from "react-icons/fa";

import Text from "@/components/ui/Text";

import backimg from "@/public/images/home/hero/herobgnew.png";
import facebook from "@/public/icons/facebook.svg";
import youtube from "@/public/icons/insta.svg";
import insta from "@/public/icons/youtube.svg";

const Hero = () => {
  return (
    <div className="bg-[#48422D] min-h-[366px] relative flex justify-center  mob:px-5  ">
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
                className="text-[#FFFFFF] text-center font-rajdhani mob:text-[35px] mob:leading-[38px] uppercase "
              >
                {" "}
                Veteran owned and <br /> operated company <br /> here to serve you.
              </Text>
              <div className="flex justify-center gap-[30px] mt-10">
                
                   {/* facebook */}
                   <Link href="https://www.facebook.com/BulkBrosMovingTrashandhauling/">
                        {" "}
                      <Image
                        className=" cursor-pointer hover:opacity-75 "
                        src={facebook}
                        alt="fb"
                        width={26}
                        height={26}
                      />
                      </Link>

                      {/* insta */}
                      <Link href="https://www.instagram.com/bulkbros_ent/">
                        {" "}
                        <Image
                          className=" cursor-pointer hover:opacity-75 "
                          src={youtube}
                          alt="fb"
                          width={26}
                          height={26}
                        />
                      </Link>
                      {/* youtube */}
                      <Link href="https://www.youtube.com/@seanrideout8301">
                        <Image
                          className=" cursor-pointer hover:opacity-75 "
                          src={insta}
                          alt="fb"
                          width={26}
                          height={26}
                        />
                      </Link>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
