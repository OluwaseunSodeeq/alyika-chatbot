import React from "react";
import HowWeWorkCard from "./HowWeWorkCard";
import Button from "./Button";
import Image from "next/image";

export default function HowWeWorkSection() {
  const howWeWorkArray = [
    {
      heading: "GDFT",
      text: "Building tech with students sensors, solar tools, and even AI (yup, we’re working on an app).",
    },
    {
      heading: "GDS",
      text: "Stories from our neighbourhoods the hard stuff, the hopeful stuff, all told our way.",
    },
    {
      heading: "GDC",
      text: "Our digital campaign that got thousands of people talking about youth and climate.",
    },
  ];
  return (
    <div className=" px-[3.5rem] bg-dark-green relative overflow-hidden">
      <div className="flex justify-between px-4 pb-3 pt-[5rem]">
        <div className="text-main-bg text-4xl">
          <h4 className="font-satoshi font-bold text-4xl ">
            Wanna see how we work?
          </h4>
          <span className="font-light block ">These are our favourite</span>
          <span className="font-light">projects:</span>
        </div>
        <div className="flex gap-x-6 items-center mt-[5.4rem] mb-[5.6rem] ">
          <Button btnBg="#ffffff" textColor="#012f25">
            See Our Project
          </Button>
          <span className="italic underline cursor-pointer font-montserrat text-[11px] font-medium text-main-bg mt-3.5">
            Support Us
          </span>
        </div>
      </div>
      <div className="flex justify-between items-center pb-[9rem] gap-6">
        {howWeWorkArray.map((item, i) => {
          return <HowWeWorkCard key={i} index={i} item={item} />;
        })}
      </div>
      <div
        className="absolute opacity-100 w-[30rem] h-[32rem] top-[6rem] right-[-2rem] "
        // style={{ transform: "rotate(21.84deg)" }}
      >
        <Image src="/logo-bg.png" alt="logo" fill className="object-contain" />
      </div>
    </div>
  );
}
