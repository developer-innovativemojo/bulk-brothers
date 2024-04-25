import React from "react";
import Image from "next/image";

import Text from "@/components/ui/Text";

interface ContentProps {
  heading?: string;
  text?: string;
  imageSrc: any;
  iconSrc?: any;
}
const Content: React.FC<ContentProps> = ({
  heading,
  text,
  imageSrc,
  iconSrc,
}) => {
  return (
    <>
      <div className="flex flex-col relative">
      
       

        <div className="w-full max-w-[560px] mob:max-w-[260px] min-h-[295px] border border-[#FFFFFF33]/20 flex flex-wrap mob:justify-center items-center gap-7 py-[6px] px-2">
          <div className="flex flex-col  ">
            <div className="relative  max-w-[248px] ">
            {iconSrc ? (
            <Image
            className="absolute left-0 bottom-0 z-10"
            src={iconSrc}
            alt=""
            width={76}
            height={76}
          />
          ) : null}
              <Image src={imageSrc} alt="" width={248} height={281} />
            </div>
          </div>
          <div className="flex flex-col items-center ">
            <div className="relative  max-w-[253px] ">
              <Text
                as="h2"
                className="text-[22px] tracking-[1px] font-bold  text-[#FFFFFF] leading-[28.07px] mob:text-center"
              >
                {heading}
              </Text>
              <Text
                as="p"
                className="text-[17px]  text-[#FFFFFF]/70 leading-[27px] mt-2 mob:text-center"
              >
                {text}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
