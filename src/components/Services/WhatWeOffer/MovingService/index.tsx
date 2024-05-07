import React, { useEffect } from "react";
import Image from "next/image";

import movingimg from "@/public/images/services/movingservice.png";
import star from "@/public/icons/star.svg";

import Text from "@/components/ui/Text";
interface WhatWeOfferProps {
  id: any; // Define id prop
}

const MovingService: React.FC<WhatWeOfferProps> = ({ id }) => {

  return (
    <>

    <div id="moving-service" className={id === 'moving-service' ? 'scroll-to-id' : ''}>
      <div  className="w-full bg-[#191A05] min-h-[400px] flex flex-wrap gap-20 mob:gap-[3rem] justify-center items-center py-4 mob:px-5 mob:py-10">
        <div className="flex flex-col mob:justify-center">
          <Image className="mob:w-full" src={movingimg} alt="" width={339} height={281} />
        </div>
        <div className="flex flex-col">
          <div className="w-full max-w-[515px] mob:max-w-full">
            <Text
              as="h1"
              className=" text-[#E2E1DB] text-[65px] leading-[54.6px] flex items-center uppercase mob:justify-center mob:text-center"
            >
              01 <span className="text-[32px] text-[#FFFFFF]  ml-4">Moving Services</span>
            </Text>
            <Text as="p" className="text-[#FFFFFF]/70 text-[17px] leading-[27px] mob:text-center">
              You dont have to pick between affordable rates or quality
              service. Trust Bulk Brothers to get your items to your new home
              safely and efficiently at affordable rates.
            </Text>
            <div className="flex  mt-4">
              <Image src={star} alt="" width={17} height={17} />
              <Text
                as="p"
                className="text-[#FFFFFF]/70 text-[17px] leading-[27px] ml-3 "
              >
                Residential Business
              </Text>
            </div>
            <div  className="flex  mt-1">
              <Image src={star} alt="" width={17} height={17} />
              <Text
                as="p"
                className="text-[#FFFFFF]/70 text-[17px] leading-[27px] ml-3 "
              >
                Business
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
