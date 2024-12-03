import "./globals.css";
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Calcifer (Yash) | Smart Contract Auditor",
  description: "Smart contract auditor specializing in Web3 security and blockchain ecosystems",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}