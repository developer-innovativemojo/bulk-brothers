import Contactus from "@/components/Home/Contactus";
import Hero from "@/components/Team/Hero";
import Members from "@/components/Team/Members";



export default function Team() {
  return (
    <main className="bg-[#191A05] min-h-screen">
     <div className="relative">
     <Hero/>
     <Members/>
     </div>
     <Contactus/>
    </main>
  );
}
