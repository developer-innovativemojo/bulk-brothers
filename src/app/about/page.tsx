"use client"


import Hero from "@/components/Aboutus/Hero";
import YearsService from "@/components/Aboutus/YearsService";
import Contactus from "@/components/Home/Contactus";


export default function aboutus() {

  return (
    <main className="bg-[#191A05] min-h-screen">

    <Hero/>
    <YearsService/>
    <Contactus/>
    </main>
  );
}
