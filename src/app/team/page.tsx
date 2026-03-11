import ServiceForm from "@/components/Contact/ServiceForm";
// import Contactus from "@/components/Home/Contactus";
import Hero from "@/components/Team/Hero";
import Members from "@/components/Team/Members";



export default function Team() {
  return (
    <main className="bg-[#191A05] min-h-screen">
     <div className="relative">
     <Hero/>
     <Members/>
     </div>
     {/* <Contactus/> */}
      <div className="w-full border border-[#191A05] border-b-[#48432D] mob:pb-0 bg-[#191A05] ">
        <div className="flex w-full  py-10 mob:px-0 mob:py-5  max-w-[1122.5px] mx-auto bg-[#191A05] ">
          <ServiceForm />
        </div>
      </div>
    </main>
  );
}
