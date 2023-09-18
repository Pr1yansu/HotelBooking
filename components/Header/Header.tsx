"use client";
import React, { useState } from "react";
import { GiSonicShoes } from "react-icons/gi";
import HamBurger from "./HamBurger";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import { AnimatePresence } from "framer-motion";

const Header = () => {
  const [open, setOpen] = useState(false);
  const handleMenu = () => {
    setOpen(!open);
  };
  return (
    <header className="px-8 py-3 flex justify-between items-center fixed left-0 right-0 top-0 z-50">
      <GiSonicShoes size={40} className="text-primary" />
      <DesktopNav />
      <HamBurger handleMenu={handleMenu} isOpen={open} />
      <AnimatePresence>
        {open && <MobileNav handleMenu={handleMenu} />}
      </AnimatePresence>
    </header>
  );
};

export default Header;
