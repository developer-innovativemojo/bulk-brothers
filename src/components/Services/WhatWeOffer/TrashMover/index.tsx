import React, { useEffect } from "react";
import Image from "next/image";

import trashimg from "@/public/images/services/s3.png";
import star from "@/public/icons/star.svg";

import Text from "@/components/ui/Text";

interface WhatWeOfferProps {
  id: any; // Define id prop
}

const MovingService: React.FC<WhatWeOfferProps> = ({ id }) => {
  return (
    <>
      <div
        id="trash-service"
        className={id === "trash-service" ? "scroll-to-id" : ""}
      >
        <div className="w-full bg-[#191A05] min-h-[400px] flex flex-wrap gap-20 mob:gap-[3rem] justify-center items-center py-4 mob:px-5 mob:py-10">
          <div className="flex flex-col">
            <Image
              className="mob:w-full"
              src={trashimg}
              alt=""
              width={339}
              height={281}
            />
          </div>
          <div className="flex flex-col">
            <div className="w-full max-w-[515px]">
              <Text
                as="h1"
                className="text-[#E2E1DB] text-[65px] leading-[54.6px] flex mob:block items-center mob:items-start mob:justify-center mob:text-center uppercase"
              >
                03{" "} <br className="hidden mob:block" />
                <span className="text-[32px] text-[#FFFFFF] mob:hidden ml-4">
                  Trash Removal Services
                </span>
              </Text>
              <Text
                as="h1"
                className="text-[#E2E1DB] text-[65px] leading-[34.6px] py-3  mob:text-center uppercase hidden mob:block "
              >
                <span className="text-[32px] text-[#FFFFFF]  ">
                  Trash Removal Services
                </span>
              </Text>
              <Text
                as="p"
                className="text-[#FFFFFF]/70  text-[17px] leading-[27px] mob:text-center"
              >
                Whether large or small, Bulk Brothers can take care of all of
                your clutter, trash, and junk removal needs. 
              </Text>
              {/* stars */}
              <div className="flex  mt-4">
                <Image src={star} alt="" width={17} height={17} />
                <Text
                  as="p"
                  className="text-[#FFFFFF]/70  text-[17px] leading-[27px] ml-3 "
                >
                  Residential
                </Text>
              </div>
              <div className="flex  mt-1">
                <Image src={star} alt="" width={17} height={17} />
                <Text
                  as="p"
                  className="text-[#FFFFFF]/70  text-[17px] leading-[27px] ml-3 "
                >
                  Business
                </Text>
              </div>

              <div className="flex  mt-1">
                <Image src={star} alt="" width={17} height={17} />
                <Text
                  as="p"
                  className="text-[#FFFFFF]/70  text-[17px] leading-[27px] ml-3 "
                >
                  Large and small jobs
                </Text>
              </div>
              <div className="flex  mt-1">
                <Image src={star} alt="" width={17} height={17} />
                <Text
                  as="p"
                  className="text-[#FFFFFF]/70  text-[17px] leading-[27px] ml-3 "
                >
                  House renovation and clean outs
                </Text>
              </div>
              <div className="flex  mt-1">
                <Image src={star} alt="" width={17} height={17} />
                <Text
                  as="p"
                  className="text-[#FFFFFF]/70  text-[17px] leading-[27px] ml-3 "
                >
                  Household items
                </Text>
              </div>
              <div className="flex  mt-1">
                <Image src={star} alt="" width={17} height={17} />
                <Text
                  as="p"
                  className="text-[#FFFFFF]/70  text-[17px] leading-[27px] ml-3 "
                >
                  Construction materials
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovingService;
