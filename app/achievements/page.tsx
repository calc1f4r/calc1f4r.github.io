"use client";

import { motion } from "framer-motion";
import { Playfair_Display } from "next/font/google";
import { Card } from "@/components/ui/card";

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
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}
      >
         <Card className="group  h-full transition-all hover:shadow-sm border-0 bg-gray-50">
        <div className="p-4 rounded-lg">
          <h3 className="font-medium mb-1 text-sm">
            Solana Radar Hackathon{" "}
          </h3>
          <p className="text-gray-600 mb-2 text-xs">
            3rd runner-up in the side-track Berlin Hackathon, 2024 
          </p>
          <p className="text-xs">
            Built{" "}
            <Link
              href="https://gigentic-frontend.vercel.app/"
              className="hover:underline"
            >
              Gigentic AI
            </Link>
          </p>
        </div>
      </Card>
      </motion.div>
    </motion.section>
  );
}
