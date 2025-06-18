"use client";

import { Github, Twitter } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Playfair_Display } from "next/font/google";
import { motion } from "framer-motion";

const playfair = Playfair_Display({ subsets: ["latin"] });

export function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <motion.h1
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className={`${playfair.className} text-3xl font-medium tracking-wider`}
      >
        Calc1f4r
      </motion.h1>
      <motion.div
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="space-y-4"
      >
        <p className="text-base text-gray-600 leading-relaxed max-w-2xl">
          A rusty 🦀
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="inline-block mx-1 italic text-gray-800"
          >
            security Researcher
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="inline-block mx-1 italic text-gray-800"
          >
            developer
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="inline-block mx-1 italic text-gray-800"
          >
            technical writer
          </motion.span>
          with expertise in EVM chains and non-evm like Solana, Soroban, Sui, Aptos, etc.
        </p>
        <p className="text-base text-gray-600 leading-relaxed max-w-2xl">
          For private audits, reach{" "}
          <Link href="https://t.me/calc1f4r" className=" font-medium	underline">
            here
          </Link>
        </p>
      </motion.div>
      <motion.div
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="flex gap-3"
      >
        <Button variant="outline" size="sm" asChild>
          <Link href="https://github.com/calc1f4r" target="_blank">
            <Github className="h-3 w-3" />
          </Link>
        </Button>
        <Button variant="outline" size="sm" asChild>
          <Link href="https://twitter.com/calc1f4r" target="_blank">
            <Twitter className="h-3 w-3" />
          </Link>
        </Button>
      </motion.div>
    </motion.section>
  );
}
