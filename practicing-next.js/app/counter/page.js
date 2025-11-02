import CalculateCounter from "@/components/CalculateCounter";
import Link from "next/link";
import React from "react";

const Counter = () => {
  return (
    <div>
      <h2 className="text-5xl mb-20 font-bold">Counter</h2>
      <Link
        href="counter"
        className="bg-amber-200 p-3 rounded-lg font-semibold  border-grey-500 border-2"
      >
        Start
      </Link>
      <CalculateCounter />
    </div>
  );
};

export default Counter;
