"use client";

import { motion } from "framer-motion";

export default function BlogsPage() {
  return (
    <motion.h1
      className="text-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      Coming Soon...
    </motion.h1>
  );
}
