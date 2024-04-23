import React from "react";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaYoutube, FaPhoneAlt } from "react-icons/fa";

import Text from "../ui/Text";
import logo from "@/public/images/logo.png";
import Link from "next/link";
import Button from "../ui/Button";
// import Subscribe from "./Subscribe";

const Footer = () => {
  return (
    <>
      <div className="min-h-[430px] bg-[#191A05]">
        <div className="flex justify-center items-center w-full pt-[70px]">
          <div className="max-w-[1138.5px] w-full flex xl:block justify-between mob:px-5">
            {/* first col */}
            <div className=" mob:mb-6">
              {/* logo */}
              <Link href="/" className="xl:flex xl:justify-center">
                <Image src={logo} alt="logobottom" width={96} height={76.8} />
              </Link>

              <Text
                as="p"
                className=" w-[372px] xl:w-full mob:max-w-full xl:flex xl:justify-center xl:text-center text-[#E2E1DB] text-[14px] leading-[20px] font-inter font-normal my-5 mob:my-4 "
              >
                <span className="max-w-[372px]">
                  Bulk Brothers is a veteran owned and operated company based in
                  Baltimore, Maryland. We provides excellent moving, junk
                  hauling and trash removal services at highly competitive
                  rates.
                </span>
              </Text>
              <Text
                as="p"
                className=" w-[372px] xl:w-full mob:max-w-full xl:flex xl:justify-center xl:text-center text-[#E2E1DB] text-[14px] leading-[20px] font-inter font-normal mb-4 mob:my-4 "
              >
                Subscribe to our newsletter
              </Text>

              <div className="relative mb-12 max-w-[301px] flex items-center">
                <input
                  className="w-full max-w-[301px] h-[48px] px-5 rounded-[150px] bg-[#E2E1DB] text-[15px] font-inter font-normal outline-none"
                  type="text"
                  placeholder="Email Address"
                />
                <Button className="absolute  right-3 h-[32px] max-w-[114px] uppercase tracking-[1px] text-[13px] leading-[15.73px] ">
                  Subscribe
                </Button>
              </div>
            </div>

            {/* second col */}
            {/* list 1 */}
            <div className="xl:flex xl:justify-center mob:w-[50%]">
              <div className="">
                <Text
                  as="h2"
                  className="font-bold xl:text-center text-[#E2E1DB] text-[18px] leading-[22.97px] tracking-[1px] mb-4 mt-10  mob:text-[14px]  mob:mb-0"
                >
                  QUICK LINKS
                </Text>
                <Link href="/">
                  <Text
                    as="p"
                    className="text-[15px] xl:text-center text-[#E2E1DB] leading-[40px] font-normal "
                  >
                    Home
                  </Text>
                </Link>
                <Link href="/why-work-with-us">
                  <Text
                    as="p"
                    className="text-[15px] xl:text-center text-[#E2E1DB] leading-[40px] font-normal "
                  >
                    Expertise
                  </Text>
                </Link>
                <Link href="/services">
                  <Text
                    as="p"
                    className="text-[15px] xl:text-center text-[#E2E1DB] leading-[40px] font-normal "
                  >
                    Services
                  </Text>
                </Link>

                <Link href="/contact-us">
                  <Text
                    as="p"
                    className="text-[15px] xl:text-center text-[#E2E1DB] leading-[40px] font-normal "
                  >
                    Contact
                  </Text>
                </Link>

                {/* social icons */}
                <div className="flex gap-[15px] mt-4">
                  {/* facebook */}
                  <FaFacebook className="text-[#FFFFFF] cursor-pointer text-[26px] hover:opacity-75 " />
                  {/* insta */}
                  <FaInstagram className="text-[#FFFFFF] cursor-pointer text-[26px] hover:opacity-75 " />
                  {/* youtube */}
                  <FaYoutube className="text-[#FFFFFF] cursor-pointer text-[26px] hover:opacity-75 " />
                </div>
              </div>
            </div>

            {/* list2 */}
            <div className="xl:flex xl:justify-center mob:w-[50%]">
              <div className=" ">
                <Text
                  as="h2"
                  className="font-bold xl:text-center text-[#E2E1DB] text-[18px] leading-[22.97px] tracking-[1px] mb-4 mt-10  mob:text-[14px]  mob:mb-0"
                >
                  Contact info
                </Text>
                <Text
                  as="p"
                  className=" w-[229px] xl:w-full mob:max-w-full xl:flex xl:justify-center xl:text-center text-[#E2E1DB] text-[15px] leading-[20px] font-inter font-normal my-5 mob:my-4 "
                >
                  Bulk Brothers services Maryland and surrounding states.
                </Text>

                {/* email */}
                <Text
                  as="p"
                  className=" w-[229px] xl:w-full mob:max-w-full xl:flex xl:justify-center xl:text-center text-[#E2E1DB] text-[15px] leading-[20px] font-inter font-normal my-5 pb-2 mob:my-4 "
                >
                  info@bulkbrothersmove.com
                </Text>

                {/* phone number */}
                <div className="flex gap-[15px] mt-4">
                  {/* phone */}
                  <FaPhoneAlt className="text-[#FFFFFF] cursor-pointer text-[39px] hover:opacity-75 " />
                  <Text
                    as="h2"
                    className="text-[24px] xl:text-center text-[#E2E1DB] leading-[40px] font-bold "
                  >
                    443-636-1824
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* bottom line */}

        <div className="flex justify-center w-full xl:pt-6 pb-4">
          <div className="max-w-[1127px] w-full xl:px-[5%]">
            <hr className="h-px mt-[0px] mb-3 bg-[#FFFFFF33]/20 border-0 "></hr>

            <div className="flex justify-between">
              <Text
                as="p"
                className=" mob:max-w-full xl:flex xl:justify-center xl:text-center text-[#E2E1DB] text-[15px] leading-[20px] font-inter font-normal my-5 mob:my-4 "
             
              >
               © 2024 Bulk Brothers. All Rights Reserved.
              </Text>

           <div className="flex gap-[40px]">
           <Text
                as="p"
                className=" mob:max-w-full cursor-pointer xl:flex xl:justify-center xl:text-center text-[#E2E1DB] text-[15px] leading-[20px] font-inter font-normal my-5 mob:my-4 "
             
              >
                Privacy Policy
              </Text>
           <Text
                as="p"
                className="  mob:max-w-full cursor-pointer xl:flex xl:justify-center xl:text-center text-[#E2E1DB] text-[15px] leading-[20px] font-inter font-normal my-5 mob:my-4 "
             
              >
           Terms & Conditions
              </Text>
           </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
