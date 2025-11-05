import Image from "next/image";
import React from "react";

export default function BarLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col  from-blue-100 via-amber-50 to-white">
      <header className="bg-amber-300 shadow-md p-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800 tracking-wide">
          🍸 Bar Zone
        </h1>
        {/* <img
          src="https://www.univerzalno.com/uploads/images/img-00835059_1749067865.gif"
          alt="Cocktail Glass"
          className="w-80 h-60"
        /> */}
        <Image
          src="https://www.univerzalno.com/uploads/images/img-00835059_1749067865.gif"
          width={320}
          height={320}
        />
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg transition duration-200">
          Add Cocktail
        </button>
      </header>

      <div
        className="h-64 bg-cover bg-center rounded-b-3xl shadow-inner"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1589402900621-72b6a27b2459?auto=format&fit=crop&w=1200&q=80')",
        }}
      >
        <div className="h-full w-full bg-black/40 flex flex-col items-center justify-center text-center text-white">
          <h2 className="text-3xl font-bold drop-shadow-md">
            Welcome to the Bar
          </h2>
          <p className="text-lg mt-2">Discover your favorite cocktails 🍹</p>
        </div>
      </div>

      <main className="flex-1 max-w-5xl mx-auto w-full p-8">{children}</main>

      <footer className="bg-amber-200 text-center py-4 mt-auto text-gray-700">
        © {new Date().getFullYear()} Bar Zone — All rights reserved.
      </footer>
    </div>
  );
}
