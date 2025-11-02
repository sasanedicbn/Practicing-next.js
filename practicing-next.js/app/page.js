import Link from "next/link";
import React from "react";

const App = () => {
  return (
    <div>
      <h1 className="text-6xl">App</h1>
      <Link href="/contact">Contact</Link>
    </div>
  );
};

export default App;
