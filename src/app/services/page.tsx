import { Suspense } from 'react';
import Hero from "@/components/Services/hero";
// import Contactus from "@/components/Home/Contactus";
import Trusted from "@/components/Services/Trusted";
import WhatWeOffer from "@/components/Services/WhatWeOffer/index";
import CrateRental from "@/components/Services/CrateRental";
import ServiceForm from '@/components/Contact/ServiceForm';

export default function services() {
 
  return (
    <main className="bg-[#48422D] min-h-screen">
      <Hero />
      <Trusted  />
      <Suspense fallback={<div>Loading...</div>}>
      <WhatWeOffer  />
    </Suspense>
      <CrateRental/>
      {/* <Contactus/> */}
       <div className="w-full border border-[#191A05] border-b-[#48432D] mob:pb-0 bg-[#191A05] ">
        <div className="flex w-full  py-10 mob:px-0 mob:py-5  max-w-[1122.5px] mx-auto bg-[#191A05] ">
          <ServiceForm />
        </div>
      </div>
    </main>
  );
}
