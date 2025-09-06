import Image from "next/image";
import React from "react";
import Button from "./Button";
import Link from "next/link";

export default function HerosecLeftCard() {
  const btnBg = "#fdcd31";
  const textColor = "#012f25";

  return (
    <div className="2xl:w-[36rem] xl:w-[33rem] sm:w-[20rem]  bg-dark-green text-main-bg px-2 sm:px-3 xl:pt-[7rem] xl:px-[3.5rem] xl:pb-[2rem] rounded-[1.2rem] border-2">
      <h1 className="  font-satoshi text-5xl text-main-bg mb-4 ">
        Building Green
        <Image
          src="/white-arrows.png"
          alt="arrow"
          width={40}
          height={40}
          className="inline-block mr-2 mb-2 ml-2"
        />
      </h1>
      <h2 className="text-4xl text-main-bg font-light mb-4">
        <span className="border-b pb-1"> Dreams </span> From Ground Up
      </h2>

      <p className="text-base text-main-bg font-light leading-6 mt-8 italic">
        <span className="font-light">Hi there. </span> We’re a group of young
        Nigerians who’ve been knee-deep (literally) in flooded streets, trying
        to figure out how to stop climate change from wrecking our homes,
        schools, and futures. We’re not experts in suits, we’re students,
        storytellers, builders, and friends who decided to do something. And now
        we’re inviting you to do it with us.
      </p>

      <div className="font-montserrat flex gap-3 items-center xl:mt-[2rem] ">
        <Button btnBg={btnBg} textColor={textColor}>
          Join Our Dreamers
        </Button>
        <Link
          href="/"
          className="underline text-light-green text-[14px] cursor-pointer "
        >
          Support a Project
        </Link>
      </div>
    </div>
  );
}
