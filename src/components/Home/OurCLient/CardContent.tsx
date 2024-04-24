import React from 'react'
import Image from 'next/image'

import Text from '@/components/ui/Text'

import stars from "@/public/icons/starsclient.svg";interface CardContentProps {
    time: string;
    heading: string;
    review: string;
    name: string;
  }
  
  const CardContent: React.FC<CardContentProps> = ({ time, heading, review, name }) => {
   
  return (
    <>
      <div className="w-full flex justify-center ">
      <div className="w-full bg-[#FFFFFF] max-w-[397px] rounded-[4px] p-[30px] mt-[50px]">
          <div className="flex justify-between">
            <Image src={stars} alt="" width={148} height={29.04} />
            <Text as="p" className="text-[#191A05] text-[15px] leading-[27px]">
             {time}
            </Text>
          </div>

          <Text
            as="h2"
            className="text-[#191A05] font-bold text-[22px] leading-[28.07px] my-3"
          >
        {heading}
          </Text>

          <Text
            as="p"
            className="text-[15px]  text-[#191A05] leading-[25px] font-inter "
          >
            {review}
        
          </Text>
          <Text
            as="p"
            className="text-[16px]  text-[#191A05] leading-[22px] font-inter mt-3"
          >
            {name}
          </Text>
        </div>
      </div>
    </>
  )
}

export default CardContent
