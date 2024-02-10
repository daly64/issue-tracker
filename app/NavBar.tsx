import Link from "next/link";
import React from "react";
import { FaBug } from "react-icons/fa";
const NavBar = () => {
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];
  return (
    <>
      {/* NavBar */}
      <nav className="bg-gray-100 shadow-md h-12 p-3  flex space-x-5 items-center">
        <Link href="/">
          <FaBug size="1.5rem" className="text-zinc-500 hover:text-zinc-700" />
        </Link>

        <ul className="flex space-x-6 ">
          {links.map((link) => (
            <Link
              className="text-zinc-500 text-lg hover:text-zinc-900 transition-colors"
              key={link.href}
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
