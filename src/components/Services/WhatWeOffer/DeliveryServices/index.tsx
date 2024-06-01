import React, { useEffect } from "react";
import Image from "next/image";

import movingimg from "@/public/images/services/s2.png";
import star from "@/public/icons/star.svg";

import Text from "@/components/ui/Text";

interface WhatWeOfferProps {
  id: any; // Define id prop
}

const DeliveryServices: React.FC<WhatWeOfferProps> = ({ id }) => {

 
  return (
    <>
     <div id="delivery-service" className={id === 'delivery-service' ? 'scroll-to-id' : ''}>
    <div id={id} className="w-full bg-[#48422D] flex justify-center min-h-[400px] mob:px-5 mob:py-5">
      <div className="w-full max-w-[937px]   flex flex-wrap justify-between items-center py-4">


<div className="flex flex-col mob:w-full mob:justify-center">
<div className="mob:block hidden  w-full mob:mb-[3rem]">
<Image className="w-full" src={movingimg} alt="" width={339} height={281} />

</div>
        </div>

        <div className="flex flex-col ">
          <div className="w-full max-w-[561px]">
            <Text
              as="h1"
              className="text-[#E2E1DB] text-[65px] leading-[54.6px]  flex mob:text-center mob:block items-center uppercase mob:justify-center "
            >
              02 <br className="hidden mob:block" /> <span className="text-[32px]  text-[#FFFFFF] ml-4">Delivery Services</span>
            </Text>
            <Text as="p" className="text-[#FFFFFF]/70  text-[17px] leading-[27px] mob:text-center ">
              Don’t pay high delivery fees or rent a truck to pick up that new
              item you love. Let Bulk Brothers take care of your delivery needs.
            </Text>

            <Text
              as="p"
              className="text-[#FFFFFF]/70  text-[17px] leading-[27px] mt-5 mb-1 mob:text-left" 
            >
              Pickup and delivery service for
            </Text>

            {/* stars */}
            <div className="flex ">
              <Image src={star} alt="" width={17} height={17} />
              <Text
                as="p"
                className="text-[#FFFFFF]/70  text-[17px] leading-[27px] ml-3 "
              >
                Furniture
              </Text>
            </div>
            <div className="flex mt-1 ">
              <Image src={star} alt="" width={17} height={17} />
              <Text
                as="p"
                className="text-[#FFFFFF]/70  text-[17px] leading-[27px] ml-3 "
              >
                Appliances
              </Text>
            </div>
            <div className="flex mt-1 ">
              <Image src={star} alt="" width={17} height={17} />
              <Text
                as="p"
                className="text-[#FFFFFF]/70  text-[17px] leading-[27px] ml-3 "
              >
                Other large items
              </Text>
            </div>
          </div>
        </div>

        <div className="flex flex-col mob:justify-center mob:mt-[5rem] mob:hidden">
          <Image src={movingimg} alt="" width={339} height={281} />
        </div>
      </div>
      </div>
      </div>
    </>
  );
};

export default DeliveryServices;
