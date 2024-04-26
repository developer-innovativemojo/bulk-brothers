import React from "react";
import Image from "next/image";

import Text from "@/components/ui/Text";

import bg from "@/public/images/services/craterentalbg.png";
import crate from "@/public/images/services/crateimg.png";
import Button from "@/components/ui/Button";
const CrateRental = () => {
  return (
    <>
      <div className="bg-[#48422D]  relative flex justify-center items-end  overflow-hidden">
        <Image
          className="absolute top-0"
          src={bg}
          alt=""
          width={1445}
          height={545}
        />
        <div className="w-full max-w-[1005px] ml-[80px] mob:ml-0 mob:px-5 min-h-[545px] relative flex flex-wrap  items-center justify-between ">
          <div className="flex flex-col">
            <div className="w-full max-w-[388px]">
              <Text as="h1" className="text-[#E2E1DB] text-[64px] leading-[71.66px]">Crate Rental and Delivery</Text>
              <Text as="p" className="mt-4 text-[#E2E1DB] text-[17px] leading-[27px]">We deliver our strong durable crates for you to pack your items. You can transport them yourself or we can do it for you!</Text>
            <Button className="mt-8 max-w-[253px] min-h-[58px] text-[#FFFFFF] text-[15px] bg-transparent font-inter font-medium border border-[#FFFFFF] uppercase ">Get Free Estimate</Button>
            </div>
          </div>
          <div className="flex flex-col">
          <Image
          className=""
          src={crate}
          alt=""
          width={575}
          height={424}
        />
          </div>

        </div>
      </div>
    </>
  );
};

export default CrateRental;
