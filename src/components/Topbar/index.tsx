"use client";

import Image from "next/image";
import { IconContext } from "react-icons";
import { HiOutlineArrowPathRoundedSquare } from "react-icons/hi2";
import { IoCallOutline } from "react-icons/io5";

import callicon from "@/public/icons/phone-call-svgrepo-com.svg";
import virtualicon from "@/public/icons/noun-virtual-2490432.svg";
import Text from "../ui/Text";

function Topbar() {
  return (
    <div className="w-full bg-[#191A05] p-3 ">
      <div className="max-w-[1340px] flex justify-end items-center ml-[74px] mob:ml-0 mob:justify-center">
        <button
          className=" uppercase px-[43px] mob:px-2 h-[64px] rounded-[150px] bg-[#191A05]   border-[#191A05] border text-[15px] font-inter font-medium leading-[25.5px] text-[#FFFFFF] "
          onClick={(event) => {
            window.location.href = "tel:+1213.838.0155";
            console.log("call");
          }}
        >
          <div className="flex gap-4 justify-center items-center mob:gap-1">
            
            <IconContext.Provider
              value={{ color: "white" , className: "global-class-name" }}
            >
              <div className="">
              <IoCallOutline style={{ width: "28px", height: "28px" }} />
              </div>
            </IconContext.Provider>
            
            <Text
              as="h2"
              className="text-[20px] xl:text-center text-[#E2E1DB] leading-[40px] font-bold mob:text-[18px] mob:leading-[26px] "
            >
              443-636-1824
            </Text>
          </div>
        </button>

        <div className="flex justify-center items-center gap-3 mob:ml-5">
          {/* <Image src={virtualicon} alt="" width={39} height={39} className="" /> */}
          <IconContext.Provider
              value={{ color: "white" , className: "global-class-name" }}
            >
              <div className="">
              <HiOutlineArrowPathRoundedSquare style={{ width: "30px", height: "30px" }} />
              </div>
            </IconContext.Provider>
            

          <Text className="text-[20px] xl:text-center text-[#E2E1DB] leading-[40px] font-bold mob:text-[18px] mob:leading-[26px]">
            Virtual Quote
          </Text>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
