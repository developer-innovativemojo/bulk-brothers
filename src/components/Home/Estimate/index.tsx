"use client";
import React, { useState } from "react";
import Image from "next/image";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Button from "@/components/ui/Button";
import Text from "@/components/ui/Text";

import calender from "@/public/icons/calender.svg";

const Estimate = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [showPlaceholder, setShowPlaceholder] = useState(true);

  const handleDateChange = (date: Date | null) => {
    setStartDate(date);
    setShowPlaceholder(!date); // Show placeholder if date is null, otherwise hide it
  };

  return (
    <div className="bg-[#191A05] min-h-[200px] flex justify-center items-center  mob:py-10">
      <div className=" w-full max-w-[1169.5px] flex flex-wrap mob:justify-center items-end gap-5 mob: px-5">
        <div className="flex flex-col mob:w-full">
          <Text
            as="h1"
            className="text-[36px] text-[#E2E1DB] mob:text-center mob:text-[30px] mob:leading-[35px] uppercase"
          >
            Get Free Estimate today!
          </Text>
          <Text
            as="p"
            className="text-[17px] leading-[27px] max-w-[366px] mob:text-center mob:max-w-full mob:leading-[35px]"
          >
            Veteran owned and operated company here to serve you.
          </Text>
        </div>

        <div className="flex-col ml-10 mob:ml-0">
          <div className="relative z-30  max-w-[247px] flex items-center selected={startDate} onChange={(date) => setStartDate(date)} ">
            <DatePicker
              placeholderText={showPlaceholder ? "Moving From" : ""}
              className="w-full max-w-[247px] h-[51px] px-5 rounded-[150px] bg-[#E2E1DB] text-[15px] font-inter font-normal outline-none "
              selected={startDate}
              onChange={(date) => handleDateChange(date)}
              isClearable={true}
            />
            <Image
              className="absolute  right-5  "
              src={calender}
              alt=""
              width={24}
              height={24}
            />
            {/* <Button className="absolute  right-3 h-[32px] max-w-[114px] uppercase tracking-[1px] text-[13px] leading-[15.73px] ">
              Subscribe
            </Button> */}
          </div>
        </div>

        <div className="flex-col ">
          <div className="relative  max-w-[247px] flex items-center z-20">
          <DatePicker
              placeholderText={showPlaceholder ? "Moving To" : ""}
              className="w-full max-w-[247px] h-[51px] px-5 rounded-[150px] bg-[#E2E1DB] text-[15px] font-inter font-normal outline-none"
              selected={startDate}
              onChange={(date) => handleDateChange(date)}
              isClearable={true}
            />
            <Image
              className="absolute  right-5  "
              src={calender}
              alt=""
              width={24}
              height={24}
            />
          </div>
        </div>

        <div className="flex-col ">
          <Button className=" bg-[#E2E1DB] text-[#191A05]  h-[52px] max-w-[149px] px-[32px] uppercase tracking-[1px] text-[15px] leading-[18.15px] ">
            Estimate
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Estimate;
