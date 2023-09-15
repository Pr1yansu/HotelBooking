"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface ButtonProps {
  title: string;
  onClick?: () => void;
  link?: string;
  small?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  transparent?: boolean;
  icon?: React.ReactNode;
  rounded?: boolean;
  ghost?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  title = "Button",
  onClick,
  link,
  small,
  disabled,
  fullWidth,
  transparent,
  icon,
  rounded,
  ghost,
}) => {
  return (
    <Link href={link || "#"} className={`${fullWidth ? "w-full" : "w-auto"}`}>
      <motion.button
        title={title}
        className={`relative flex justify-center overflow-hidden items-center py-2 z-20 group border-[2px] border-primary ${
          small ? "px-8 text-sm" : "px-10 text-lg"
        } ${disabled ? "!border-0 cursor-not-allowed" : null} ${
          fullWidth ? "w-full" : "w-auto"
        }
      ${rounded ? "rounded-full" : "rounded-md"}
      ${ghost && "bg-transparent border-0 hover:bg-primary/40 duration-100"}`}
        onClick={onClick && onClick}
        whileTap={{ scale: 0.97 }}
        transition={{ duration: 0.1 }}
      >
        {ghost ? null : (
          <div
            className={`absolute bg-primary z-10 top-0 h-full w-full duration-300 ${
              transparent
                ? "-left-full group-hover:left-0"
                : "left-0 group-hover:-left-full"
            }
          ${disabled ? "!bg-gray-300 !left-0" : null}`}
          ></div>
        )}
        {icon && icon}
        <div
          className={`relative z-20 duration-300 ${
            transparent
              ? "text-primary group-hover:text-white"
              : "text-white group-hover:text-primary"
          }
          ${ghost && "!text-primary group-hover:!text-white"} ${
            disabled ? "!text-gray-600" : null
          }
          `}
        >
          {title}
        </div>
      </motion.button>
    </Link>
  );
};

export default Button;
