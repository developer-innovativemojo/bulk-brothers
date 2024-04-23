import Estimate from "@/components/Home/Estimate";
import Hero from "@/components/Home/Hero";
import WhoWeAre from "@/components/Home/WhoWeAre";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#191A05] min-h-screen">
     <Hero/>
     <Estimate/>
     <WhoWeAre/>
    </main>
  );
}
