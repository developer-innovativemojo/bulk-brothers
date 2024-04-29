import React from "react";

import ContentMembers from "./ContentMembers";


import img1 from "@/public/images/team/members/Rectangle 34628818.png";
import img2 from "@/public/images/team/members/2.png";
import img3 from "@/public/images/team/members/3.png";
import img4 from "@/public/images/team/members/4.png";
import img5 from "@/public/images/team/members/5.png";
import img6 from "@/public/images/team/members/6.png";

const Members = () => {
  return (
    <>
      <div className="bg-[#2B281B]  flex justify-center items-center pt-16 pb-20">
        <div className="w-full max-w-[1090px]">
          {/* team members */}
          <div className="w-full bg-[#2B281B]  flex flex-wrap gap-5 justify-center items-center">
            <ContentMembers name="Sean Rideout" title="Founder / CEO" imgSrc={img1} />
            <ContentMembers name="Sean Rideout" title="Founder / CEO" imgSrc={img2} />
            <ContentMembers name="Sean Rideout" title="Founder / CEO" imgSrc={img3} />
            <ContentMembers name="Sean Rideout" title="Founder / CEO" imgSrc={img4} />
            <ContentMembers name="Sean Rideout" title="Founder / CEO" imgSrc={img5} />
            <ContentMembers name="Sean Rideout" title="Founder / CEO" imgSrc={img6} />
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Members;
