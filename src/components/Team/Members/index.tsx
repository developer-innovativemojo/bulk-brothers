import React from "react";
import Image from "next/image";


import bg from "@/public/images/team/teambg2.png";


const Members = () => {
  return (
    <>
      <div className="bg-[#2B281B]  flex justify-center items-center pt-24">
        <div className="w-full max-w-[1440px]">
          {/* team members */}
       
          <Image src={bg} alt="" width={1440} height={728} />
        </div>
      </div>
    </>
  );
};

export default Members;
