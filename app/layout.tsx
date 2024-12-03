import "./globals.css";
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import NavigationMenu from "@/components/ui/navigation-menu";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "calc1f4r",
  description:
    "Smart contract auditor specializing in Web3 security and blockchain ecosystems",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavigationMenu />
        <main className="min-h-screen bg-white">
          <div className="max-w-3xl mx-auto px-6 py-24 space-y-32">
            {children}
            <Footer />
          </div>
        </main>
      </body>
    </html>
  );
}
