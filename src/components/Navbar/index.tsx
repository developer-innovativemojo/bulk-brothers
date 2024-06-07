"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";

import Drawer from "../ui/Drawer";

import logo from "@/public/icons/logoupdated.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => setIsOpen(false);
  const onOpen = () => setIsOpen(true);

  useEffect(() => {
    if (isOpen) {
      // Select all list items
      const listItems = document.querySelectorAll(".list-items");

      // Set initial opacity to 0 and translateX to 20px
      gsap.set(listItems, { opacity: 0, x: 20 });

      // Iterate through list items and animate them
      gsap.to(listItems, {
        delay: 0.5,
        opacity: 1,
        x: 0,
        duration: 0.7, // Animation duration
        stagger: 0.2, // Stagger the animation by 0.2 seconds
        ease: "power2.out", // Easing function
      });
    }
  }, [isOpen]);

  return (
    <>
      <nav className="relative bg-[#48422D] min-h-[134px] z-50  w-full">
        <div className="flex justify-center items-center w-full min-h-[134px]">
          <div className="relative max-w-[1340px]  min-h-[134px] w-full flex flex-wrap items-center justify-between mx-auto py-4">
            <div className="flex    justify-between w-full  gap-[35px] pl-[5%] pb-4">
              <Link
                href="/"
                className="flex  mob:justify-start space-x-3 rtl:space-x-reverse"
              >
                <Image src={logo} alt="Flowbite Logo" width={105} height={84} />
              </Link>
              <div className="flex xl:pr-4 xl:hidden  pt-2">
                <button
                  // onClick={toggleMenu}
                  type="button"
                  className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden  focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 bg-gray-700 dark:ring-gray-600"
                  aria-controls="navbar-default"
                  aria-expanded={isOpen ? "true" : "false"}
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 17 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 1h15M1 7h15M1 13h15"
                    />
                  </svg>
                </button>

                <div
                  className={`${
                    isOpen ? "block" : "hidden"
                  } w-full md:block md:w-auto`}
                  id="navbar-default"
                >
                  {/* Your menu options */}
                  <ul className="font-normal mob:absolute mob:top-[100px] items-center mob:px-4 mob:left-0 mob:w-full z-50 flex flex-col py-4 md:p-0 mt-4 gap-[50px] md:flex-row  rtl:space-x-reverse md:mt-0  tab:bg-black">
                    <li>
                      <Link
                        href="/"
                        className="block  text-[15px] font-inter font-medium leading-[25.5px] text-[#FFFFFF]  uppercase"
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/about"
                        className="block  text-[15px] font-inter font-medium leading-[25.5px] text-[#FFFFFF]  uppercase"
                      >
                        Expertise
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services"
                        className="block  text-[15px] font-inter font-medium leading-[25.5px] text-[#FFFFFF]  uppercase"
                      >
                        Services
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/team"
                        className="block  text-[15px] font-inter font-medium leading-[25.5px] text-[#FFFFFF]  uppercase"
                      >
                        Team
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/gallery"
                        className="block  text-[15px] font-inter font-medium leading-[25.5px] text-[#FFFFFF]  uppercase"
                      >
                        Gallery
                      </Link>
                    </li>
                    <li className="">
                      <div className=" xl:hidden">
                        <Link
                          href="/contact"
                          className="block  text-[15px] font-inter font-medium leading-[25.5px] text-[#FFFFFF] "
                        >
                          <button className=" uppercase tab:hidden px-[23px] h-[44px] rounded-[150px] bg-[#191A05]   border-[#191A05] border text-[15px] font-inter font-medium leading-[25.5px] text-[#FFFFFF] ">
                            Get Free Estimate
                          </button>
                        </Link>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* tab and mob  menu*/}
              <div className="hidden xl:block pr-[5%] ">
                <div
                  className="relative cursor-pointer flex pr-2 pt-[5px]"
                  onClick={onOpen}
                >
                  <button
                    // onClick={toggleMenu}
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm border border-[#fff]/90 bg-[#fff] text-[#00297A] rounded-lg  "
                    aria-controls="navbar-default"
                    aria-expanded={isOpen ? "true" : "false"}
                  >
                    <span className="sr-only">Open main menu</span>
                    <svg
                      className="w-5 h-5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 17 14"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 1h15M1 7h15M1 13h15"
                      />
                    </svg>
                  </button>
                </div>
                <div className="relative z-40">
                  <Drawer isOpen={isOpen} onClose={onClose}>
                    <div className="flex items-center h-full w-full ">
                      <ul className="font-normal  w-full  mob:left-0 mob:w-full z-50 flex flex-col py-4 md:p-0 mt-4 gap-[0px]  rtl:space-x-reverse md:mt-0 ">
                        <a
                          href="/"
                          className="block  text-[20px] font-inter font-medium leading-[25.5px] text-[#FFFFFF]  " 
                        >
                          <li className="flex justify-center py-[15px] list-items">
                            Home
                          </li>
                        </a>
                        <hr className="h-px  bg-[#C0C0C0] border-0 dark:bg-[#C0C0C0]"></hr>

                        <a
                          href="/about"
                          className="block  text-[20px] font-inter font-medium leading-[25.5px] text-[#FFFFFF]  "
                        >
                          <li className="flex justify-center py-[15px] list-items">
                            Expertise
                          </li>
                        </a>
                        <hr className="h-px  bg-[#C0C0C0] border-0 dark:bg-[#C0C0C0]"></hr>

                        <a
                          href="/services"
                          className="block  text-[20px] font-inter font-medium leading-[25.5px] text-[#FFFFFF]  "
                        >
                          <li className="flex justify-center py-[15px] list-items">
                            Services
                          </li>
                        </a>
                        <hr className="h-px  bg-[#C0C0C0] border-0 dark:bg-[#C0C0C0]"></hr>

                        <a
                          href="/team"
                          className="block  text-[20px] font-inter font-medium leading-[25.5px] text-[#FFFFFF]  "
                        >
                          <li className="flex justify-center py-[15px] list-items">
                            Team
                          </li>
                        </a>
                        <hr className="h-px  bg-[#C0C0C0] border-0 dark:bg-[#C0C0C0]"></hr>

                        <a
                          href="/gallery"
                          className="block  text-[20px] font-inter font-medium leading-[25.5px] text-[#FFFFFF]  "
                        >
                          <li className="flex justify-center py-[15px] list-items">
                            Gallery
                          </li>
                        </a>
                        <hr className="h-px  bg-[#C0C0C0] border-0 dark:bg-[#C0C0C0]"></hr>

                        <a
                          href="/contact"
                          className="flex justify-center  text-[16px] font-dmsans font-normal leading-7 text-[#FFFFFF]"
                        >
                          <li className="hidden xl:block mt-5 list-items">
                            <button className=" hidden xl:block  px-[23px] py-[11px] rounded-[150px] bg-[#FFFFFF]   border-[#FFFFFF] border text-[15px] font-inter font-medium leading-[25.5px] text-[#191A05] ">
                              Get Free Estimate
                            </button>
                          </li>
                        </a>
                      </ul>
                    </div>
                  </Drawer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
