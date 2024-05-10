import React from "react";
import Image from "next/image";

import backimg from "@/public/images/home/yearsofservice.png";
import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";

import mask from "@/public/images/home/Mask group.png";
import Link from "next/link";


const YearsService = () => {
  return (
    <>
      <div className="">
        <div className="bg-[#191A05] min-h-[200px] flex justify-center items-center pb-[100px] mob:px-5 relative" data-aos="fade-up"
  data-aos-duration="1000"
  data-aos-easing="ease-in-out">
  <Image className="absolute  w-full " src={mask} alt="" width={1440} height={1546}/>
          
          <div className=" w-full max-w-[1440px] flex justify-end">
            <div className="w-full max-w-[1098px] mt-[-100px] relative">
              <Image src={backimg} alt="" width={1098} height={520} />

              <div className="absolute left-12 top-10">
                <Text
                  as="h1"
                  className="text-[65px] text-[#E2E1DB] font-bold leading-[82.94px]"
                >
                  20
                </Text>
                <Text
                  as="h2"
                  className="text-[30px] text-[#E2E1DB] font-bold leading-[38.28px] uppercase"
                >
                  years of service
                </Text>
              </div>

              {/* card */}
              <div className="bg-[#FFFFFF] w-full max-w-[441px] p-[40px] absolute right-[15%] bottom-[-80px] mob:right-0 ">
                <Text
                  as="p"
                  className="text-[18px] text-[#191A05] font-normal leading-[30px]"
                >
                 If you are moving to a new home trust Bulk Brothers to make sure all your items make it to their new destination safely.
                </Text>
                <Link className="w-full " href="/contact">
                <Button className="uppercase max-w-[253px] h-[58px] tracking-[1px] mt-[30px]">Get Free Estimate</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default YearsService;
