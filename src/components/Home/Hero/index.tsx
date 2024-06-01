import React from "react";
import Image from "next/image";
import Link from "next/link";

import Text from "@/components/ui/Text";

import bussesimg from "@/public/images/home/hero/herobgnew1.png";
import backimg from "@/public/images/home/hero/herobgnew.png";
import airl from "@/public/images/home/hero/air-l.png";
import airr from "@/public/images/home/hero/air-r.png";

interface HeroProps {
  scrollCallback: () => void;
}

const Hero: React.FC<HeroProps> = ({ scrollCallback }) => {
  return (
    <>
      <Text
        as="h1"
        className="text-[#FFFFFF] bg-[#48422D] text-center text-[48px] mob:text-[26px] font-Bodoni mob:leading-[40px] uppercase pb-4 mob:py-2 mob:mt-[-1px]"
      >
        {" "}
        Bulk brothers
      </Text>

      <div className="bg-[#48422D] min-h-[735px] mob:min-h-full mob:pt-4 mob:pb-4 relative flex justify-center items-center  overflow-hidden">
        <Image
          className="absolute w-full bottom-[130px] mob:bottom-[50px] z-[9]"
          src={backimg}
          alt=""
          width={1484}
          height={555}
        />
        <div className="w-full max-w-[1484px] max-h-[731px] h-full relative pt-[0px] pb-[816px] mob:pb-[250px]">
          {/* content */}
          <div
            className="flex justify-center  relative z-10 mob:px-2"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <div className="bg-[#191A05]/85  w-full max-w-[860px] min-h-[535px] mob:min-h-[450px] rounded-[20px] flex justify-center  items-center relative z-[11] ">
              <Image
                className="absolute left-[-50px] mob:left-[-10px] bottom-[170px] mob:bottom-[-106px] z-[10]"
                data-aos="fade-left"
                data-aos-delay="1000"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                src={airl}
                alt=""
                width={172.57}
                height={89.85}
              />
              <Image
                className="absolute right-[-50px] mob:right-[-10px] bottom-[170px] mob:bottom-[-106px] z-[10]"
                data-aos="fade-right"
                data-aos-delay="1000"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                src={airr}
                alt=""
                width={172.57}
                height={89.85}
              />

              <div className="relative z-[12]">
                <Text
                  as="h1"
                  className="text-[#FFFFFF] text-center mob:text-[35px] mob:leading-[40px] font-rajdhani uppercase"
                >
                  {" "}
                  Veteran owned and <br /> operated company <br /> here to serve
                  you.
                  {/* Move with strength, <br /> move with us */}
                </Text>
                <div className="flex justify-center">
                  <Text
                    as="p"
                    className="text-[#E2E1DB]/70 text-[14px] text-center max-w-[345px] leading-[27px] mt-2 mob:mt-5 mob:px-2"
                  >
                    {" "}
                    If you are moving to a new home trust Bulk Brothers to make
                    sure all your items make it to their new destination safely.
                  </Text>
                </div>

                {/* CTA Buttons */}

                <div className="flex items-center justify-between gap-4 mt-[35px] mob:mb-1 mob:flex-col z-[50] ">
                  <div className=" flex justify-center gap-4">
                    <Link href="/contact">
                      <button className=" bg-primary-dark text-center w-[166px] mob:max-w-[154px] mob:px-0 font-inter text-white px-4 py-2 rounded-md cursor-pointer uppercase">
                        Moving
                      </button>
                    </Link>

                    <button
                      className=" bg-primary-dark text-center w-[166px] mob:max-w-[154px] mob:px-0 font-inter text-white px-4 py-2 rounded-md cursor-pointer uppercase"
                      onClick={scrollCallback}
                    >
                      Delivery
                    </button>
                  </div>

                  <div className=" flex justify-center gap-4">
                    <Link href="/contact">
                      <button className=" bg-primary-dark text-center w-[166px] mob:max-w-[154px] mob:px-0 font-inter text-white px-4 py-2 rounded-md cursor-pointer uppercase">
                        Trash Removal
                      </button>
                    </Link>

                    <button
                      className=" bg-primary-dark text-center w-[166px] mob:max-w-[154px] mob:px-0 font-inter text-white px-4 rounded-md py-2 cursor-pointer uppercase"
                      onClick={scrollCallback}
                    >
                      Labor Only
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* imgs */}
          <div className="flex justify-center">
            <Image
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              className="absolute bottom-[-70px] mob:bottom-0 z-10"
              src={bussesimg}
              alt=""
              width={1371}
              height={418}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
