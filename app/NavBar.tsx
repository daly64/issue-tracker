"use client";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaBug } from "react-icons/fa";
const NavBar = () => {
  const currentPath = usePathname();

  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];

  const linkClassName = (link: any) =>
    classNames({
      "text-zinc-900 font-semi-bold": link.href === currentPath,
      "text-zinc-400": link.href !== currentPath,
      "text-lg transition-colors": true,
    });

  return (
    <>
      <nav className="bg-gray-100 shadow-md h-12 p-3  flex space-x-5 items-center">
        <Link href="/">
          <FaBug size="1.5rem" className="text-zinc-500 hover:text-zinc-700" />
        </Link>

        <ul className="flex space-x-6 ">
          {links.map((link) => (
            <Link
              className={linkClassName(link)}
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
