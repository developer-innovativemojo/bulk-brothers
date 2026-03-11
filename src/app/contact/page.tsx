// import Form from "@/components/Contact/Form";
import Hero from "@/components/Contact/Hero";
import ServiceForm from "@/components/Contact/ServiceForm";

export default function services() {
  return (
    <main className="bg-[#E9E9E9] ">
      <Hero />
      {/* <Form /> */}
        <div className="w-full border border-[#191A05] border-b-[#48432D] mob:pb-0 bg-[#191A05] ">
        <div className="flex w-full  py-10 mob:px-0 mob:py-5   max-w-[952.5px] mx-auto bg-[#191A05] ">
          <ServiceForm />
        </div>
      </div>
    </main>
  );
}
