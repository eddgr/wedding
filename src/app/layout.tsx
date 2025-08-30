import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import { cormorant, lato } from "./fonts";

export const metadata: Metadata = {
  title: "Vivian & Edgar's Wedding",
  description: "February 6, 2026 @ Gizella Kopsick Arboretum",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${lato.variable} antialiased`}>
        <div className="flex flex-col min-h-screen">
          <main className="flex-grow container mx-auto px-4">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
