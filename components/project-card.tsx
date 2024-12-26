"use client";

import { Card } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import { motion } from "framer-motion";

const playfair = Playfair_Display({ subsets: ["latin"] });

interface ProjectCardProps {
  title: string;
  description: string;
  href: string;
}

export function ProjectCard({ title, description, href }: ProjectCardProps) {
  return (
    <Link href={href}>
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}
      >
        <Card className="group p-6 h-full transition-all hover:shadow-sm border-0 bg-gray-50">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-between items-start gap-3"
          >
            <div className="space-y-2">
              <h3
                className={`${playfair.className} text-sm font-medium tracking-wide`}
              >
                {title}
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                {description}
              </p>
            </div>
            <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>
        </Card>
      </motion.div>
    </Link>
  );
}
