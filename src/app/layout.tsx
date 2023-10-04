import "./globals.css";
import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "@/context/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-spaceGrotesk",
});

export const metadata: Metadata = {
  title: "Paularis",
  description:
    "Discover a world of flavors and convenience at Paularis – your one-stop shop for premium spices, eco-friendly disposable plates and cups, and essential utensils. Elevate your culinary experience with our handpicked spice collection, while reducing your environmental footprint with our sustainable tableware options. Shop now for quality, variety, and sustainability!",
    icons:{
      icon:'../favicon.ico',
      apple:'../apple-touch-icon.png',
    }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
        <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <ThemeProvider>
          {children}
      </ThemeProvider>
        </body>
    </html>
  );
}
