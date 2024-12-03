"use client";

import { ProjectCard } from "@/components/project-card";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });

export function ProjectsSection() {
  return (
    <section className="space-y-8">
      <h2 className={`${playfair.className} text-2xl font-medium`}>
        Featured Projects
      </h2>
      <div className="grid gap-6">
        <ProjectCard
          title="Flashloan Protocol"
          description="FlashLoan protocol built on Arweave's AOS, leveraging hyperparallelized contracts written in Lua."
          href="https://arflash.vercel.app"
        />
        <ProjectCard
          title="🎨 ArtVault"
          description="A blockchain-based platform revolutionizing art ownership through fractional NFTs. Features transparent ownership records, smart contract automation, and permanent storage on Arweave."
          href="https://artvault-mu.vercel.app/"
        />
        <ProjectCard
          title="SoleSec"
          description="AI-driven auditing platform for  Solana smart contracts, utilizing advanced logical reasoning via LLMs to identify vulnerabilities."
          href="https://solesec.vercel.app"
        />
      </div>
    </section>
  );
}
