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

const arjunaData = [
  {
    name: "Inclusive-Monorepo",
    platform: "Cantina",
    category: "Solana-native, Cross-chain",
    ranking: "🥈 2nd",
    findings: "15 High, 2 Medium (13 solos)",
    link: "https://cantina.xyz/competitions/3eff5a8f-b73a-4cfe-8c54-546b475548f0/leaderboard",
  },
  {
    name: "Reserve-protocol",
    platform: "Cantina",
    category: "Staking, Rewards",
    ranking: "4th",
    findings: "1 High, 1 Medium",
    link: "https://cantina.xyz/competitions/8b94becd-54e7-41cd-88e6-caae7becc76a/leaderboard",
  },
  {
    name: "Soon-Labs/Soon",
    platform: "Cantina",
    category: "SVM, cross-chain",
    ranking: "🥇 10th",
    findings: "3 Highs 1 solo",
    link: "https://cantina.xyz/competitions/08c2b0b4-8449-4136-82a2-7074ccdfffac/leaderboard",
  },
  {
    name: "Pump-Science",
    platform: "Code4rena",
    category: "Solana, bonding-curve",
    ranking: "13th",
    findings: "1 M",
    link: "https://code4rena.com/audits/2025-01-pump-science",
  },
];

export function AuditsSection() {
  return (
    <div className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
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
              className="group"
            >
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

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="space-y-8"
      >
        <h2 className={`${playfair.className} text-xl font-medium tracking-wide`}>
          Arjuna Audits
        </h2>
        <div className="grid gap-4">
          {arjunaData.map((audit, index) => (
            <motion.div
              key={audit.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="grid grid-cols-5 gap-4 text-sm">
                  <Link href={audit.link} className="font-medium hover:underline">
                    {audit.name}
                  </Link>
                  <div className="text-gray-600">{audit.platform}</div>
                  <div className="text-gray-600">{audit.category}</div>
                  <div className="text-gray-600">{audit.ranking}</div>
                  <div className="text-gray-600">{audit.findings}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
