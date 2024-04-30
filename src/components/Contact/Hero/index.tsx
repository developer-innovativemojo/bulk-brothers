import React from "react";
import Image from "next/image";
import Link from "next/link";
import Text from "@/components/ui/Text";

import bussesimg from "@/public/images/contact/contactbghero.png";
import buss from "@/public/images/contact/buss.png";
import backimg from "@/public/images/home/hero/herobgnew.png";

import facebook from "@/public/icons/facebook.svg";
import youtube from "@/public/icons/insta.svg";
import insta from "@/public/icons/youtube.svg";
import location from "@/public/icons/location.svg";
import email from "@/public/icons/email.svg";
import phone from "@/public/icons/phone.svg";
import clock from "@/public/icons/clock.svg";

const Hero = () => {
  return (
    <div className="pb-16 mob:pb-10">
      <div className="bg-[#48422D] min-h-[400px]  mob:min-h-full mob:pt-16 relative flex justify-center items-end  mb-[300px] mob:mb-0 ">
        <div className="w-full max-w-[1484px]  h-full  relative pt-[0px] ">
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
              width={1274.8}
              height={205.97}
            />
          </div>

          <div className="flex justify-center w-full absolute tab:hidden z-10 top-[-300px] mob:top-5">
            <div className="w-full bg-[#191A05] max-w-[953px] min-h-[604px]  relative flex flex-wrap justify-center items-center ">
                {/* left */}
              <div className="flex flex-col w-full max-w-[508px] mob:py-10">
                <div className="flex justify-center w-full">
                  <div className="max-w-[362px]">
                    <Text
                      as="h1"
                      className="text-[#FFFFFF]  text-[64px]  leading-[70px] mob:text-[40px] mob:leading-[40px] max-w-[339px] uppercase"
                    >
                      Get a Free Estimate!
                    </Text>
                    <Text
                      as="p"
                      className="text-[#FFFFFF]/70  text-[17px]  leading-[27px] max-w-[362px] my-6 "
                    >
                      Get rid of unwanted furniture, clothes, appliances, and
                      other junk in your property with help from Bulk Brothers
                    </Text>
                    <Text
                      as="p"
                      className="text-[#FFFFFF]/70  text-[17px]  leading-[27px] max-w-[362px] "
                    >
                      Contact us today via phone or email to request a free
                      estimate.
                    </Text>

                    {/* social icons */}
                    <div className="flex  gap-[30px] mt-10">
                      {/* facebook */}
                      <Image
                        className=" cursor-pointer hover:opacity-75 "
                        src={facebook}
                        alt="fb"
                        width={26}
                        height={26}
                      />
                      {/* insta */}
                      <Link href="https://www.instagram.com/Seanbulkbrosrideout/">
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
                      <Link href="https://www.youtube.com/channel/UCX7Pav3V76SucI4xclZiYww">
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
              {/* right */}
              <div className="flex flex-col w-full max-w-[445px] bg-[#48422D] min-h-[604px] ">
                <Image
                  className="ml-[-80px] mob:ml-0 mt-5"
                  src={buss}
                  alt=""
                  width={452.2}
                  height={251}
                />

                {/* details */}
                <div className="flex justify-center w-full">
                  <div className="max-w-[359.8px]">

                    {/* LOCATION         */}
                    <div className="flex items-start gap-5 mt-5">
                      <Image
                        className=" "
                        src={location}
                        alt=""
                        width={32.86}
                        height={32.86}
                      />
                      <Text
                        as="p"
                        className="text-[#FFFFFF]/70  text-[15px]  leading-[27px] max-w-[269.04px] "
                      >
                        Bulk Brothers services Maryland and surrounding states.
                      </Text>
                    </div>
                  
                    {/* email */}
                    <div className="flex items-start gap-5 mt-4">
                      <Image
                        className=" "
                        src={email}
                        alt=""
                        width={32.86}
                        height={32.86}
                      />
                      <Text
                        as="p"
                        className="text-[#FFFFFF]/70  text-[15px]  leading-[27px] max-w-[269.04px] "
                      >
                       info@bulkbrothersmove.com
                      </Text>
                    </div>
                    {/* phone */}
                    <div className="flex items-start gap-5 mt-5">
                      <Image
                        className=" "
                        src={phone}
                        alt=""
                        width={32.86}
                        height={32.86}
                      />
                      <Text
                        as="p"
                        className="text-[#FFFFFF]/70  text-[15px]  leading-[27px] max-w-[269.04px] "
                      >
                       443-636-1824
                      </Text>
                    </div>
                    {/* clock */}
                    <div className="flex items-start gap-5 mt-5">
                      <Image
                        className=" "
                        src={clock}
                        alt=""
                        width={32.86}
                        height={32.86}
                      />
                      <Text
                        as="p"
                        className="text-[#FFFFFF]/70  text-[15px]  leading-[27px] max-w-[269.04px] "
                      >
                     <span className="font-semibold" > Monday - Thursday: </span> 5:00 AM – 7:00 PM  <span className="font-semibold"> Friday - Saturday: </span>
                      7:00 AM – 4:30 PM 
                      <span  className="font-semibold">Sunday: </span> 7:00 AM – 1:00 PM
                      </Text>
                    </div>


                  </div>
                </div>
              </div>
            </div>
          </div>




        </div>
      </div>


      {/* mob */}
<div className="hidden tab:block">
<div className="w-full bg-[#191A05] max-w-[953px] min-h-[604px]   relative flex flex-wrap justify-center items-center mob:mt-[-50px] z-20">
                {/* left */}
              <div className="flex flex-col w-full max-w-[508px] mob:py-10">
                <div className="flex justify-center w-full">
                  <div className="max-w-[362px]">
                    <Text
                      as="h1"
                      className="text-[#FFFFFF] text-center  text-[64px]  leading-[70px] mob:text-[40px] mob:leading-[40px] max-w-[339px] uppercase"
                    >
                      Get a Free Estimate!
                    </Text>
                    <Text
                      as="p"
                      className="text-[#FFFFFF]/70 text-center text-[17px]  leading-[27px] max-w-[362px] my-6 "
                    >
                      Get rid of unwanted furniture, clothes, appliances, and
                      other junk in your property with help from Bulk Brothers
                    </Text>
                    <Text
                      as="p"
                      className="text-[#FFFFFF]/70  text-[17px] text-center  leading-[27px] max-w-[362px] "
                    >
                      Contact us today via phone or email to request a free
                      estimate.
                    </Text>

                    {/* social icons */}
                    <div className="flex justify-center gap-[30px] mt-10">
                      {/* facebook */}
                      <Image
                        className=" cursor-pointer hover:opacity-75 "
                        src={facebook}
                        alt="fb"
                        width={26}
                        height={26}
                      />
                      {/* insta */}
                      <Link href="https://www.instagram.com/Seanbulkbrosrideout/">
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
                      <Link href="https://www.youtube.com/channel/UCX7Pav3V76SucI4xclZiYww">
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
              {/* right */}
              <div className="flex flex-col w-full max-w-[445px] bg-[#48422D] min-h-[604px] ">
                <Image
                  className="ml-[-80px] mob:ml-0 mt-5"
                  src={buss}
                  alt=""
                  width={452.2}
                  height={251}
                />

                {/* details */}
                <div className="flex justify-center w-full">
                  <div className="max-w-[359.8px]">

                    {/* LOCATION         */}
                    <div className="flex items-start gap-5 mt-5">
                      <Image
                        className=" "
                        src={location}
                        alt=""
                        width={32.86}
                        height={32.86}
                      />
                      <Text
                        as="p"
                        className="text-[#FFFFFF]/70  text-[15px]  leading-[27px] max-w-[269.04px] "
                      >
                        Bulk Brothers services Maryland and surrounding states.
                      </Text>
                    </div>
                  
                    {/* email */}
                    <div className="flex items-start gap-5 mt-4">
                      <Image
                        className=" "
                        src={email}
                        alt=""
                        width={32.86}
                        height={32.86}
                      />
                      <Text
                        as="p"
                        className="text-[#FFFFFF]/70  text-[15px]  leading-[27px] max-w-[269.04px] "
                      >
                       info@bulkbrothersmove.com
                      </Text>
                    </div>
                    {/* phone */}
                    <div className="flex items-start gap-5 mt-5">
                      <Image
                        className=" "
                        src={phone}
                        alt=""
                        width={32.86}
                        height={32.86}
                      />
                      <Text
                        as="p"
                        className="text-[#FFFFFF]/70  text-[15px]  leading-[27px] max-w-[269.04px] "
                      >
                       443-636-1824
                      </Text>
                    </div>
                    {/* clock */}
                    <div className="flex items-start gap-5 mt-5">
                      <Image
                        className=" "
                        src={clock}
                        alt=""
                        width={32.86}
                        height={32.86}
                      />
                      <Text
                        as="p"
                        className="text-[#FFFFFF]/70  text-[15px]  leading-[27px] max-w-[269.04px] "
                      >
                     <span className="font-semibold" > Monday - Thursday: </span> 5:00 AM – 7:00 PM  <span className="font-semibold"> Friday - Saturday: </span>
                      7:00 AM – 4:30 PM 
                      <span  className="font-semibold">Sunday: </span> 7:00 AM – 1:00 PM
                      </Text>
                    </div>


                  </div>
                </div>
              </div>
            </div>
</div>
    </div>
  );
};

export default Hero;
