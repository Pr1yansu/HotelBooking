import React from "react";
import Links from "./Links";
import { ThemeSwitcher } from "../ThemeSwitcher";

const DesktopNav = () => {
  return (
    <ul className="flex gap-4 items-center max-md:hidden">
      <Links />
      <li>
        <ThemeSwitcher />
      </li>
    </ul>
  );
};

export default DesktopNav;
