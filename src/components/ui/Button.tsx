import React from "react";
interface ButtonProps {
  text?: string;
}

const Button: React.FC<ButtonProps> = ({ text = "Explore Music" }) => {
  return (
    <>
      <button className=" bg-gradient-to-tl from-[#C98200] to-[#FCF8A8] rounded-[4px] text-[18px] text-[#0C0C09] font-opensans  font-semibold py-[12px] px-[30px]">
        {text}
      </button>
    </>
  );
};

export default Button;
