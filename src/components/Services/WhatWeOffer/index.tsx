import React from "react";

import MovingService from "./MovingService";
import DeliveryServices from "./DeliveryServices";
import TrashMover from "./TrashMover";
import Labor from "./Labor";

import Text from "@/components/ui/Text";

const WhatWeOffer = () => {
  return (
    <>
      <div className="bg-[#E9E9E9]  flex justify-center items-center py-16">
        <div className=" w-full flex items-center justify-center ">
          <div className="w-full max-w-[1078px] ">
            <Text as="h1" className="text-[#191A05] text-center text-[45px] font-bold leading-[57.42px] uppercase mb-10">What we offer</Text>

            <MovingService />
            <DeliveryServices />
            <TrashMover />
            <Labor />
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatWeOffer;
