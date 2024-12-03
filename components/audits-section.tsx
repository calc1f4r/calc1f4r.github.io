"use client";
import { motion } from "framer-motion";
import { Playfair_Display } from "next/font/google";
import Link from "next/link";

const playfair = Playfair_Display({ subsets: ["latin"] });

const auditData = [
  {
    name: "Chakra",
    platform: "Code4rena",
    category: "Cross-chain",
    ranking: "#26",
    findings: "1 M, 1H, 3L",
    link: "#",
  },
  {
    name: "Axion",
    platform: "Sherlock",
    category: "Stablecoin, Swapping",
    ranking: "#10",
    findings: "1 M",
    link: "https://github.com/sherlock-audit/2024-10-axion-judging/issues/122",
  },
  {
    name: "Woofi Swap",
    platform: "Sherlock",
    category: "Swapping",
    ranking: "#6",
    findings: "1 M",
    link: "https://github.com/sherlock-audit/2024-08-woofi-solana-deployment-judging/issues/57",
  },
];

export function AuditsSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8">
      <h2 className={`${playfair.className} text-xl font-medium tracking-wide`}>
        Competitive Audits
      </h2>
      <div className="grid gap-4">
        {auditData.map((audit, index) => (
          <motion.div
            key={audit.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group">
            <Link href={audit.link}>
              <div className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="grid grid-cols-5 gap-4 text-sm">
                  <div className="font-medium">{audit.name}</div>
                  <div className="text-gray-600">{audit.platform}</div>
                  <div className="text-gray-600">{audit.category}</div>
                  <div className="text-gray-600">{audit.ranking}</div>
                  <div className="text-gray-600">{audit.findings}</div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
