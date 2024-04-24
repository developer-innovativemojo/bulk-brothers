import React from "react";
import Image from "next/image";

import Text from "@/components/ui/Text";

import formbg from "@/public/images/home/formbg.png";
const Contactus = () => {
  return (
    <div className=" min-h-[830px] relative flex justify-center items-center  ">
      <div className="w-full max-w-[1484px]  h-full  flex justify-center">
        <Image
          className="bg-background-image bg-cover  bg-top bg-no-repeat absolute top-0 left-0 w-full h-full z-0"
          src={formbg}
          alt=""
          width={1440}
          height={830}
        />

        <div className="max-w-[1140px] w-full relative z-10 mt-[13%]">
          <Text
            as="h1"
            className="text-[45px] text-center text-[#FFFFFF] leading-[57.42px]"
          >
            Get Free Estimate today!
          </Text>
          <div className="flex justify-center my-5 pb-2">
            <Text
              as="p"
              className="text-[17px] text-center leading-[27px] font-inter max-w-[787px]"
            >
              Get rid of unwanted furniture, clothes, appliances, and other junk
              in your property with help from Bulk Brothers. Contact us today
              via phone or email to request a free estimate.
            </Text>
          </div>

          {/* form */}
          <form action="" className="flex flex-wrap justify-center">
            <div className="flex flex-col  relative w-full max-w-[570px] border-t lg:border-r border-[#FFFFFF]">
              <input
                className=" flex flex-col  text-[17px] text-[#FFFFFF] leading-[25px] font-medium font-inter  bg-transparent placeholder-white border-l  px-5 w-full max-w-[570px] h-[80px]  outline-none"
                type="text"
                placeholder="First Name"
              />
            </div>
            <div className="flex flex-col  relative w-full max-w-[570px] border border-[#FFFFFF]">
              <input
                className=" flex flex-col  text-[17px] text-[#FFFFFF] leading-[25px] font-medium font-inter  bg-transparent placeholder-white  px-5 w-full max-w-[570px] h-[80px]  outline-none"
                type="text"
                placeholder="Last Name"
              />
            </div>

            <div className="flex flex-col  relative w-full max-w-[570px]  border lg:border-t-0 border-[#FFFFFF]">
              <input
                className=" flex flex-col  text-[17px] text-[#FFFFFF] leading-[25px] font-medium font-inter placeholder-white  bg-transparent px-5 w-full max-w-[570px] h-[80px]  outline-none"
                type="text"
                placeholder="Phone"
              />
            </div>

            <div className="flex flex-col  relative w-full max-w-[570px] border-r border-b lg:border-l border-[#FFFFFF]">
              <input
                className="  text-[17px] text-[#FFFFFF] leading-[25px] font-medium font-inter  bg-transparent placeholder-white  px-5 w-full max-w-[570px] h-[80px]  outline-none"
                type="text"
                placeholder="Date"
              />

              <button type="button" className="absolute top-0 right-0 bg-[#E2E1DB] w-full max-w-[217px] h-[80px] ">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
