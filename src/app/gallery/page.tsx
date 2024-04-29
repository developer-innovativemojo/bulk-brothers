import Hero from "@/components/Gallery/Hero";
import Photos from "@/components/Gallery/Photos";
import Contactus from "@/components/Home/Contactus";


export default function Gallery() {
  return (
    <main className="bg-[#191A05] min-h-screen">
    <Hero/>
    <Photos/>
    <Contactus/>
    </main>
  );
}
