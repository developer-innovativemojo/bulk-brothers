import React from "react";
import Image from "next/image";


import bg from "@/public/images/team/teambg2.png";


const Members = () => {
  return (
    <>
      <div className="bg-[#2B281B] w-full flex justify-center items-center pt-24" >
          {/* team members */}
       
          <Image className="w-full" src={bg} alt="" width={1440} height={728} data-aos="fade-up"
  data-aos-duration="1000"
  data-aos-easing="ease-in-out" />
      </div>
    </>
  );
};

export default Members;
