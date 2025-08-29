import "./globals.css";
import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: "My Web Nafly",
  description: "Portfolio dibuat dengan Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-jersey">
        <Header />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
