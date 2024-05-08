"use client"
// import React from "react";
// import Image from "next/image";

// import img1 from "@/public/images/gallery/1.png";
// import img2 from "@/public/images/gallery/2.png";
// import img3 from "@/public/images/gallery/3.png";
// import img4 from "@/public/images/gallery/4.png";
// import img5 from "@/public/images/gallery/5.png";
// import img6 from "@/public/images/gallery/6.png";
// import img7 from "@/public/images/gallery/7.png";
// import img8 from "@/public/images/gallery/8.png";
// import img9 from "@/public/images/gallery/9.png";
// import img10 from "@/public/images/gallery/10.png";
// import img11 from "@/public/images/gallery/11.png";
// const Photos = () => {
//   return (
//     <>
//       <div className="bg-[#E9E9E9]  flex justify-center items-center pt-20 pb-20">
//         <div className="w-full max-w-[1150px]">
//           {/* team members */}
//           <div className="w-full bg-[#E9E9E9]  flex flex-wrap  justify-start mob:justify-center mob:px-5 gap-3 ">
//             {/* photo 1 */}
//             <div className="flex flex-col relative  mt-1">
//               <Image src={img1} alt="" width={567} height={279.47} />
//             </div>
//             <div className="flex flex-col relative  mt-1">
//               <Image src={img2} alt="" width={278.49} height={279.47} />
//             </div>
//             <div className="flex flex-col relative  mt-1">
//               <Image src={img3} alt="" width={278.49} height={279.47} />
//             </div>
//             <div className="flex flex-col relative  mt-1">
//               <Image src={img4} alt="" width={278.49} height={279.47} />
//             </div>
//             <div className="flex flex-col relative  mt-1">
//               <Image src={img5} alt="" width={278.49} height={279.47} />
//             </div>
//             <div className="flex flex-col relative  mt-1">
//               <Image src={img6} alt="" width={278.49} height={279.47} />
//             </div>
//             <div className="flex flex-col relative  mt-1">
//               <Image src={img7} alt="" width={278.49} height={279.47} />
//             </div>
//             <div className="flex flex-col relative  mt-1">
//               <Image src={img8} alt="" width={278.49} height={279.47} />
//             </div>
//             <div className="flex flex-col relative  mt-1">
//               <Image src={img9} alt="" width={278.49} height={279.47} />
//             </div>
//             <div className="flex flex-col relative  mt-1">
//               <Image src={img10} alt="" width={278.49} height={279.47} />
//             </div>
//             <div className="flex flex-col relative  mt-1">
//               <Image src={img11} alt="" width={278.49} height={279.47} />
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Photos;

import React, { useState } from "react";
import Image from "next/image";
import { BiSkipNextCircle } from "react-icons/bi";
import { IoChevronBackCircle, IoChevronForwardCircle } from "react-icons/io5";
import { IoIosCloseCircle } from "react-icons/io";
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
// Import other images as needed

const Photos = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openPopup = (index: any) => {
    setCurrentImageIndex(index);
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11,]; // Add other images here

  return (
    <>
      <div className="bg-[#E9E9E9] flex justify-center items-center pt-20 pb-20">
        <div className="w-full max-w-[1150px]">
          <div className="w-full bg-[#E9E9E9] flex flex-wrap justify-start mob:justify-center mob:px-5 gap-3 ">
            {images.map((image, index) => (
              <div key={index} className="flex flex-col mob:w-full relative mt-1 cursor-pointer" onClick={() => openPopup(index)}>
                <Image className="mob:w-full " src={image} alt="" width={index === 0 ? 567 : 278.49} height={279.47} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {popupOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/60  flex justify-center items-center z-50">
          <div className=" rounded-lg">
<div className="flex justify-end">
<button onClick={closePopup}><IoIosCloseCircle className="text-[30px] text-[white]" /></button>
  </div>            
          <div className="flex items-center gap-5">
          <div>  <button onClick={prevImage}><IoChevronBackCircle className="text-[30px] text-[white]" /></button></div>
            <div>
              <Image  src={images[currentImageIndex]} alt="" width={currentImageIndex === 0 ? 567 : 478.49}  height={279.47} />
            </div>
            <div>
              <button onClick={nextImage}><IoChevronForwardCircle className="text-[30px] text-[white]" /></button>
            </div>
          </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Photos;
