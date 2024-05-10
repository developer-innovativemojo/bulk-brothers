import React from "react";
import Image from "next/image";

import Text from "@/components/ui/Text";

import bgw from "@/public/images/team/members/whitebg.png";
import fb from "@/public/icons/fbteam.svg";
import insta from "@/public/icons/instateam.svg";
import Button from "@/components/ui/Button";
interface MemberProps {
  name: string;
  title: string;
  imgSrc: any;
 
}

const ContentMembers: React.FC<MemberProps> = ({
  name,
  title,
  imgSrc,

}) => {
  return (
    <div>
      {/* member 1 */}
      <div className="flex flex-col relative min-h-[483px] mt-6">
        <Image
          className="absolute top-0 z-0"
          src={bgw}
          alt=""
          width={349}
          height={483}
        />

        <div className="w-full max-w-[349px] relative z-10 ">
          <Image className="" src={imgSrc} alt="" width={349} height={276} />
          <div className="bottom px-[40px] pt-[0px]">
            {/* name */}
            <Text
              as="h2"
              className="text-[22px] text-[#2B281B] font-bold uppercase"
            >
              {name}
            </Text>
            {/* title */}
            <Text
              as="p"
              className="text-[17px] text-[#2B281B] leading-[27px]  mb-5"
            >
              {title}
            </Text>
            {/* <div className="flex gap-[15px] ">
              <Image className="" src={fb} alt="" width={26} height={26} />
              <Image className="" src={insta} alt="" width={26} height={26} />
            </div> */}

            {/* button */}
            {/* <div className="flex justify-center mt-5">
              <Button className="w-full max-w-[200px] h-[58px] uppercase">
                view details
              </Button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentMembers;
