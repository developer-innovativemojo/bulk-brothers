"use client";

import Image from "next/image";
import { IconContext } from "react-icons";
import { HiOutlineArrowPathRoundedSquare } from "react-icons/hi2";
import { IoCallOutline } from "react-icons/io5";


import Text from "../ui/Text";

function Topbar() {
  return (
    <div className="w-full bg-[#191A05] p-1 ">
      <div className="max-w-[1340px] flex justify-end items-center ml-[74px] tab:ml-[0px] tab:justify-center mob:ml-0 mob:justify-center mob:flex-row-reverse mob:gap-[10px] mob:px-5">
        <button
          className=" uppercase px-[43px] mob:px-2  mob:h-auto rounded-[150px] bg-[#191A05]   border-[#191A05] border text-[15px] font-inter font-medium leading-[25.5px] text-[#FFFFFF] "
          onClick={(event) => {
            window.location.href = "tel:+443.636.1824";
            console.log("call");
          }}
        >
          <div className="flex gap-4 justify-center items-center mob:gap-1 mob:pl-[30px]">
            
            <IconContext.Provider
              value={{ color: "white" , className: "global-class-name" }}
            >
              <div className="">
              <IoCallOutline className="mob:w-[20px] mob:h-[20px] w-[28px] h-[28px]"  />
              </div>
            </IconContext.Provider>
            
            <Text
              as="h2"
              className="text-[20px] xl:text-center text-[#E2E1DB] leading-[40px] font-bold mob:text-[15px] mob:leading-[26px] "
            >
              443-636-1824
            </Text>
          </div>
        </button>

        <div className="flex justify-center items-center gap-3 mob:ml-0 animate-bounce mob:gap-1 mob:px-2">
         
          <IconContext.Provider
              value={{ color: "white" , className: "global-class-name" }}
            >
              <div className="">
              <HiOutlineArrowPathRoundedSquare className="mob:w-[22px] mob:h-[22px] w-[30px] h-[30px]" />
              </div>
            </IconContext.Provider>
            

          <Text className="text-[20px] xl:text-center text-[#E2E1DB] leading-[40px] font-bold mob:text-[15px] mob:leading-[26px]">
            Virtual Quote
          </Text>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
