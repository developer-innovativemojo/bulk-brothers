"use client";
import React, { useEffect } from "react";
import { useSearchParams } from "next/navigation";

import MovingService from "./MovingService";
import DeliveryServices from "./DeliveryServices";
import TrashMover from "./TrashMover";
import Labor from "./Labor";

import Text from "@/components/ui/Text";


const WhatWeOffer = () => {

  const params = useSearchParams();
  const id = params.get('id');

  useEffect(() => { 
    if (id) {
      const elements = document.querySelectorAll('.scroll-to-id');
      elements.forEach(element => {
        if (element.id === id) {
          const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
          const scrollToPosition = elementTop - 150;
          window.scrollTo({ top: scrollToPosition, behavior: 'smooth' });
        }
      });
    }
  }, [id]);


  return (
    <>
      <div className="bg-[#E9E9E9]  flex justify-center items-center py-16">
        <div className=" w-full flex items-center justify-center ">
          <div
            className="w-full max-w-[1078px] "
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <Text
              as="h1"
              className="text-[#191A05] text-center text-[45px] font-bold leading-[57.42px] uppercase mb-10"
            >
              What we offer
            </Text>

            <MovingService id={id} />
            <DeliveryServices id={id} />
            <TrashMover id={id} />
            <Labor id={id} />
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatWeOffer;
