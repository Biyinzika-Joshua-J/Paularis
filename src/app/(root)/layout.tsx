import React from "react";
import Navbar from "@/components/shared/Navbar/Navbar";
import Footer from "@/components/shared/Footer/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar/>
      <main className="flex-grow">{children}</main>
      <Footer/>
    </main>
  );
}
