"use client";

import React from "react";
import Image from "next/image";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { cn } from "@/libs/utils/twMerge";
import type { ContactData } from "./types";
import calender from "@/public/icons/calender.svg";

const inputClass =
  "w-full h-[51px] px-5 bg-white border border-[#191A05]/20 rounded-xl text-[15px] text-[#191A05] font-inter placeholder:text-[#191A05]/50 outline-none focus:border-[#191A05]/50";
const labelClass =
  "text-[#191A05] text-[14px] font-inter font-medium mb-2 block";

interface ContactDateFormProps {
  data: ContactData;
  preferredDateValue: Date | null;
  onChange: (data: ContactData) => void;
  onPreferredDateChange: (date: Date | null) => void;
  onValidChange: (valid: boolean) => void;
}

export default function ContactDateForm({
  data,
  preferredDateValue,
  onChange,
  onPreferredDateChange,
  onValidChange,
}: ContactDateFormProps) {
  const valid =
    !!data.name.trim() &&
    !!data.phone.trim() &&
    !!data.email.trim() &&
    !!data.preferredDate;

  React.useEffect(() => {
    onValidChange(valid);
  }, [valid, onValidChange]);

  const handleDateChange = (date: Date | null) => {
    onPreferredDateChange(date);
    onChange({
      ...data,
      preferredDate: date ? formatMMDDYYYY(date) : "",
    });
  };

  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-[#191A05]/10">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        <div>
          <label className={labelClass}>Name</label>
          <input
            type="text"
            className={inputClass}
            placeholder=""
            value={data.name}
            onChange={(e) => onChange({ ...data, name: e.target.value })}
          />
        </div>
        <div>
          <label className={labelClass}>Phone</label>
          <input
            type="tel"
            className={inputClass}
            placeholder=""
            value={data.phone}
            onChange={(e) => onChange({ ...data, phone: e.target.value })}
          />
        </div>
      </div>
      <div className="mb-5">
        <label className={labelClass}>Email</label>
        <input
          type="email"
          className={inputClass}
          placeholder=""
          value={data.email}
          onChange={(e) => onChange({ ...data, email: e.target.value })}
        />
      </div>
      <div className="w-full">
        <label className={labelClass}>Preferred date</label>
        <div className="relative flex items-center w-full">
          <DatePicker
            selected={preferredDateValue}
            onChange={handleDateChange}
            dateFormat="MM/dd/yyyy"
            placeholderText="MM/dd/yyyy"
            className={cn(inputClass, "pr-12 w-full")}
            wrapperClassName="w-full react-datepicker__input-container"
            isClearable={false}
            minDate={new Date()}
          />
          <Image
            className="absolute right-4 pointer-events-none"
            src={calender}
            alt=""
            width={24}
            height={24}
          />
        </div>
      </div>
    </div>
  );
}

function formatMMDDYYYY(d: Date): string {
  const day = String(d.getDate()).padStart(2, "0");
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const year = d.getFullYear();
  return `${month}/${day}/${year}`;
}
