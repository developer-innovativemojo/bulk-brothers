"use client";
import { useState, MouseEvent, FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Text from "../ui/Text";
import Button from "../ui/Button";

import logo from "@/public/icons/logoupdated.svg";
import phone from "@/public/images/phonefooter.png";
import facebook from "@/public/icons/facebook.svg";
import youtube from "@/public/icons/insta.svg";
import insta from "@/public/icons/youtube.svg";
// import Subscribe from "./Subscribe";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<string>("");

  const sendMail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("/api/sendSuscribe", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          email,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage("Subscribed Successfully!");
        alert("Subscribed successfully!");
        setEmail("");
      } else {
        throw new Error(data.message || "Failed to send email");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send email. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

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

              <form
                onSubmit={sendMail}
                className="relative mb-12 max-w-[301px] flex mob:block items-center mob:justify-center mob:max-w-full"
              >
                <div className="mob:flex mob:justify-center w-full max-w-[301px] mob:max-w-full">
                  <input
                    className="w-full max-w-[301px] h-[48px] pl-5 pr-32 mob:pr-5 rounded-[150px] bg-[#FFFFFF] placeholder:text-[#191A05] text-[15px] font-inter font-normal outline-none"
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setEmailError("");
                    }}
                    required
                  />
                </div>
                <div className="mob:flex mob:justify-center mob:w-full mob:mt-3 ">
                  <Button className="absolute mob:bg-[#48422D] mob:relative top-2 right-3 mob:right-0 h-[32px] mob:h-[48px] max-w-[114px] mob:max-w-[301px] font-medium uppercase tracking-[1px] text-[13px] leading-[15.73px] ">
                    {loading ? "Subscribing..." : "Subscribe"}
                  </Button>
                </div>
              </form>
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
                <Link href="/about">
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

                <Link href="/contact">
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
                  <Link href="https://www.facebook.com/BulkBrosMovingTrashandhauling/">
                    {" "}
                    <Image
                      className=" cursor-pointer hover:opacity-75 "
                      src={facebook}
                      alt="fb"
                      width={26}
                      height={26}
                    />
                  </Link>

                  {/* insta */}
                  <Link href="https://www.instagram.com/bulkbros_ent/">
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
                  <Link href="https://www.youtube.com/@seanrideout8301">
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
                  className=" w-[229px] xl:w-full mob:max-w-full xl:flex xl:justify-center xl:text-center text-[#E2E1DB] text-[14px] leading-[20px] font-inter font-normal my-5 mb-0 mob:my-4 "
                >
                  Bulk Brothers services Maryland and surrounding states.
                </Text>

                {/* email */}
                <a href="mailto:info@bulkbrothersmove.com">
                  <div className="flex mob:justify-center  items-center gap-[7px] mt-4">
                    <MdEmail className="text-[#FFFFFF] cursor-pointer text-[24px]  hover:opacity-75 " />

                    <Text
                      as="p"
                      className=" xl:text-center text-[#E2E1DB] text-[14px] leading-[20px] font-inter font-normal my-0  mob:my-4 "
                    >
                      info@bulkbrothersmove.com
                    </Text>
                  </div>
                </a>


                {/* phone number */}
                <a href="tel:+1 443-636-1824">
                  <div className="flex mob:justify-center items-center gap-[15px] mt-4">
                    {/* phone */}
                    {/* <FaPhoneAlt className="text-[#FFFFFF] cursor-pointer text-[37px] mob:text-[30px] hover:opacity-75 " /> */}
                    <Image src={phone} alt="" width={49} height={49} />
                    <Text
                      as="h2"
                      className="text-[24px] xl:text-center text-[#E2E1DB] leading-[40px] font-bold "
                    >
                      +1 443-636-1824
                    </Text>
                  </div>
                </a>
                
                <button className="bg-white px-3 rounded-[150px] w-full mt-4">
                  <div className="flex gap-4 justify-center items-center">
                    <Text
                      as="h2"
                      className="text-[20px] xl:text-center text-black leading-[40px] font-bold "
                    >
                      Virtual Quote
                    </Text>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* bottom line */}

        <div className="flex justify-center w-full xl:pt-6 pb-4">
          <div className="max-w-[1127px] w-full xl:px-[5%]">
            <hr className="h-px mt-[0px] mb-3 bg-[#FFFFFF33]/20 border-0 "></hr>

            <div className="flex justify-center mob:block">
              <Text
                as="p"
                className=" mob:max-w-full xl:flex xl:justify-center text-center text-[#E2E1DB] text-[15px] leading-[20px] font-inter font-normal my-5 mob:my-4 "
              >
                © 2024 Bulk Brothers. All Rights Reserved.
              </Text>

              {/* <div className="flex mob:justify-center gap-[40px]">
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
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
