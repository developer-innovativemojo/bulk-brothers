import React, { forwardRef } from "react";

import { cn } from "@/libs/utils/twMerge";

interface Props {
  children: React.ReactNode;
  className?: string;
  as?: string;
  onClick?: any;
  id?:string
}

const Text = forwardRef<HTMLHeadingElement | HTMLParagraphElement, Props>(
  (props, ref) => {
    const { children, className, as, onClick,id="" } = props;

    if (as === "h1") {
      return (
        <h1
          ref={ref}
          className={cn(
            "font-bold text-center text-[64px] leading-[59px] text-[#FFFFFF] font-rajdhani   ",
            className
          )}
          onClick={onClick}
          id={id}
        >
          {children}
        </h1>
      );
    }

    if (as === "h2") {
      return (
        <h2
          ref={ref}
          className={cn(
            "font-normal font-rajdhani text-[40px] leading-[43.2px] text-[#FFFFFF]  ",
            className
          )}
          id={id}
          onClick={onClick}
        >
          {children}
        </h2>
      );
    }

    return (
      <p
        ref={ref}
        className={cn(
          "   text-[#FFFFFF] text-[14px] font-normal leading-[22.4px] font-inter  ",
          className
        )}
        onClick={onClick}
        id={id}
      >
        {children}
      </p>
    );
  }
);

Text.displayName = "Text";

export default Text;