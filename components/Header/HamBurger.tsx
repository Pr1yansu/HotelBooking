"use client";
import React from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

interface Props {
  handleMenu: () => void;
  isOpen?: boolean;
}

const HamBurger: React.FC<Props> = ({ handleMenu, isOpen }) => {
  return (
    <button
      className="md:hidden hover:cursor-pointer relative z-50"
      title="Menu"
      onClick={handleMenu}
    >
      {isOpen ? (
        <AiOutlineClose
          size={34}
          className="text-zinc-900 dark:text-white hover:bg-purple-500 p-2 rounded-full shadow-md bg-primary duration-300"
        />
      ) : (
        <HiMenuAlt1
          size={34}
          className="text-zinc-900 dark:text-white hover:bg-purple-500 p-2 rounded-full shadow-md bg-primary duration-300"
        />
      )}
    </button>
  );
};

export default HamBurger;
