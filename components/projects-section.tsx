"use client";

import { ProjectCard } from "@/components/project-card";
import { Playfair_Display } from "next/font/google";
import { motion } from "framer-motion";

const playfair = Playfair_Display({ subsets: ["latin"] });

export function ProjectsSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <motion.h2
        className={`${playfair.className} text-2xl font-medium`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Featured Projects
      </motion.h2>
      <motion.div
        className="grid gap-6"
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
        initial="hidden"
        animate="show"
      >
        {/* ProjectCard components will inherit animation from parent */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0 },
          }}
        >
          <ProjectCard
            title="⚡ Arflash"
            description="FlashLoan protocol built on Arweave's AOS, leveraging hyperparallelized contracts written in Lua."
            href="https://arflash.vercel.app"
          />
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0 },
          }}
        >
          <ProjectCard
            title="🎨 ArtVault"
            description="Revolutionizing art ownership through fractional Paintings . Features transparent ownership records, smart contract automation, and permanent storage on Arweave."
            href="https://artvault-mu.vercel.app/"
          />
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0 },
          }}
        >
          <ProjectCard
            title="🔐 SoleSec"
            description="AI-driven auditing platform for Solana smart contracts, utilizing advanced logical reasoning via LLMs to identify vulnerabilities."
            href="https://solesec.vercel.app"
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
