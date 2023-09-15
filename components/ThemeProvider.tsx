"use client";
import React from "react";
import { ThemeProvider as NextTheme } from "next-themes";
import type { ThemeProviderProps } from "next-themes/dist/types";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextTheme {...props}>{children}</NextTheme>;
}
