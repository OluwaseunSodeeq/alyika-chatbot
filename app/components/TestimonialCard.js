"use client";
import React from "react";
import Image from "next/image";
import { Star, Quote } from "lucide-react";

export default function TestimonialCard({ testimonial }) {
  const { rating, text, name, image, age } = testimonial;
  return (
    <div className="xl:w-[24.5rem] xl:h-[24.6rem]  bg-white shadow-md rounded-lg p-5 relative">
      {/* Stars */}
      <div className=" absolute left-[3.5rem] top-[5.8rem] flex items-center gap-1">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 text-green-500 fill-green-500" />
        ))}
      </div>

      <Image
        src="/quotes.svg"
        width={88}
        height={67}
        alt="quotes"
        className="absolute top-[3.7rem] right-[2rem] "
      />

      <p className=" absolute left-[3.5rem] font-bold font-satoshi text-base top-[8.8rem] italic text-testimonialText mt-3 pr-{4rem}">
        {text}
      </p>

      {/* Author */}
      <div className=" w-[80%] absolute left-[3.5rem] bottom-[2.5rem] flex  justify-between gap-3 mt-4">
        <div className="relative w-[5.4rem] h-[5.6rem]   rounded-full overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover rounded-full"
          />
        </div>

        <p className=" font-satoshi font-bold text-gray-900 mr-[2rem]">
          <span>{name}</span>, {age}
        </p>
      </div>
    </div>
  );
}
