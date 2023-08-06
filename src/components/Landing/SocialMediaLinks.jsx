import React from "react";
import { SOCIALS_DATA } from "../../data";

const SocialMediaLinks = () => {
  return (
    <div className="m-8 laptop:m-12 w-full hidden md:flex items-center">
      {SOCIALS_DATA.map((item) => (
        <a href={item.url} rel="noreferrer" target="_blank">
          {item.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialMediaLinks;
