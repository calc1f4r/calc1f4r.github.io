"use client";
import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const NavigationMenu = () => {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/audits", label: "Audits" },
    { href: "/blogs", label: "Blogs" },
    { href: "/achievements", label: "Achievements" },
  ];

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex justify-center space-x-6 p-3 bg-white shadow-sm"
    >
      {navLinks.map((link) => (
        <motion.div
          key={link.href}
          whileHover={{ y: -2 }}
          transition={{ duration: 0.2 }}
        >
          <Link
            href={link.href}
            className={cn(
              "text-xs tracking-wide transition-colors uppercase",
              pathname === link.href
                ? "text-black font-medium border-b border-black"
                : "text-gray-600 hover:text-black",
            )}
          >
            {link.label}
          </Link>
        </motion.div>
      ))}
    </motion.nav>
  );
};

export default NavigationMenu;
