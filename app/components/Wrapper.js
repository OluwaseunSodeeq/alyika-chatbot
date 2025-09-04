import React from "react";

export default function Wrapper({ children, bg }) {
  return <div className={`p-0 m-0  box-border bg-${bg}`}>{children}</div>;
}
