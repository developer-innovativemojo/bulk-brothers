import React from "react";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

import Text from "../ui/Text";
import logo from "@/public/images/logo.png";
import Link from "next/link";
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
                <Image src={logo} alt="logobottom" width={138} height={138} />
              </Link>

              <Text
                as="p"
                className=" w-[350px] xl:w-full mob:max-w-full xl:flex xl:justify-center xl:text-center text-[#fff] text-[12px] leading-[22px] font-normal my-8 mob:my-4 "
              >
                <span className="max-w-[350px]">
                  Today, our global presence is a testament to our success,
                  managing substantial investments across diverse healthcare
                  sectors.
                </span>
              </Text>

              {/* social icons */}
              <div className=" hidden">
                <div className="flex gap-[30px]">
                  {/* facebook */}
                  {/* <FaFacebook className="text-[#00297A] cursor-pointer text-[18px] hover:opacity-75 " /> */}
                  {/* twiter */}
                  {/* <FaInstagram className="text-[#00297A] cursor-pointer text-[18px] hover:opacity-75 " /> */}
                  {/* insta */}
                  {/* <FaTwitter className="text-[#00297A] cursor-pointer text-[18px] hover:opacity-75 " /> */}
                  {/* linkdin */}
                  {/* <FaLinkedin className="text-[#00297A] cursor-pointer text-[18px] hover:opacity-75 " /> */}
                </div>
              </div>
            </div>

            {/* second col */}
              {/* list 1 */}
              <div className="xl:flex xl:justify-center mob:w-[50%]">
                <div className="">
                  <Text
                    as="h2"
                    className="font-bold xl:text-center mob:text-[14px] text-[#fff] text-[16px] leading-10 mb-4 mob:mb-0"
                  >
                    QUICK LINKS
                  </Text>
                  <Link href="/">
                    <Text
                      as="p"
                      className="text-[12px] xl:text-center text-[#fff] leading-[22px] font-normal mb-2"
                    >
                      Home
                    </Text>
                  </Link>
                  <Link href="/why-work-with-us">
                    <Text
                      as="p"
                      className="text-[12px] xl:text-center text-[#fff] leading-[22px] font-normal mb-2"
                    >
                      Why Work With Us
                    </Text>
                  </Link>
                  <Link href="/services">
                    <Text
                      as="p"
                      className="text-[12px] xl:text-center text-[#fff] leading-[22px] font-normal mb-2"
                    >
                      Services
                    </Text>
                  </Link>

                  <Link href="/contact-us">
                    <Text
                      as="p"
                      className="text-[12px] xl:text-center text-[#fff] leading-[22px] font-normal mb-2"
                    >
                      Book Now
                    </Text>
                  </Link>
                </div>
              </div>

              {/* list2 */}
              <div className="xl:flex xl:justify-center mob:w-[50%]">
                <div className=" ">
                  <Text
                    as="h2"
                    className="font-bold mob:text-center mob:text-[14px] text-[#fff] text-[16px] leading-10 mb-4 mob:mb-0 "
                  >
                    USEFUL LINKS
                  </Text>
                  <Link href="/team">
                    <Text
                      as="p"
                      className="text-[12px] mob:text-center text-[#fff] leading-[22px] font-normal mb-2"
                    >
                      Team
                    </Text>
                  </Link>
                  <Link href="/about-us">
                    <Text
                      as="p"
                      className="text-[12px] mob:text-center text-[#fff] leading-[22px] font-normal mb-2"
                    >
                      About Us
                    </Text>
                  </Link>

                  <Link href="/submit-your-proposal">
                    <Text
                      as="p"
                      className="text-[12px] mob:text-center text-[#fff] leading-[22px] font-normal mb-2"
                    >
                      Submit Proposal
                    </Text>
                  </Link>

                  <Link href="/services">
                    <Text
                      as="p"
                      className="text-[12px] mob:text-center text-[#fff] leading-[22px] font-normal mb-2"
                    >
                      What We Offer
                    </Text>
                  </Link>
                </div>
              </div>

            
          </div>
        </div>

        {/* bottom line */}

        <div className="flex justify-center w-full xl:pt-6 pb-10">
          <div className="max-w-[1127px] w-full xl:px-[5%]">
            <hr className="h-px mt-[0px] mb-6 bg-[#C0C0C0] border-0 dark:bg-[#C0C0C0]"></hr>

            <div className="flex justify-between">
              <Text
                as="p"
                className="text-[12px] text-[#fff] leading-[14.63px] font-monts font-normal"
              >
                Copyright © 2024
              </Text>

              <Text
                as="p"
                className="text-[12px] text-[#fff] leading-[14.63px] font-monts font-normal"
              >
                EEE CORP GROUP
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;