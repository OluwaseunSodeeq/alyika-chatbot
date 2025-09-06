import React from "react";
import Wrapper from "../components/Wrapper";
import HerosecRightCard from "../components/HerosecRightCard";
import HerosecLeftCard from "../components/HerosecLeftCard";
import WhatWeDoSection from "../components/WhatWeDoSection";

export default function Page() {
  const bg = "#ffffff";
  return (
    <Wrapper bg={bg}>
      <div className="flex gap-[1.3rem] justify-center py-3">
        <HerosecLeftCard />
        <HerosecRightCard />
      </div>
      <WhatWeDoSection />
    </Wrapper>
  );
}
