import { Suspense } from 'react';
import Hero from "@/components/Services/hero";
import Contactus from "@/components/Home/Contactus";
import Trusted from "@/components/Services/Trusted";
import WhatWeOffer from "@/components/Services/WhatWeOffer/index";
import CrateRental from "@/components/Services/CrateRental";

export default function services() {
 
  return (
    <main className="bg-[#191A05] min-h-screen">
      <Hero />
      <Trusted  />
      <Suspense fallback={<div>Loading...</div>}>
      <WhatWeOffer  />
    </Suspense>
      <CrateRental/>
      <Contactus/>
    </main>
  );
}
