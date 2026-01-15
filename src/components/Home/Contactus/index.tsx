"use client";
import React, { useState } from "react";
import Image from "next/image";
import "react-datepicker/dist/react-datepicker.css";

import Text from "@/components/ui/Text";
import formbg from "@/public/images/home/formbg.png";
import dropdownsvg from "@/public/icons/dropdown.svg";


interface ContactusProps {
  refProps?: React.RefObject<HTMLDivElement>;
}

const Contactus: React.FC<ContactusProps> = ({ refProps }) => {
  const [fname, setFname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("Service"); // default placeholder
  const [isOpen, setIsOpen] = useState(false);

  const [successMessage, setSuccessMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<string>("");

  // simple FE rate limiter: max 3 sends/hour
  const canSendNow = (
    bucket: string,
    limit: number = 3,
    windowMs: number = 3600000
  ): boolean => {
    try {
      const raw = localStorage.getItem(bucket);
      const now = Date.now();
      const arr: number[] = raw ? JSON.parse(raw) : [];
      const recent = arr.filter((t) => now - t < windowMs);
      if (recent.length >= limit) return false;
      return true;
    } catch {
      return true;
    }
  };

  const recordSend = (bucket: string): void => {
    try {
      const raw = localStorage.getItem(bucket);
      const now = Date.now();
      const arr: number[] = raw ? JSON.parse(raw) : [];
      const recent = arr.filter((t) => now - t < 3600000);
      recent.push(now);
      localStorage.setItem(bucket, JSON.stringify(recent));
    } catch { }
  };

  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSelection = (value: string) => {
    setService(value);
    setIsOpen(false);
  };

  const sendMail = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    // FE rate limit guard (3/hour)
    if (!canSendNow("email_send_counter:/api/sendEmail")) {
      alert("Too many requests. Please try after sometime");
      return;
    }

    if (!fname || !email || !phone || service === "Service") {
      alert("Please fill in all fields");
      return;
    }

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          fname,
          email,
          phone,
          service,
        }),
      });

      const data = await response.json();

      if (response.status === 429) {
        alert("Too many requests. Please try after sometime");
        return;
      }

      if (response.ok) {
        setSuccessMessage("Email Sent Successfully!");
        alert("Email sent successfully!");
        console.log(data);
        recordSend("email_send_counter:/api/sendEmail");

        // Reset input fields
        setFname("");
        setEmail("");
        setPhone("");
        setService("Service");
      } else {
        throw new Error(data.message || "Failed to send email");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send email. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-[663px] relative flex justify-center items-center mob:px-5 mob:py-5"
      data-aos="fade-up"
      ref={refProps}
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
    >
      <div className="w-full max-w-[1484px] h-full flex justify-center">
        <Image
          className="absolute top-0 left-0 w-full h-full object-cover object-center"
          src={formbg}
          alt=""
          layout="fill"
        />

        <div className="max-w-[1140px] w-full relative z-10">
          <Text
            as="h1"
            className="text-[45px] text-center text-[#FFFFFF] leading-[57.42px] mob:text-[35px] mob:leading-[38.42px] uppercase"
          >
            Get Free Estimate today!
          </Text>
          <div className="flex justify-center my-5 pb-2">
            <Text
              as="p"
              className="text-[17px] text-center leading-[27px] font-inter max-w-[787px]"
            >
              Get rid of unwanted furniture, clothes, appliances, and other junk
              in your property with help from Bulk Brothers. Contact us today
              via phone or email to request a free estimate.
            </Text>
          </div>

          {/* form */}
          <form action="" className="flex flex-wrap justify-center">
            <div className="flex flex-col relative w-full max-w-[569px] border-t border-b lg:border-b-0 lg:border-r border-[#FFFFFF]">
              <input
                className="flex flex-col text-[17px] text-[#FFFFFF] leading-[25px] font-medium font-inter bg-transparent placeholder:font-medium placeholder-white border-l px-5 w-full max-w-[570px] h-[80px] outline-none"
                type="text"
                placeholder="First Name"
                value={fname}
                onChange={(e) => {
                  setFname(e.target.value);
                }}
              />
            </div>

            <div className="flex flex-col relative w-full max-w-[570px] border border-[#FFFFFF]">
              <input
                className="flex flex-col text-[17px] text-[#FFFFFF] leading-[25px] font-medium font-inter bg-transparent placeholder-white px-5 w-full max-w-[570px] h-[80px] outline-none"
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailError("");
                }}
              />
              {emailError && <p style={{ color: "red" }}>{emailError}</p>}
            </div>

            <div className="flex flex-col relative w-full max-w-[570px] border border-t-0 lg:border-t-0 border-[#FFFFFF]">
              <input
                className="flex flex-col text-[17px] text-[#FFFFFF] leading-[25px] font-medium font-inter placeholder-white bg-transparent px-5 w-full max-w-[570px] h-[80px] outline-none"
                type="number"
                placeholder="Phone"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
            </div>

            {/* <DatePicker
                placeholderText={showPlaceholder ? "Date" : "Date"}
                className="  text-[17px] text-[#FFFFFF] leading-[25px] font-medium font-inter  bg-transparent placeholder-white  px-5 w-full max-w-[570px] h-[80px]  outline-none"
                selected={startDate}
                onChange={(date) => handleDateChange(date)}
                isClearable={true}
              /> */}
            {/* Service dropdown (replaces Date field) */}
            <div className="flex flex-col relative w-full max-w-[570px] border-r border-b lg:border-l border-[#FFFFFF]">
              {/* wrapper must be relative so menu can be absolute */}
              <div className="relative w-full">
                <button
                  type="button"
                  className="flex items-center gap-[0px] justify-between w-full h-[80px] px-5 bg-transparent border text-[17px] text-[#fff] font-inter font-medium border-[#fff]/70 placeholder:text-[#fff] outline-none"
                  id="menu-button"
                  aria-expanded={isOpen}
                  aria-haspopup="true"
                  onClick={toggleDropdown}
                >
                  {service}
                  <Image src={dropdownsvg} alt="DROPDOWNSVG" />
                </button>

                {isOpen && (
                  <div
                    className="absolute left-0 top-full mt-1 z-50 w-full px-5 bg-[#000]/40 border text-[15px] text-[#fff] font-inter font-normal border-[#fff]/70 outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabIndex={-1}
                  >
                    <div className="py-1" role="none">
                      <a
                        className="text-white block px-4 py-2 text-sm cursor-pointer"
                        role="menuitem"
                        tabIndex={-1}
                        id="menu-item-1"
                        onClick={() => handleSelection("Moving Service")}
                      >
                        Moving Service
                      </a>
                      <hr className="h-px w-full my-1 bg-[#FFFFFF]/30 border-0" />
                      <a
                        className="text-white block px-4 py-2 text-sm cursor-pointer"
                        role="menuitem"
                        tabIndex={-1}
                        id="menu-item-2"
                        onClick={() => handleSelection("Trash Removal Service")}
                      >
                        Trash Removal Service
                      </a>
                    </div>
                  </div>
                )}
              </div>

              <button
                onClick={sendMail}
                disabled={loading}
                type="button"
                className="absolute top-0 right-0 bg-[#E2E1DB] w-full max-w-[217px] h-[80px] mob:max-w-[150px] uppercase font-inter font-medium text-[17px] leading-[20.57px] tracking-[1px]"
              >
                {loading ? "Submiting.." : "Submit"}
              </button>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
};

export default Contactus;
