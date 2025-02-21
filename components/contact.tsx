"use client";

import { Twitter, Facebook, Linkedin, InstagramIcon } from "lucide-react";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";

export const Contact = () => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="w-full py-20 lg:py-40"
    id="contact"
  >
    <div className="container mx-auto">
      <div className="flex flex-col items-center gap-12 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">
          Nuestras Redes
        </h2>
        <TooltipProvider>
          <div className="flex gap-8">
            {[Facebook, InstagramIcon, Twitter, Linkedin].map((Icon, index) => (
              <Tooltip key={index}>
                <TooltipTrigger asChild>
                  <Link
                    href="#"
                    className="hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon className="w-8 h-8" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{Icon.name}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </TooltipProvider>
      </div>
    </div>
  </motion.div>
);
