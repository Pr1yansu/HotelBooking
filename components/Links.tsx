"use client";
import { heading } from "@/app/layout";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const Links = () => {
  const path = usePathname();
  return (
    <>
      {["/", "/About", "/Contact", "/Listing"].map((item, index) => {
        return (
          <li key={index}>
            <Link
              className={`${path === item && "text-primary"} ${
                heading.className
              } font-medium text-base hover:text-primary transition-colors duration-200`}
              href={`${item}`}
            >
              {item === "/" ? "Home" : item.replace("/", "")}
            </Link>
          </li>
        );
      })}
    </>
  );
};

export default Links;
