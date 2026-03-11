import ServiceForm from "@/components/Contact/ServiceForm";
import Hero from "@/components/Gallery/Hero";
import Photos from "@/components/Gallery/Photos";
// import Contactus from "@/components/Home/Contactus";


export default function Gallery() {
  return (
    <main className="bg-[#191A05] min-h-screen">
    <Hero/>
    <Photos/> 
    {/* <Contactus/> */}
     <div className="w-full border border-[#191A05] border-b-[#48432D] mob:pb-0 bg-[#191A05] ">
        <div className="flex w-full  py-10 mob:px-0 mob:py-5  max-w-[1122.5px] mx-auto bg-[#191A05] ">
          <ServiceForm />
        </div>
      </div>
    </main>
  );
}
