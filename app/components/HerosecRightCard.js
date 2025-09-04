"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Button from "./Button";

export default function HerosecRightCard() {
  const btnBg = "#fdcd31";
  const textColor = "#012f25";
  const [index, setIndex] = useState(0);

  const testimonials = [
    {
      name: "John Doe",
      text: "Lorem ipsum dolor sit amet, adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      rating: 4,
      image: "/person.png",
      bgImage: "/bgImage0.png",
    },
    {
      name: "Jane Smith",
      text: "Another feedback example for the carousel.",
      rating: 5,
      image: "/person.png",
      bgImage: "/bgImage1.png",
    },
    {
      name: "Oluwaseun Sodeeq",
      text: "Another feedback example for the carousel.",
      rating: 5,
      image: "/person.png",
      bgImage: "/bgImage1.png",
    },
  ];

  const leftClick = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };
  const rightClick = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };
  const current = testimonials[index];

  return (
    <div className="relative xl:h-[40rem] 2xl:w-[44rem] xl:w-[44rem] sm:w-[24rem] rounded-[1.2rem] overflow-hidden shadow-lg border-2">
      {/* Background Image */}
      <div
        className="relative w-full h-full bg-cover bg-center bg-no-repeat "
        style={{ backgroundImage: `url(${current.bgImage})` }}
      >
        {/* Input & Subscribe */}
        <div className="absolute top-4 bg-white rounded-full px-3 py-1 shadow-md flex gap-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-3 py-1 rounded-full outline-none w-48 text-sm"
          />
            <Button btnBg={btnBg} textColor={textColor}>
              Subscriber
            </Button>

        </div>

        {/* Testimonial card */}
        <div className="absolute top-1/3 left-6 bg-yellow-400 p-4 rounded-xl max-w-xs shadow-md">
          <div className="flex items-center gap-3">
            <Image
              width={65}
              height={70}
              src={current.image}
              alt={current.name}
              className=" object-cover"
            />
            <div className="flex flex-col">
              <div className="flex text-black">
                {Array.from({ length: current.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-black text-black" />
                ))}
              </div>
              <p className="text-xs text-black mt-1">{current.text}</p>
            </div>
          </div>
        </div>

        {/* Arrows */}
        <button
          onClick={leftClick}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 p-2 rounded-full shadow"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={rightClick}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 p-2 rounded-full shadow"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Curved bottom section */}
      {/* <div className="relative bg-white p-6 text-center">
        <svg
          className="absolute top-0 left-0 w-full -translate-y-full"
          viewBox="0 0 1440 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,100 C480,0 960,200 1440,100 L1440,00 L0,0 Z"
            fill="white"
          ></path>
        </svg>
        <p className="text-gray-700 max-w-xl mx-auto">
          We’re not experts in suits, we’re students, storytellers, builders,
          and friends who decided to do something.
        </p> */}
      {/* </div> */}
    </div>
  );
}
