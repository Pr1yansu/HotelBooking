import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";
import { Allura, Montserrat, Poppins } from "next/font/google";
import Header from "@/components/Header/Header";

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <title>Hotel Booking</title>
        <meta name="description" content="Hotel Booking" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </head>
      <body className={`${description.className} dark:bg-zinc-950 bg-zinc-100`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
