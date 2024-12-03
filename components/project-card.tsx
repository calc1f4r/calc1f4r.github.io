"use client";

import { Card } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });

interface ProjectCardProps {
  title: string;
  description: string;
  href: string;
}

export function ProjectCard({ title, description, href }: ProjectCardProps) {
  return (
    <Link href={href}>
      <Card className="group p-8 h-full transition-all hover:shadow-md border-0 bg-gray-50">
        <div className="flex justify-between items-start gap-4">
          <div className="space-y-3">
            <h3 className={`${playfair.className} text-xl font-medium`}>{title}</h3>
            <p className="text-gray-600 leading-relaxed">{description}</p>
          </div>
          <ArrowUpRight className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </Card>
    </Link>
  );
}