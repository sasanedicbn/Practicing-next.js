const Links = [
  { name: "Bar", path: "/bar" },
  { name: "Counter", path: "/counter" },
  { name: "todo", path: "/todo" },
  { name: "Query", path: "/query" },
  { name: "Prisma", path: "/prisma" },
  { name: "Practice", path: "/practice" },
];

import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav className="bg-amber-200 h-15">
      <div className="navbar  max-w-6xl mx-auto flex items-center justify-between">
        <Link
          href="/"
          className="btn btn-primary bg-blue-200 mb-2 md:mb-0 p-4 rounded-lg font-semibold"
        >
          Home
        </Link>
        <ul>
          {Links.map((link) => {
            return (
              <li key={link.path} className="inline-block mx-4">
                <Link
                  href={link.path}
                  className="btn btn-primary bg-blue-200 mb-2 md:mb-0 p-3 rounded-lg font-semibold"
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
