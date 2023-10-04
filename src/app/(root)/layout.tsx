import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-col min-h-screen">
      <h1>nav</h1>
      <main className="flex-grow">{children}</main>
      <footer>footer</footer>
    </main>
  );
}
