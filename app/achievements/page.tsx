"use client";

import { motion } from "framer-motion";
import { Playfair_Display } from "next/font/google";
import Link from "next/link";

const playfair = Playfair_Display({ subsets: ["latin"] });

export default function AchievementsPage() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <h1 className={`${playfair.className} text-xl font-medium`}>
        Achievements
      </h1>
      <div className="space-y-4">
        <div className="p-4 rounded-lg">
          <h3 className="font-medium mb-1 text-base">
            Solana Radar Hackathon{" "}
          </h3>
          <p className="text-gray-600 mb-2 text-sm">
            3rd runner-up in the side track Berlin
          </p>
          <p className="text-sm">
            Built{" "}
            <Link
              href="https://gigentic-frontend.vercel.app/"
              className="hover:underline"
            >
              Gigentic AI
            </Link>
          </p>
        </div>
      </div>
    </motion.section>
  );
}
