import React from "react";
import Image from "next/image";

import Text from "@/components/ui/Text";

import leftimg from "@/public/images/home/twentyyear2.png";
import Button from "@/components/ui/Button";
import Link from "next/link";
const TeamSupport = () => {
  return (
    <>
      <div className="bg-[#E2E1DB] min-h-[200px] flex justify-center items-center py-16 mob:px-5">
        <div className=" w-full max-w-[1188.5px] flex flex-wrap items-center mob:justify-center gap-10 pb-[100px]" data-aos="fade-up"
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
                as="h1"
                className="text-[#191A05] text-[45px] leading-[55px] max-w-[477px] uppercase mb-3 mob:text-center mob:text-[35px] mob:leading-[38px]"
              >
                Your dedicated support team.
              </Text>

              <Text
                as="p"
                className="text-[#191A05] text-[17px] leading-[27px] max-w-[475px] mob:text-center"
              >
                Bulk Brothers has been trusted for over 20 years to provide
                moving, trash removal, and hauling services for residents and
                commercial businesses. We provide free estimates for all of our
                services. All of our services are priced competitively and
                customized to meet each customer’s needs to allow you to save
                money without sacrificing quality and efficiency.  We have
                crates available for rent and delivery, provide assembly and
                disassembly, and provide wrapping services upon
              </Text>
              <div className="mob:flex mob:justify-center">
                <Link className="w-full mob:flex mob:justify-center" href="/contact">
                <Button className="uppercase max-w-[253px] h-[58px] tracking-[1px] mt-[30px]">
                  Get Free Estimate
                </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamSupport;
