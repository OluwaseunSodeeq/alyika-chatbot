import React from "react";

export default function HowWeWorkCard({ item, index }) {
  return (
    <div
      className={` w-[23.5rem] h-[16.5rem] flex flex-col justify-center items-center shadow-md rounded-xl ${
        (index + 1) % 2 === 0
          ? "bg-yellow text-dark-green"
          : " bg-card-green text-main-bg"
      }`}
    >
      <h4 className="font-satoshi font-bold text-5xl ">{item.heading}</h4>
      <p className="w-[11rem] text-base text-center mt-5 ">{item.text}</p>
    </div>
  );
}
