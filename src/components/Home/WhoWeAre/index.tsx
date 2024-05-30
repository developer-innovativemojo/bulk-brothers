import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import Text from "@/components/ui/Text";

import leftimg from "@/public/images/home/whoweare2.png";
import Link from "next/link";

interface WhoWeAreProps {
  scrollCallback: () => void;
}

const WhoWeAre: React.FC<WhoWeAreProps> = ({ scrollCallback }) => {
  return (
    <>
      <div className="bg-[#E2E1DB] min-h-[200px] flex justify-center items-center py-16 ">
        <div
          className=" w-full max-w-[1253.5px] flex flex-wrap items-center gap-10 pb-[100px] mob:px-5"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <div className="flex flex-col ">
            <Image
              className="  "
              src={leftimg}
              alt=""
              width={599}
              height={566}
            />
            {/* <Button className="absolute  right-3 h-[32px] max-w-[114px] uppercase tracking-[1px] text-[13px] leading-[15.73px] ">
              Subscribe
            </Button> */}
          </div>

          <div className="flex flex-col  ">
            <div className="relative  max-w-[498px]  ">
              <Text
                as="p"
                className="text-[#191A05] text-[17px] leading-[27px] max-w-[498px] mob:text-center"
              >
                {" "}
                <span className="font-bold"> Bulk Brothers, </span> a
                veteran-owned company in Baltimore, MD, offers top-notch moving,
                junk hauling, and trash removal services at competitive rates.
                Founded by Sean Rideout, a 20-year military veteran, and
                co-owned by Donte Snipes, Bulk Brothers is dedicated to serving
                their community.
              </Text>

              <Text
                as="p"
                className="text-[#191A05] text-[17px] leading-[27px] max-w-[498px] mt-8 mob:text-center"
              >
                They handle commercial and residential jobs of all sizes with
                passion and excellence. Fully licensed, bonded, and insured,
                they ensure client safety and protection. For reliable service,
                choose Bulk Brothers.
              </Text>
            </div>

            {/* CTA buttons */}

            <div className="flex items-center justify-between gap-4 mt-[35px] mob:mb-1 mob:flex-col z-[50] ">
                <div className=" flex justify-center gap-4">
                  <Link href="/contact">
                    <button
                      onClick={scrollCallback}
                      className=" bg-primary-dark text-center min-w-[133px] font-inter text-white px-4 py-2 rounded-md cursor-pointer uppercase"
                    >
                      Moving
                    </button>
                  </Link>

                  <button
                    className=" bg-primary-dark text-center min-w-[133px] font-inter text-white px-4 py-2 rounded-md cursor-pointer uppercase"
                    onClick={scrollCallback}
                  >
                    Delivery
                  </button>
                </div>

                <div className=" flex justify-center gap-4">
                  <Link href="/contact">
                    {/* onClick={scrollCallback} */}
                    <button className=" bg-primary-dark text-center min-w-[133px] font-inter text-white px-4 py-2 rounded-md cursor-pointer uppercase">
                      Trash Removal
                    </button>
                  </Link>

                  <button
                    className=" bg-primary-dark text-center min-w-[133px] font-inter text-white px-4 py-2 rounded-md cursor-pointer uppercase"
                    onClick={scrollCallback}
                  >
                    Labor Only
                  </button>
                </div>
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhoWeAre;
