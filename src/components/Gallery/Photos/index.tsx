import React from "react";
import Image from "next/image";

import img1 from "@/public/images/gallery/1.png";
import img2 from "@/public/images/gallery/2.png";
import img3 from "@/public/images/gallery/3.png";
import img4 from "@/public/images/gallery/4.png";
import img5 from "@/public/images/gallery/5.png";
import img6 from "@/public/images/gallery/6.png";
import img7 from "@/public/images/gallery/7.png";
import img8 from "@/public/images/gallery/8.png";
import img9 from "@/public/images/gallery/9.png";
import img10 from "@/public/images/gallery/10.png";
import img11 from "@/public/images/gallery/11.png";
const Photos = () => {
  return (
    <>
      <div className="bg-[#E9E9E9]  flex justify-center items-center pt-20 pb-20">
        <div className="w-full max-w-[1150px]">
          {/* team members */}
          <div className="w-full bg-[#E9E9E9]  flex flex-wrap  justify-start mob:justify-center mob:px-5 gap-3 ">
            {/* photo 1 */}
            <div className="flex flex-col relative  mt-1">
              <Image src={img1} alt="" width={567} height={279.47} />
            </div>
            <div className="flex flex-col relative  mt-1">
              <Image src={img2} alt="" width={278.49} height={279.47} />
            </div>
            <div className="flex flex-col relative  mt-1">
              <Image src={img3} alt="" width={278.49} height={279.47} />
            </div>
            <div className="flex flex-col relative  mt-1">
              <Image src={img4} alt="" width={278.49} height={279.47} />
            </div>
            <div className="flex flex-col relative  mt-1">
              <Image src={img5} alt="" width={278.49} height={279.47} />
            </div>
            <div className="flex flex-col relative  mt-1">
              <Image src={img6} alt="" width={278.49} height={279.47} />
            </div>
            <div className="flex flex-col relative  mt-1">
              <Image src={img7} alt="" width={278.49} height={279.47} />
            </div>
            <div className="flex flex-col relative  mt-1">
              <Image src={img8} alt="" width={278.49} height={279.47} />
            </div>
            <div className="flex flex-col relative  mt-1">
              <Image src={img9} alt="" width={278.49} height={279.47} />
            </div>
            <div className="flex flex-col relative  mt-1">
              <Image src={img10} alt="" width={278.49} height={279.47} />
            </div>
            <div className="flex flex-col relative  mt-1">
              <Image src={img11} alt="" width={278.49} height={279.47} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Photos;
