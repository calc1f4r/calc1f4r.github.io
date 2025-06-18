"use client";

import { ProjectCard } from "@/components/project-card";
import { Playfair_Display } from "next/font/google";
import { motion } from "framer-motion";

const playfair = Playfair_Display({ subsets: ["latin"] });

export default function BlogsSection() {
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
        Writings
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
     
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0 },
          }}
        >
<ProjectCard
  title="How Secure Are NFTs?"
  description="Exploring NFT Security: In-Depth Analysis of ERC721 Vulnerabilities"
  href="https://calc1f4r.hashnode.dev/how-secure-are-nfts"
/>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0 },
          }}
        >
<ProjectCard
  title="Memory Safety ≠ Smart Contract Safety"
  description="Why Solana Programs Still Need Audits Despite Rust's Memory Safety Features"
  href="https://threesigma.xyz/blog/rust-and-solana/rust-solana-memory-safety-smart-contract-audits"
/>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0 },
          }}
        >
<ProjectCard
  title="Unlocking the Spellbook of EIP-2535: The Diamond Proxies"
  description="A deep dive into the powerful upgradeable contract pattern that's revolutionizing smart contract development"
  href="https://calc1f4r.hashnode.dev/unlocking-the-spellbook-of-eip-2535-the-diamond-proxies"
/>
        </motion.div>

      </motion.div>
    </motion.section>
  );
}
