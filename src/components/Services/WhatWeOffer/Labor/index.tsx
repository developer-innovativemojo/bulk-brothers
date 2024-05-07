import React, { useEffect } from "react";
import Image from "next/image";

import laborimg from "@/public/images/services/laboeservice.png";
import star from "@/public/icons/star.svg";

import Text from "@/components/ui/Text";

interface WhatWeOfferProps {
  id: any; // Define id prop
}
const Labor: React.FC<WhatWeOfferProps> = ({ id }) => {
  return (
    <>
      <div
        id="labor-service"
        className={id === "labor-service" ? "scroll-to-id" : ""}
      >
        <div
          id={id}
          className="w-full bg-[#48422D] flex justify-center min-h-[400px] mob:px-5 mob:py-5"
        >
          <div className="w-full max-w-[937px]   flex flex-wrap justify-between items-center py-4">
            <div className="flex flex-col mob:w-full mob:justify-center">
              <div className="mob:block hidden  w-full mob:mb-[3rem]">
                <Image
                  className="w-full"
                  src={laborimg}
                  alt=""
                  width={339}
                  height={281}
                />
              </div>
            </div>

            <div className="flex flex-col ">
              <div className="w-full max-w-[561px]">
                <Text
                  as="h1"
                  className="text-[#E2E1DB] text-[65px] leading-[54.6px] flex items-center mob:items-start mob:justify-center mob:text-center uppercase"
                >
                  04{" "}
                  <span className="text-[32px] text-[#FFFFFF] mob:hidden ml-4">
                    Labor Only Services
                  </span>
                </Text>
                <Text
                  as="h1"
                  className="text-[#E2E1DB] text-[65px] leading-[54.6px] mob:text-center uppercase hidden mob:block "
                >
                  <span className="text-[32px]  ">Labor Only Services</span>
                </Text>
                <Text
                  as="p"
                  className="text-[#FFFFFF]/70  text-[17px] leading-[27px] mob:text-center "
                >
                  We provide a variety of labor only services when customers
                  need someone to do the heavy lifting.
                </Text>

                {/* stars */}
                <div className="flex   mt-6">
                  <Image src={star} alt="" width={17} height={17} />
                  <Text
                    as="p"
                    className="text-[#FFFFFF]/70  text-[17px] leading-[27px] ml-3 "
                  >
                    Storage unit clean out
                  </Text>
                </div>
                <div className="flex mt-1">
                  <Image src={star} alt="" width={17} height={17} />
                  <Text
                    as="p"
                    className="text-[#FFFFFF]/70  text-[17px] leading-[27px] ml-3 "
                  >
                    Furniture moving
                  </Text>
                </div>
                <div className="flex  mob:items-start mt-1">
                  <Image
                    className="mob:mt-1"
                    src={star}
                    alt=""
                    width={17}
                    height={17}
                  />
                  <Text
                    as="p"
                    className="text-[#FFFFFF]/70 text-[17px]  leading-[27px] ml-3 "
                  >
                    Furniture and item assembly and disassembly
                  </Text>
                </div>
              </div>
            </div>

            <div className="flex flex-col mob:hidden mob:mt-[5rem]">
              <Image src={laborimg} alt="" width={339} height={281} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Labor;
