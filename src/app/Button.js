"use client";
export const dynamic = "force-dynamic";
import React from "react";

function CensoredButton({ children }) {
  const [isCensored, setIsCensored] = React.useState(true);
  return (
    <button
      onClick={() => setIsCensored(!isCensored)}
      className={isCensored ? "censored" : ""}
    >
      {children}
    </button>
  );
}

export default CensoredButton;
