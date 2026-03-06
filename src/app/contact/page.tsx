// import Form from "@/components/Contact/Form";
import Hero from "@/components/Contact/Hero";
import ServiceForm from "@/components/Contact/ServiceForm";

export default function services() {
  return (
    <main className="bg-[#E9E9E9] ">
      <Hero />
      {/* <Form /> */}
      <div className="w-full pb-16 mob:pb-0">
        <div className="flex justify-center w-full px-[70px] py-10 mob:px-0 mob:py-5 max-w-[953px] mx-auto bg-[#191A05] ">
          <ServiceForm />
        </div>
      </div>
    </main>
  );
}
