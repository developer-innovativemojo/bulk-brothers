"use client";

import { useEffect } from "react";
import { useRef } from "react";

import "aos/dist/aos.css"; // Import AOS CSS
import AOS from "aos";

// import Contactus from "@/components/Home/Contactus";
// import Estimate from "@/components/Home/Estimate";
import Hero from "@/components/Home/Hero";
import OurCLient from "@/components/Home/OurCLient";
import TeamSupport from "@/components/Home/TeamSupport";
import WhatWeOffer from "@/components/Home/WhatWeOffer";
import WhoWeAre from "@/components/Home/WhoWeAre";
import YearsService from "@/components/Home/YearsService";
import ServiceForm from "@/components/Contact/ServiceForm";

export default function Home() {
  const contactRef = useRef<HTMLDivElement>(null);
  const scrollCallback = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <main className="bg-[#191A05] min-h-screen">
      <Hero scrollCallback={scrollCallback} />
      {/* <Estimate /> */}
      <WhoWeAre scrollCallback={scrollCallback} />
      <YearsService />
      <WhatWeOffer />
      <OurCLient />
      <TeamSupport />
      {/* <Contactus refProps={contactRef} /> */}
       {/* <Form /> */}
       <div className="w-full border border-[#191A05] border-b-[#48432D] mob:pb-0">
        <div className="flex w-full  py-10 mob:px-0 mob:py-5  max-w-[1204.5px] mx-auto bg-[#191A05] ">
          <ServiceForm />
        </div>
      </div>
    </main>
  );
}
