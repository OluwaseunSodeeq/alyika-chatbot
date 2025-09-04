import React from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function RootComponent({ children }) {
  return (
    <section className="w-full 2xl:max-w-[1400px] mx-auto bg-main-bg">
      <Header />
      <div>{children}</div>
      <Footer />
    </section>
  );
}
