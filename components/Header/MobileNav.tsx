"use client";
import React from "react";
import { ThemeSwitcher } from "../ThemeSwitcher";
import Links from "./Links";
import { motion } from "framer-motion";
import { cursive } from "@/app/layout";

interface MobileNavProps {
  handleMenu: () => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ handleMenu }) => {
  return (
    <>
      <motion.ul
        className="md:hidden fixed left-0 right-0 top-0 bottom-0 bg-zinc-100 dark:bg-zinc-950 flex flex-col gap-8 w-full h-full justify-center items-center"
        initial={{ opacity: 0, y: "-100%" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: "-100%" }}
        transition={{ duration: 0.3 }}
      >
        <Links handleMenu={handleMenu} />
        <li>
          <ThemeSwitcher />
        </li>
        <span className="fixed rotate-90 font-light -right-20 top-1/2 -translate-y-1/2">
          Copyright <span className="text-primary"> &copy; </span> by
          <b className={`text-2xl text-primary ms-2 ${cursive.className}`}>
            Priyansu Chowdhury
          </b>
        </span>
      </motion.ul>
    </>
  );
};

export default MobileNav;
