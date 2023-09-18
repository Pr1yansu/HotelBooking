"use client";
import { heading } from "@/app/layout";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

interface NavLink {
  handleMenu?: () => void;
}

const NavLinks = [
  {
    url: "/",
    title: "Home",
  },
  {
    url: "/About",
    title: "About",
  },
  {
    url: "/Listing",
    title: "Listing",
  },
  {
    url: "/Contact",
    title: "Contact",
  },
];

const Links: React.FC<NavLink> = ({ handleMenu }) => {
  const path = usePathname();
  return (
    <>
      {NavLinks.map((link, i) => {
        return (
          <li
            key={i}
            className={`${heading.className} font-semibold text-base`}
            onClick={handleMenu}
          >
            <Link
              href={link.title === "Home" ? "/" : link.title}
              className={
                link.url === path ? "text-primary" : "hover:text-primary"
              }
            >
              {link.title}
            </Link>
          </li>
        );
      })}
    </>
  );
};

export default Links;
