// import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";
import { Metadata } from "next";
import { Allura, Montserrat, Poppins } from "next/font/google";
// import Header from "@/components/Header/Header";

export const heading = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const description = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const cursive = Allura({
  subsets: ["latin"],
  weight: ["400"],
  style: "normal",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${description.className} dark:bg-zinc-950 bg-zinc-100`}>
        {/* <ThemeProvider attribute="class" defaultTheme="system" enableSystem> */}
        {/* <Header /> */}
        <main>{children}</main>
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
