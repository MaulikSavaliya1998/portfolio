import React from "react";
import { HEADER_DATA } from "../../data";

const Footer = () => {
  return (
    <div className="bg-secondary font-[Poppins] h-[60px] flex justify-center items-center text-center">
      <p className="text-tertiary font-medium text-lg">
        Made with
        <span className="text-primary mr-2 -mb-4 ml-2 text-2xl">❤</span>
        by {HEADER_DATA.name}
      </p>
    </div>
  );
};

export default Footer;
