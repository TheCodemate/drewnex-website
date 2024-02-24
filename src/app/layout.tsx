import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Poppins } from "next/font/google";
import { Header } from "../components/Header";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Drewnex - tartak z wieloletnią tradycją",
  description:
    "Jesteśmy tartakiem który od ponad 30 lat zajmuje się obróbką wysokiej jakości drewna i wytwarzaniu produktów pochodnych takich jak więźby, tarcica, drewno opałowe i wiele innych.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} min-w-[360px] scroll-smooth`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
