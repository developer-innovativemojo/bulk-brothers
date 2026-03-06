"use client";

import Hero from "@/components/Aboutus/Hero";
import YearsService from "@/components/Aboutus/YearsService";
import ServiceForm from "@/components/Contact/ServiceForm";
// import Contactus from "@/components/Home/Contactus";

export default function aboutus() {
  return (
    <main className="bg-[#191A05] min-h-screen">
      <Hero />
      <YearsService />
      {/* <Contactus /> */}
      {/* <Form /> */}
      <div className="w-full border border-[#191A05] border-b-[#48432D] mob:pb-0">
        <div className="flex w-full  py-10 mob:px-0 mob:py-5  max-w-[1204.5px] mx-auto bg-[#191A05] ">
          <ServiceForm />
        </div>
      </div>
    </main>
  );
}
