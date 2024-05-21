import React from "react";
import Image from "next/image";

import Text from "@/components/ui/Text";

import leftimg from "@/public/images/aboutus/twenty2.png";

const YearsService = () => {
  return (
    <>
      <div className="bg-[#E2E1DB] min-h-[200px] flex justify-center items-center pt-[130px] mob:px-5">
        <div className=" w-full max-w-[1188.5px] flex flex-wrap items-center gap-10 pb-[100px]" data-aos="fade-up"
  data-aos-duration="1000"
  data-aos-easing="ease-in-out">
          <div className="flex flex-col ">
            <Image
              className="  "
              src={leftimg}
              alt=""
              width={599}
              height={566}
            />
          </div>

          <div className="flex flex-col  ">
            <div className="relative  max-w-[498px] ">
              <Text
                as="p"
                className="text-[#191A05] text-[17px] leading-[27px] max-w-[498px] mob:text-center"
              >
                {" "}
                <span className="font-bold"> Bulk Brothers </span> is a veteran
                owned and operated company based in Baltimore, Maryland. Bulk
                Brothers provides excellent moving, junk hauling and trash
                removal services at highly competitive rates. Owner, Sean
                Rideout, has proudly served his country in the military for over
                20 years. Sean, along with co-owner, Donte Snipes have made it
                their mission to make Bulk Brothers a trusted company of the
                communities they serve. Together they always strive to provide
                excellent service to Bulk Brothers customers.
              </Text>

              <Text
                as="p"
                className="text-[#191A05] text-[17px] leading-[27px] max-w-[498px] mt-8 mob:text-center"
              >
                Bulk Brothers specializes in both commercial and residential
                services including moving, hauling, and trash removal. No matter
                how big or small the task at hand is, count on Bulk Brothers to
                perform everything with passion and excellence. Bulk Brothers is
                also fully licensed, bonded, and insured for your safety and
                protection.
              </Text>
              <Text
                as="p"
                className="text-[#191A05] text-[17px] leading-[27px] max-w-[498px] mt-8 mob:text-center"
              >
                Bulk Brothers also serves the community by hosting food and
                clothing drives for the homeless. Bulk Brothers employees and
                trains individuals who are looking for an opportunity to make a
                difference in their community.
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default YearsService;
