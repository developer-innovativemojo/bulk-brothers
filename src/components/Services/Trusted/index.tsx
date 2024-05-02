import React from "react";
import Image from "next/image";

import Text from "@/components/ui/Text";

import leftimg from "@/public/images/services/leftnew.png";

const Trusted = () => {

  return (
    <>
      <div className="bg-[#3A3524]  flex justify-center items-center py-16">
        <div className=" w-full max-w-[1110px] flex flex-wrap items-center justify-between pb-[] mob:px-5">
          <div className="flex flex-col ">
            <Image
              className="  "
              src={leftimg}
              alt=""
              width={554.82}
              height={423}
            />
           
          </div>

          <div className="flex flex-col  ">
            <div className="relative  max-w-[485px]  ">
              <Text
                as="h2"
                className="text-[#FFFFFF] text-[40px] leading-[40px] font-bold  mob:text-center uppercase"
              >
                Bulk Brothers has been trusted for over 20 years
              </Text>
              <Text
                as="p"
                className="text-[#FFFFFF] text-[17px] leading-[27px] max-w-[498px] mob:text-center mt-2"
              >
                {" "}
                to provide moving, trash removal, and hauling services for residents and commercial businesses. We provide free estimates for all of our services. All of our services are priced competitively and customized to meet each customer’s needs to allow you to save money without sacrificing quality and efficiency.  We have crates available for rent and delivery, provide assembly and disassembly, and provide wrapping services upon request. Serving Maryland and surrounding states!
              </Text>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export default Trusted
