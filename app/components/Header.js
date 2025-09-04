import React from "react";
import Nav from "./Nav";
import Logo from "./Logo";
import Wrapper from "./Wrapper";
import DropDown from "./DropDown";
import Button from "./Button";

export default function Header() {
  const navs = [
    { name: "Home", href: "/home", activesStatus: false },
    { name: "About", href: "/about", activesStatus: false },
    { name: "Impact", href: "/impact", activesStatus: false },
  ];
  const dropDown1 = [
    "Project",
    "Features",
    "Solutions",
    "Case Studies",
    "Resources",
    "Pricing",
  ];

  const dropDown2 = [
    "Gallery",
    "Blog",
    "Events",
    "Newsletter",
    "Help Center",
    "Guides",
    "Webinars",
  ];

  const bg = "#ffffff";
  const btnBg = "#012f25";

  return (
    <Wrapper bg={bg}>
      <div className="shadow-md flex justify-between items-center xl:px-[5rem] py-3.5  2xl:px-[7rem]">
        <Nav nav={navs} />
        <Logo />
        <div className=" flex gap-[2rem]">
          <DropDown options={dropDown1} />
          <DropDown options={dropDown2} />
          <Button btnBg={btnBg} textColor={bg}>
            Contact Us
          </Button>
        </div>
      </div>
    </Wrapper>
  );
}
