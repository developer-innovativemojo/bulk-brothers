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
  const [count, setCount] = useState<number>(4); // Initial count of divs
  const [formData, setFormData] = useState<FormData>({}); // State to store form data

  const handleAddMore = () => {
    setCount(count + 1); // Increment count to add more divs
  };

  const handleChange = (index: string, field: string, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [index]: {
        ...prevData[index],
        [field]: value,
      },
    }));
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission behavior
    console.log("Form Data:", formData);
    // Perform any further actions here, such as sending data to a server
  };
  return (
    <>
      <div className="flex justify-center pb-20">
        <div className="flex justify-center w-full max-w-[953px]  bg-[#000000]">
          <div className=" w-full max-w-[710px] min-h-[200px] ">
            <Text
              as="h1"
              className="text-[#FFFFFF] text-center text-[36px] mt-10 mb-5  uppercase"
            >
              please fill out the form
            </Text>
            <hr className="h-px my-5 bg-[#FFFFFF]/30 border-0 "></hr>
            <Text
              as="h2"
              className="text-[#FFFFFF]/70 mob:text-center text-[16px] font-bold pt-1   uppercase"
            >
              Living, Dining Family Rooms and Offices
            </Text>
            {/* form */}
            <form onSubmit={handleSubmit} className="form">
              {/* 1 */}
              {[...Array(count)].map((_, sectionIndex) => (
                <div
                  key={sectionIndex}
                  className="flex flex-wrap items-start justify-center gap-[20px] mb-5"
                >
                  <div className="flex flex-col w-full max-w-[345px]">
                    <p>Item</p>
                    <input
                      className="w-full h-[51px] px-5 bg-transparent border text-[15px] text-[#fff] font-inter font-normal border-[#fff]/70 placeholder:text-[#fff]/70 outline-none"
                      type="text"
                      placeholder="Insert Description"
                      onChange={(e) =>
                        handleChange(
                          sectionIndex,
                          "description",
                          e.target.value
                        )
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
                            handleChange(
                              sectionIndex,
                              "number",
                              e.target.value
                            )
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
                            handleChange(
                              sectionIndex,
                              "packed",
                              e.target.value
                            )
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
                            handleChange(
                              sectionIndex,
                              "unpacked",
                              e.target.value
                            )
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {/* add more */}
              <div className="w-full flex justify-center mt-5">
                <button
                  className="bg-transparent border-b border-[#E2E1DB] text-[17px] text-[#E2E1DB] font-inter font-medium"
                  onClick={handleAddMore}
                >
                  + Add more
                </button>
              </div>

              <hr className="h-px my-5 bg-[#FFFFFF]/30 border-0 "></hr>

              {/* bedrooms and closets */}
              <Text
                as="h2"
                className="text-[#FFFFFF]/70 mob:text-center text-[16px] font-bold pt-1   uppercase"
              >
                Bedrooms and Closets
              </Text>

              {[...Array(count)].map((_, index) => (
                <div
                  key={index}
                  className="flex flex-wrap items-start justify-center gap-[20px] mb-5"
                >
                  <div className="flex flex-col w-full max-w-[345px]">
                    <p>Item</p>
                    <input
                      className="w-full h-[51px] px-5 bg-transparent border text-[15px] text-[#fff] font-inter font-normal border-[#fff]/70 placeholder:text-[#fff]/70 outline-none"
                      type="text"
                      placeholder="Insert Description"
                      onChange={(e) =>
                        handleChange(
                          index.toString(),
                          "description",
                          e.target.value
                        )
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
                            handleChange(
                              index.toString(),
                              "number",
                              e.target.value
                            )
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
                            handleChange(
                              index.toString(),
                              "packed",
                              e.target.value
                            )
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
                            handleChange(
                              index.toString(),
                              "unpacked",
                              e.target.value
                            )
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {/* add more */}
              <div className="w-full flex justify-center mt-5">
                <button
                  className="bg-transparent border-b border-[#E2E1DB] text-[17px] text-[#E2E1DB] font-inter font-medium"
                  onClick={handleAddMore}
                >
                  + Add more
                </button>
              </div>

              <hr className="h-px my-5 bg-[#FFFFFF]/30 border-0 "></hr>


                 {/* Kitchen */}
                 <Text
                as="h2"
                className="text-[#FFFFFF]/70 mob:text-center text-[16px] font-bold pt-1   uppercase"
              >
               Kitchen
              </Text>

              {[...Array(count)].map((_, index) => (
                <div
                  key={index}
                  className="flex flex-wrap items-start justify-center gap-[20px] mb-5"
                >
                  <div className="flex flex-col w-full max-w-[345px]">
                    <p>Item</p>
                    <input
                      className="w-full h-[51px] px-5 bg-transparent border text-[15px] text-[#fff] font-inter font-normal border-[#fff]/70 placeholder:text-[#fff]/70 outline-none"
                      type="text"
                      placeholder="Insert Description"
                      onChange={(e) =>
                        handleChange(
                          index.toString(),
                          "description",
                          e.target.value
                        )
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
                            handleChange(
                              index.toString(),
                              "number",
                              e.target.value
                            )
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
                            handleChange(
                              index.toString(),
                              "packed",
                              e.target.value
                            )
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
                            handleChange(
                              index.toString(),
                              "unpacked",
                              e.target.value
                            )
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {/* add more */}
              <div className="w-full flex justify-center mt-5">
                <button
                  className="bg-transparent border-b border-[#E2E1DB] text-[17px] text-[#E2E1DB] font-inter font-medium"
                  onClick={handleAddMore}
                >
                  + Add more
                </button>
              </div>

              <hr className="h-px my-5 bg-[#FFFFFF]/30 border-0 "></hr>

   {/* Bathrooms and Halfways */}
   <Text
                as="h2"
                className="text-[#FFFFFF]/70 mob:text-center text-[16px] font-bold pt-1   uppercase"
              >
               Bathrooms and Halfways
              </Text>

              {[...Array(count)].map((_, index) => (
                <div
                  key={index}
                  className="flex flex-wrap items-start justify-center gap-[20px] mb-5"
                >
                  <div className="flex flex-col w-full max-w-[345px]">
                    <p>Item</p>
                    <input
                      className="w-full h-[51px] px-5 bg-transparent border text-[15px] text-[#fff] font-inter font-normal border-[#fff]/70 placeholder:text-[#fff]/70 outline-none"
                      type="text"
                      placeholder="Insert Description"
                      onChange={(e) =>
                        handleChange(
                          index.toString(),
                          "description",
                          e.target.value
                        )
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
                            handleChange(
                              index.toString(),
                              "number",
                              e.target.value
                            )
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
                            handleChange(
                              index.toString(),
                              "packed",
                              e.target.value
                            )
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
                            handleChange(
                              index.toString(),
                              "unpacked",
                              e.target.value
                            )
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {/* add more */}
              <div className="w-full flex justify-center mt-5">
                <button
                  className="bg-transparent border-b border-[#E2E1DB] text-[17px] text-[#E2E1DB] font-inter font-medium"
                  onClick={handleAddMore}
                >
                  + Add more
                </button>
              </div>

              <hr className="h-px my-5 bg-[#FFFFFF]/30 border-0 "></hr>


              {/* submit */}
          <div className="flex justify-center pb-7">
          <button className=" bg-[#E2E1DB] text-[17px] text-[#191A05] w-full max-w-[377px] h-[88px] uppercase">
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
