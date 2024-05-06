import React from "react";
import Image from "next/image";

import Text from "@/components/ui/Text";

import leftimg from "@/public/images/home/whowearenew1.png";

const WhoWeAre = () => {
  return (
    <>
      <div className="bg-[#E2E1DB] min-h-[200px] flex justify-center items-center py-16">
        <div className=" w-full max-w-[1188.5px] flex flex-wrap items-center gap-10 pb-[100px] mob:px-5">
          <div className="flex flex-col ">
            <Image
              className="  "
              src={leftimg}
              alt=""
              width={599}
              height={566}
            />
            {/* <Button className="absolute  right-3 h-[32px] max-w-[114px] uppercase tracking-[1px] text-[13px] leading-[15.73px] ">
              Subscribe
            </Button> */}
          </div>

          <div className="flex flex-col  ">
            <div className="relative  max-w-[498px]  ">
              <Text
                as="p"
                className="text-[#191A05] text-[17px] leading-[27px] max-w-[498px] mob:text-center"
              >
                {" "}
                <span className="font-bold"> Bulk Brothers </span> is a veteran owned and
                operated company based in Baltimore, Maryland. Bulk Brothers
                provides excellent moving, junk hauling and trash removal
                services at highly competitive rates. Owner, Sean Rideout, has
                proudly served his country in the military for over 20 years.
                Sean, along with co-owner, Donte Snipes have made it their
                mission to make Bulk Brothers a trusted company of the
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhoWeAre;
