import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Text from "../ui/Text";
import Button from "../ui/Button";

import logo from "@/public/images/logowhite.png";
import facebook from "@/public/icons/facebook.svg";
import youtube from "@/public/icons/insta.svg";
import insta from "@/public/icons/youtube.svg";
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

              <div className="relative mb-12 max-w-[301px] flex mob:block items-center mob:justify-center mob:max-w-full">
                <div className="mob:flex mob:justify-center w-full max-w-[301px] mob:max-w-full">
                  <input
                    className="w-full max-w-[301px] h-[48px] px-5 rounded-[150px] bg-[#E2E1DB] placeholder:text-[#191A05] text-[15px] font-inter font-normal outline-none"
                    type="text"
                    placeholder="Email Address"
                  />
                </div>
                <div className="mob:flex mob:justify-center mob:w-full mob:mt-3 ">
                  <Button className="absolute mob:bg-[#48422D] mob:relative top-2 right-3 mob:right-0 h-[32px] mob:h-[48px] max-w-[114px] mob:max-w-[301px] font-medium uppercase tracking-[1px] text-[13px] leading-[15.73px] ">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>

            {/* second col */}
            {/* list 1 */}
            <div className="xl:flex xl:justify-center mob:w-full">
              <div className="">
                <Text
                  as="h2"
                  className="font-bold xl:text-center text-[#E2E1DB] text-[18px] leading-[22.97px] tracking-[1px] mb-4 mt-10    mob:mb-0"
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
                  <Link href="">
                    <Image
                      className=" cursor-pointer hover:opacity-75 "
                      src={facebook}
                      alt="fb"
                      width={26}
                      height={26}
                    />
                  </Link>
                  {/* insta */}
                  <Link href="https://www.instagram.com/Seanbulkbrosrideout/">
                    {" "}
                    <Image
                      className=" cursor-pointer hover:opacity-75 "
                      src={youtube}
                      alt="fb"
                      width={26}
                      height={26}
                    />
                  </Link>
                  {/* youtube */}
                  <Link href="https://www.youtube.com/channel/UCX7Pav3V76SucI4xclZiYww">
                    <Image
                      className=" cursor-pointer hover:opacity-75 "
                      src={insta}
                      alt="fb"
                      width={26}
                      height={26}
                    />
                  </Link>
                </div>
              </div>
            </div>

            {/* list2 */}
            <div className="xl:flex xl:justify-center mob:w-full">
              <div className=" ">
                <Text
                  as="h2"
                  className="font-bold xl:text-center text-[#E2E1DB] text-[18px] leading-[22.97px] tracking-[1px] mb-4 mt-10    mob:mb-0"
                >
                  Contact info
                </Text>
                <Text
                  as="p"
                  className=" w-[229px] xl:w-full mob:max-w-full xl:flex xl:justify-center xl:text-center text-[#E2E1DB] text-[14px] leading-[20px] font-inter font-normal my-5 mob:my-4 "
                >
                  Bulk Brothers services Maryland and surrounding states.
                </Text>

                {/* email */}
                <a href="mailto:info@bulkbrothersmove.com">
                  <div className="flex mob:justify-center  items-center gap-[13px] mt-4">
                    <MdEmail className="text-[#FFFFFF] cursor-pointer text-[37px] mob:text-[30px] hover:opacity-75 " />

                    <Text
                      as="p"
                      className=" xl:text-center text-[#E2E1DB] text-[14px] leading-[20px] font-inter font-normal my-5 p mob:my-4 "
                    >
                      info@bulkbrothersmove.com
                    </Text>
                  </div>
                </a>

                {/* phone number */}
                <a href="tel:443-636-1824">
                  <div className="flex mob:justify-center gap-[15px] mt-4">
                    {/* phone */}
                    <FaPhoneAlt className="text-[#FFFFFF] cursor-pointer text-[37px] mob:text-[30px] hover:opacity-75 " />
                    <Text
                      as="h2"
                      className="text-[24px] xl:text-center text-[#E2E1DB] leading-[40px] font-bold "
                    >
                      443-636-1824
                    </Text>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* bottom line */}

        <div className="flex justify-center w-full xl:pt-6 pb-4">
          <div className="max-w-[1127px] w-full xl:px-[5%]">
            <hr className="h-px mt-[0px] mb-3 bg-[#FFFFFF33]/20 border-0 "></hr>

            <div className="flex justify-between mob:block">
              <Text
                as="p"
                className=" mob:max-w-full xl:flex xl:justify-center xl:text-center text-[#E2E1DB] text-[15px] leading-[20px] font-inter font-normal my-5 mob:my-4 "
              >
                © 2024 Bulk Brothers. All Rights Reserved.
              </Text>

              <div className="flex mob:justify-center gap-[40px]">
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
