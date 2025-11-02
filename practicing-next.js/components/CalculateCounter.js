"use client";
import React, { useState } from "react";

const CalculateCounter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2 className="text-7xl font-bold mb-4">{count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
};

export default CalculateCounter;
