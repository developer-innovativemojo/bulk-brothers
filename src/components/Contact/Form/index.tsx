"use client";
import React, { useState } from "react";
import Text from "@/components/ui/Text";

interface FormData {
  [key: string]: {
    description?: string;
    number?: string;
    packed?: string;
    unpacked?: string;
  };
}

const Form: React.FC = () => {
  const [livingCount, setLivingCount] = useState<number>(4);
  const [bedroomCount, setBedroomCount] = useState<number>(4);
  const [kitchenCount, setKitchenCount] = useState<number>(3);
  const [bathroomCount, setBathroomCount] = useState<number>(4);
  const [livingData, setLivingData] = useState<FormData>({});
  const [bedroomData, setBedroomData] = useState<FormData>({});
  const [kitchenData, setKitchenData] = useState<FormData>({});
  const [bathroomData, setBathroomData] = useState<FormData>({});

  const handleAddMore = (section: string) => {
    switch (section) {
      case "living":
        setLivingCount((prevCount) => prevCount + 1);
        break;
      case "bedroom":
        setBedroomCount((prevCount) => prevCount + 1);
        break;
      case "kitchen":
        setKitchenCount((prevCount) => prevCount + 1);
        break;
      case "bathroom":
        setBathroomCount((prevCount) => prevCount + 1);
        break;
      default:
        break;
    }
  };

  const handleChange = (
    index: string,
    field: string,
    value: string,
    section: string
  ) => {
    const setData =
      section === "living"
        ? setLivingData
        : section === "bedroom"
        ? setBedroomData
        : section === "kitchen"
        ? setKitchenData
        : setBathroomData;

    setData((prevData) => ({
      ...prevData,
      [index]: {
        ...prevData[index],
        [field]: value,
      },
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Living Data:", livingData);
    console.log("Bedroom Data:", bedroomData);
    console.log("Kitchen Data:", kitchenData);
    console.log("Bathroom Data:", bathroomData);
  };

  const renderFormSection = (
    count: number,
    data: FormData,
    section: string
  ) => {
    return [...Array(count)].map((_, index) => (
      <div key={index} className="flex flex-wrap items-start justify-center gap-[20px] mb-5">
        <div className="flex flex-col w-full max-w-[345px]">
          <p>Item</p>
          <input
            className="w-full h-[51px] px-5 bg-transparent border text-[15px] text-[#fff] font-inter font-normal border-[#fff]/70 placeholder:text-[#fff]/70 outline-none"
            type="text"
            placeholder="Insert Description"
            onChange={(e) =>
              handleChange(index.toString(), "description", e.target.value, section)
            }
          />
        </div>
        <div className="flex flex-col w-full max-w-[345px]">
          <div className="flex gap-[20px]">
            <div>
              <p>Number</p>
              <input
                className="w-[102px] h-[51px] px-5 bg-transparent border text-[15px] text-[#fff] font-inter font-normal border-[#fff]/70 placeholder:text-[#fff]/70 outline-none"
                type="number"
                placeholder="-"
                onChange={(e) =>
                  handleChange(index.toString(), "number", e.target.value, section)
                }
              />
            </div>
            <div>
              <p>Packed</p>
              <input
                className="w-[102px] h-[51px] px-5 bg-transparent border text-[15px] text-[#fff] font-inter font-normal border-[#fff]/70 placeholder:text-[#fff]/70 outline-none"
                type="number"
                placeholder="-"
                onChange={(e) =>
                  handleChange(index.toString(), "packed", e.target.value, section)
                }
              />
            </div>
            <div>
              <p>Unpacked</p>
              <input
                className="w-[102px] h-[51px] px-5 bg-transparent border text-[15px] text-[#fff] font-inter font-normal border-[#fff]/70 placeholder:text-[#fff]/70 outline-none"
                type="number"
                placeholder="-"
                onChange={(e) =>
                  handleChange(index.toString(), "unpacked", e.target.value, section)
                }
              />
            </div>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <>
      <div className="flex justify-center pb-20">
        <div className="flex justify-center w-full max-w-[953px] bg-[#000000]">
          <div className="w-full max-w-[710px] min-h-[200px]">
            <Text as="h1" className="text-[#FFFFFF] text-center text-[36px] mt-10 mb-5 uppercase">
              Please fill out the form
            </Text>
            <hr className="h-px my-5 bg-[#FFFFFF]/30 border-0" />
            {/* Living Section */}
            <Text as="h2" className="text-[#FFFFFF]/70 mob:text-center text-[16px] font-bold pt-1 uppercase">
              Living, Dining Family Rooms and Offices
            </Text>
            <form onSubmit={handleSubmit} className="form">
              {renderFormSection(livingCount, livingData, "living")}
              <div className="w-full flex justify-center mt-5">
                <button
                  className="bg-transparent border-b border-[#E2E1DB] text-[17px] text-[#E2E1DB] font-inter font-medium"
                  onClick={() => handleAddMore("living")}
                >
                  + Add more
                </button>
              </div>
            <hr className="h-px my-5 bg-[#FFFFFF]/30 border-0" />

         
            <Text as="h2" className="text-[#FFFFFF]/70 mob:text-center text-[16px] font-bold pt-1 uppercase">
            Bedrooms and Closets
            </Text>
             {/* bedroom Section */}
              {renderFormSection(bedroomCount, bedroomData, "bedroom")}
              <div className="w-full flex justify-center mt-5">
                <button
                  className="bg-transparent border-b border-[#E2E1DB] text-[17px] text-[#E2E1DB] font-inter font-medium"
                  onClick={() => handleAddMore("bedroom")}
                >
                  + Add more
                </button>
              </div>
            <hr className="h-px my-5 bg-[#FFFFFF]/30 border-0" />

            
             {/* kitchenCount Section */}
             <Text as="h2" className="text-[#FFFFFF]/70 mob:text-center text-[16px] font-bold pt-1 uppercase">
            Kitchen
            </Text>
              {renderFormSection(kitchenCount, kitchenData, "kitchen")}
              <div className="w-full flex justify-center mt-5">
                <button
                  className="bg-transparent border-b border-[#E2E1DB] text-[17px] text-[#E2E1DB] font-inter font-medium"
                  onClick={() => handleAddMore("kitchen")}
                >
                  + Add more
                </button>
              </div>
            <hr className="h-px my-5 bg-[#FFFFFF]/30 border-0" />

             {/* bathroomCount Section */}
             <Text as="h2" className="text-[#FFFFFF]/70 mob:text-center text-[16px] font-bold pt-1 uppercase">
             Bathrooms and Halfways
            </Text>
              {renderFormSection(bathroomCount, bathroomData, "bathroom")}
              <div className="w-full flex justify-center mt-5">
                <button
                  className="bg-transparent border-b border-[#E2E1DB] text-[17px] text-[#E2E1DB] font-inter font-medium"
                  onClick={() => handleAddMore("bathroom")}
                >
                  + Add more
                </button>
              </div>

              <hr className="h-px my-5 bg-[#FFFFFF]/30 border-0" />

              {/* Submit Button */}
              <div className="flex justify-center pb-7">
                <button className="bg-[#E2E1DB] text-[17px] text-[#191A05] w-full max-w-[377px] h-[88px] uppercase">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
