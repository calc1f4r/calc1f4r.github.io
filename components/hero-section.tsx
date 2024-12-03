"use client";

import { Github, Twitter } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });

export function HeroSection() {
  return (
    <section className="space-y-8">
      <h1 className={`${playfair.className} text-5xl font-medium tracking-tight`}>
        Calcifer
      </h1>
      <div className="space-y-6">
        <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
          A 17-year-old smart contract auditor specializing in Web3 security and blockchain ecosystems, 
          with expertise in EVM chains, Solana, StarkNet, and Arweave.
        </p>
      </div>
      <div className="flex gap-4">
        <Button variant="outline" size="icon" asChild>
          <Link href="https://github.com/calcifer" target="_blank">
            <Github className="h-4 w-4" />
          </Link>
        </Button>
        <Button variant="outline" size="icon" asChild>
          <Link href="https://twitter.com/calcifer" target="_blank">
            <Twitter className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}