import Estimate from "@/components/Home/Estimate";
import Hero from "@/components/Home/Hero";
import TeamSupport from "@/components/Home/TeamSupport";
import WhatWeOffer from "@/components/Home/WhatWeOffer";
import WhoWeAre from "@/components/Home/WhoWeAre";
import YearsService from "@/components/Home/YearsService";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#191A05] min-h-screen">
     <Hero/>
     <Estimate/>
     <WhoWeAre/>
     <YearsService/>
     <WhatWeOffer/>
     <TeamSupport/>
    </main>
  );
}
