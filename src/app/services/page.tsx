"use client"
import Hero from "@/components/Services/hero";
import YearsService from "@/components/Aboutus/YearsService";
import Contactus from "@/components/Home/Contactus";
import Trusted from "@/components/Services/Trusted";
import WhatWeOffer from "@/components/Services/WhatWeOffer/index";
import CrateRental from "@/components/Services/CrateRental";
// import { useRouter } from "next/router";

export default function services() {
  // const router = useRouter();
  // const { id } = router.query;
  // console.log(id,"idd")
  return (
    <main className="bg-[#191A05] min-h-screen">
      <Hero />
      <Trusted  />
      <WhatWeOffer/>
      <CrateRental/>
      <Contactus/>
    </main>
  );
}
