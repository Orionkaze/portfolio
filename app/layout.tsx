import type { Metadata } from "next";
import { Bebas_Neue, DM_Mono, Playfair_Display, Space_Grotesk } from "next/font/google";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./globals.css";

// Tell Font Awesome to skip adding the CSS automatically since it's being imported above
config.autoAddCss = false;

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const dmMono = DM_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-dm-mono",
  display: "swap",
});

const playfair = Playfair_Display({
  weight: "400",
  style: "italic",
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Akshit Shukla | CTO & Full-Stack Developer",
  description: "Cinematic F1-themed portfolio for Akshit Shukla. Building systems that move fast, hold under pressure, and look like nothing else on the grid.",
  openGraph: {
    title: "Akshit Shukla | CTO & Full-Stack Developer",
    description: "Building systems that move fast, hold under pressure, and look like nothing else on the grid.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="en" 
      className={`${bebas.variable} ${dmMono.variable} ${playfair.variable} ${spaceGrotesk.variable}`}
    >
      <body className="antialiased bg-black text-[#E8E0CC] selection:bg-[#C9A84C] selection:text-black">
        {children}
      </body>
    </html>
  );
}
