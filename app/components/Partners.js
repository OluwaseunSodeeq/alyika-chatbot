import Image from "next/image";
import React from "react";

export default function Partners() {
  const partnersArray = [
    { image: "/atlas.png" },
    { image: "/slack.png" },
    { image: "/dropbox.png" },
    { image: "/shopify.png" },
    { image: "/google.png" },
  ];
  return (
    <div className="bg-main-bg mx-[3.5rem] pt-[2.5rem] pb-[5rem]">
      <h4 className="text-[40px] text-black text-center">Our Partners</h4>
      <div className="flex justify-between items-center ">
        {partnersArray.map((img, i) => (
          <div
            className=" xl:w-[9.5rem] h-[2.5rem] relative  mt-[1rem]"
            key={i}
          >
            <Image
              src={img.image}
              alt="partner-logo"
              fill
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
