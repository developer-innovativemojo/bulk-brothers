import React from "react";

import { cn } from "@/libs/utils/twMerge";
interface ButtonProps {
  text?: string;
  children?: React.ReactNode; // Add children prop
  className?: string;

}

const Button: React.FC<ButtonProps> = ({ text = "Explore Music", children, className }) => {
  return (
    <>
     
      <button className={cn(" w-full rounded-[150px] bg-[#191A05] border-[#191A05] border text-[15px] font-inter font-medium leading-[25.5px] text-[#FFFFFF]",  className)}>
        {children || text} {/* Use children if available, otherwise use text */}
      </button>
    </>
  );
};

export default Button;
