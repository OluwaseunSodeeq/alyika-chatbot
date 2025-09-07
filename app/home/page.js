import React from "react";
import Wrapper from "../components/Wrapper";
import HerosecRightCard from "../components/HerosecRightCard";
import HerosecLeftCard from "../components/HerosecLeftCard";
import WhatWeDoSection from "../components/WhatWeDoSection";
import TestimonialSection from "../components/TestimonialSection";
import HowWeWorkSection from "../components/HowWeWorkSection";
import Partners from "../components/Partners";

export default function Page() {
  return (
    <Wrapper bg="#ffffff">
      <div className="flex gap-[1.3rem] justify-center py-3">
        <HerosecLeftCard />
        <HerosecRightCard />
      </div>
      <WhatWeDoSection />
      <TestimonialSection />
      <HowWeWorkSection />
      <Partners />
    </Wrapper>
  );
}
