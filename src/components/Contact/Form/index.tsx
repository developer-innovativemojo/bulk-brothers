"use client";
import React, { useState } from "react";
import axios from "axios";

import Text from "@/components/ui/Text";

interface FormData {
  [key: string]: {
    description?: string;
    number?: string;
    packed?: string;
    unpacked?: string;
  };
}

const Form: React.FC = () => {const [livingCount, setLivingCount] = useState<number>(13);
  const [bedroomCount, setBedroomCount] = useState<number>(11);
  const [kitchenCount, setKitchenCount] = useState<number>(7);
  const [bathroomCount, setBathroomCount] = useState<number>(3);
  const [livingData, setLivingData] = useState<FormData>({
    0: { description: "Chairs", number: "" },
    1: { description: "Couches", number: "" },
    2: { description: "End tables", number: "" },
    3: { description: "Coffee tables", number: "" },
    4: { description: "Dining table", number: "" },
    5: { description: "Hutch", number: "" },
    6: { description: "Lamps", number: "" },
    7: { description: "Rugs", number: "" },
    8: { description: "Pictures", number: "" },
    9: { description: "Books", number: "" },
    10: { description: "Entertainment supplies (CDs, DVDs, video games, etc.)", number: "" },
    11: { description: "Computer software/programs", number: "" },
    12: { description: "Memorabilia (photo albums, souveniers, etc.)", number: "" },
  });
  const [bedroomData, setBedroomData] = useState<FormData>({
    0: { description: "Beds", number: "" },
    1: { description: "Bureaus", number: "" },
    2: { description: "Night tables", number: "" },
    3: { description: "Clothing", number: "" },
    4: { description: "Bedrooms and Closets", number: "" },
    5: { description: "Shoes", number: "" },
    6: { description: "Wall decorations", number: "" },
    7: { description: "Crib / bassinet", number: "" },
    8: { description: "Clothes hamper", number: "" },
    9: { description: "Mirrors", number: "" },
    10: { description: "Furs, jewelry and accessories", number: "" },
  });
  const [kitchenData, setKitchenData] = useState<FormData>({
    0: { description: "Pots and pans", number: "" },
    1: { description: "Dishes", number: "" },
    2: { description: "Glasses and cups", number: "" },
    3: { description: "Silverware", number: "" },
    4: { description: "Baking supplies", number: "" },
    5: { description: "Cleaning supplies", number: "" },
    6: { description: "Food", number: "" },
  });
  const [bathroomData, setBathroomData] = useState<FormData>({
    0: { description: "Hygiene supplies", number: "" },
    1: { description: "Medical supplies", number: "" },
    2: { description: "Linen", number: "" },
  });
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [successfully, setSuccessfully] = useState("");

  const handleChangemail = (e: any) => {
    setEmail(e.target.value);
  };

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

    setData((prevData) => {
      const updatedData = {
        ...prevData,
        [index]: {
          ...prevData[index],
          [field]: value,
        },
      };

      // Ensure only one of "packed" or "unpacked" can be set
      if (field === "packed" && value) {
        updatedData[index]["unpacked"] = "";
      } else if (field === "unpacked" && value) {
        updatedData[index]["packed"] = "";
      }

      return updatedData;
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // Combine all data into one object
    const allData = {
      living: livingData,
      bedroom: bedroomData,
      kitchen: kitchenData,
      bathroom: bathroomData,
      email: email,
    };

    try {
      const response = await axios.post("/api/sendForm", allData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("Form data sent successfully:", response.data);
      setSuccessfully("Form data sent successfully");

      alert("Form data sent successfully!");
    } catch (error) {
      console.error("Error sending form data:", error);
      alert("Error sending form data. Please try again.");
      setSuccessfully("Form data failed to send");
    } finally {
      setLoading(false);
    }
  };

  const renderFormSection = (
    count: number,
    data: FormData,
    section: string
  ) => {
    return [...Array(count)].map((_, index) => (
      <div
        key={index}
        className="flex flex-wrap items-start justify-center gap-[20px] mb-5"
      >
        <div className="flex flex-col w-full max-w-[345px]">
          <Text as="p" className="text-[12px] text-[#fff]/50 mb-1">
            Item
          </Text>
          <input
            className="w-full h-[51px] px-5 bg-transparent border text-[15px] text-[#fff] font-inter font-normal border-[#fff]/70 placeholder:text-[#fff]/70 outline-none"
            type="text"
            placeholder="Insert Description"
            value={data[index]?.description || ""}
            onChange={(e) =>
              handleChange(
                index.toString(),
                "description",
                e.target.value,
                section
              )
            }
          />
        </div>
        <div className="flex flex-col w-full max-w-[345px]">
          <div className="flex gap-[20px]">
            <div>
              <Text as="p" className="text-[12px] text-[#fff]/50 mb-1">
                Number
              </Text>
              <input
                className="w-[102px] h-[51px] px-5 bg-transparent border text-[15px] text-[#fff] font-inter font-normal border-[#fff]/70 placeholder:text-[#fff]/70 outline-none"
                type="number"
                placeholder="-"
                value={data[index]?.number || ""}
                onChange={(e) =>
                  handleChange(
                    index.toString(),
                    "number",
                    e.target.value,
                    section
                  )
                }
              />
            </div>
            <div>
              <Text as="p" className="text-[12px] text-[#fff]/50 mb-1">
                Packed
              </Text>
              <input
                className="w-[102px] h-[51px] px-5 bg-transparent border text-[15px] text-[#fff] font-inter font-normal border-[#fff]/70 placeholder:text-[#fff]/70 outline-none"
                type="number"
                placeholder="-"
                value={data[index]?.packed || ""}
                onChange={(e) =>
                  handleChange(
                    index.toString(),
                    "packed",
                    e.target.value,
                    section
                  )
                }
              />
            </div>
            <div>
              <Text as="p" className="text-[12px] text-[#fff]/50 mb-1">
                Unpacked
              </Text>
              <input
                className="w-[102px] h-[51px] px-5 bg-transparent border text-[15px] text-[#fff] font-inter font-normal border-[#fff]/70 placeholder:text-[#fff]/70 outline-none"
                type="number"
                placeholder="-"
                value={data[index]?.unpacked || ""}
                onChange={(e) =>
                  handleChange(
                    index.toString(),
                    "unpacked",
                    e.target.value,
                    section
                  )
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
      <div className="flex justify-center pb-20 mob:pb-0">
        <div className="flex justify-center w-full max-w-[953px] bg-[#000000]">
          <div
            className="w-full max-w-[710px] min-h-[200px]"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <Text
              as="h1"
              className="text-[#FFFFFF] text-center text-[36px] mt-10 mb-5 uppercase"
            >
              Please fill out the form
            </Text>
            <hr className="h-px my-5 bg-[#FFFFFF]/30 border-0" />
           
            <form onSubmit={handleSubmit} className="form">
              {/* email */}
              <div className="mob:flex mob:justify-center mob:w-full ">
              <div className="w-full mob:max-w-[345px]">
              <Text as="p" className="text-[12px] text-[#fff]/50 mb-1">
                  Email*
                </Text>
                <input
                  className="w-full h-[51px] px-5 bg-transparent border text-[15px] text-[#fff] font-inter font-normal border-[#fff]/70 placeholder:text-[#fff]/70 outline-none mb-2"
                  type="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={handleChangemail}
                  required
                />
              </div>
              </div>

               {/* Living Section */}
            <Text
              as="h2"
              className="text-[#FFFFFF]/70 mob:text-center text-[16px] font-bold pt-1 uppercase mb-4"
            >
              Living, Dining Family Rooms and Offices
            </Text>
              

              {renderFormSection(livingCount, livingData, "living")}
              <div className="w-full flex justify-center mt-5">
                <button
                type="button"
                  className="bg-transparent border-b border-[#E2E1DB] text-[17px] text-[#E2E1DB] font-inter font-medium"
                  onClick={() => handleAddMore("living")}
                >
                  + Add more
                </button>
              </div>
              <hr className="h-px my-5 bg-[#FFFFFF]/30 border-0" />

              <Text
                as="h2"
                className="text-[#FFFFFF]/70 mob:text-center text-[16px] font-bold pt-1 uppercase mb-4"
              >
                Bedrooms and Closets
              </Text>
              {/* bedroom Section */}
              {renderFormSection(bedroomCount, bedroomData, "bedroom")}
              <div className="w-full flex justify-center mt-5">
                <button
                type="button"
                  className="bg-transparent border-b border-[#E2E1DB] text-[17px] text-[#E2E1DB] font-inter font-medium"
                  onClick={() => handleAddMore("bedroom")}
                >
                  + Add more
                </button>
              </div>
              <hr className="h-px my-5 bg-[#FFFFFF]/30 border-0" />

              {/* kitchenCount Section */}
              <Text
                as="h2"
                className="text-[#FFFFFF]/70 mob:text-center text-[16px] font-bold pt-1 uppercase mb-4"
              >
                Kitchen
              </Text>
              {renderFormSection(kitchenCount, kitchenData, "kitchen")}
              <div className="w-full flex justify-center mt-5">
                <button
                type="button"
                  className="bg-transparent border-b border-[#E2E1DB] text-[17px] text-[#E2E1DB] font-inter font-medium"
                  onClick={() => handleAddMore("kitchen")}
                >
                  + Add more
                </button>
              </div>
              <hr className="h-px my-5 bg-[#FFFFFF]/30 border-0" />

              {/* bathroomCount Section */}
              <Text
                as="h2"
                className="text-[#FFFFFF]/70 mob:text-center text-[16px] font-bold pt-1 uppercase mb-4"
              >
                Bathrooms and Halfways
              </Text>
              {renderFormSection(bathroomCount, bathroomData, "bathroom")}
              <div className="w-full flex justify-center mt-5">
                <button
                type="button"
                  className="bg-transparent border-b border-[#E2E1DB] text-[17px] text-[#E2E1DB] font-inter font-medium"
                  onClick={() => handleAddMore("bathroom")}
                >
                  + Add more
                </button>
              </div>

              <hr className="h-px my-5 bg-[#FFFFFF]/30 border-0" />

              {/* Submit Button */}
              <div className="flex justify-center pb-7 mob:px-5">
                <button
                  disabled={loading}
                  className="bg-[#E2E1DB] text-[17px] text-[#191A05] w-full max-w-[307px] h-[58px] uppercase rounded-[150px]"
                >
                  {loading ? "Submiting..." : "Submit"}
                </button>
              </div>
              {successfully !== "" ? (
                <Text
                  as="h2"
                  className="text-[#409c40] text-[20px] text-center font-bold pb-2"
                >
                  {successfully}
                </Text>
              ) : null}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
