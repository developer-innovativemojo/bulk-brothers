import React from "react";
import Image from "next/image";

import Button from "@/components/ui/Button";
import Text from "@/components/ui/Text";

import calender from "@/public/icons/calender.svg"

const Estimate = () => {
  return (
    <div className="bg-[#191A05] min-h-[200px] flex justify-center items-center">
      <div className=" w-full max-w-[1138.5px] flex flex-wrap items-end gap-5">
        <div className="flex flex-col">
          <Text as="h1" className="text-[36px]">
            Get Free Estimate today!
          </Text>
          <Text as="p" className="text-[17px] leading-[27px] max-w-[366px]">
            Veteran owned and operated company here to serve you.
          </Text>
        </div>

        <div className="flex-col ml-10 mob:ml-0">
          <div className="relative  max-w-[247px] flex items-center">
            <input
              className="w-full max-w-[247px] h-[51px] px-5 rounded-[150px] bg-[#E2E1DB] text-[15px] font-inter font-normal outline-none"
              type="text"
              placeholder="Moving From"
            />
            <Image className="absolute  right-5  " src={calender} alt="" width={24} height={24}/>
            {/* <Button className="absolute  right-3 h-[32px] max-w-[114px] uppercase tracking-[1px] text-[13px] leading-[15.73px] ">
              Subscribe
            </Button> */}
          </div>
        </div>

        <div className="flex-col ">
          <div className="relative  max-w-[247px] flex items-center">
            <input
              className="w-full max-w-[247px] h-[51px] px-5 rounded-[150px] bg-[#E2E1DB] text-[15px] font-inter font-normal outline-none"
              type="text"
              placeholder="Moving To"
            />
            <Image className="absolute  right-5  " src={calender} alt="" width={24} height={24}/>
          </div>
        </div>

        <div className="flex-col ">
          <Button className=" bg-[#E2E1DB] text-[#191A05]  h-[52px] max-w-[149px] px-[32px] uppercase tracking-[1px] text-[15px] leading-[18.15px] ">
          Estimate
            </Button>
        </div>


      </div>
    </div>
  );
};

export default Estimate;
