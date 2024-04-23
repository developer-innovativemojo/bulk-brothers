import React from "react";
import Image from "next/image";

import backimg from "@/public/images/home/yearsofservice.png";
import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";
const YearsService = () => {
  return (
    <>
      <div className="">
        <div className="bg-[#191A05] min-h-[200px] flex justify-center items-center pb-[100px]">
          <div className=" w-full max-w-[1440px] flex justify-end">
            <div className="w-full max-w-[1098px] mt-[-100px] relative">
              <Image src={backimg} alt="" width={1098} height={520} />

              <div className="absolute left-12 top-10">
                <Text
                  as="h1"
                  className="text-[65px] text-[#E2E1DB] font-bold leading-[82.94px]"
                >
                  10
                </Text>
                <Text
                  as="h2"
                  className="text-[30px] text-[#E2E1DB] font-bold leading-[38.28px]"
                >
                  years of service
                </Text>
              </div>

              {/* card */}
              <div className="bg-[#FFFFFF] w-full max-w-[441px] p-[40px] absolute right-[15%] bottom-[-80px]  ">
                <Text
                  as="p"
                  className="text-[18px] text-[#191A05] font-normal leading-[30px]"
                >
                 If you are moving to a new home trust Bulk Brothers to make sure all your items make it to their new destination safely.
                </Text>
                <Button className="uppercase max-w-[253px] h-[58px] tracking-[1px] mt-[30px]">Get Free Estimate</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default YearsService;
