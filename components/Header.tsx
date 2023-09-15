import React from "react";
import { GiSonicShoes } from "react-icons/gi";
import { ThemeSwitcher } from "./ThemeSwitcher";
import Links from "./Links";

const Header = () => {
  return (
    <header className="dark:bg-zinc-900 bg-slate-100/75 px-8 py-3 flex justify-between items-center">
      <GiSonicShoes size={40} className="text-primary" />
      <ul className="flex gap-4 items-center ">
        <Links />
        <li>
          <ThemeSwitcher />
        </li>
      </ul>
    </header>
  );
};

export default Header;
