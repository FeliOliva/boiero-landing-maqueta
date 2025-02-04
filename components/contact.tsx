"use client";

import { Twitter, Facebook, Linkedin, InstagramIcon } from "lucide-react";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const Contact = () => (
  <div className="w-full py-20 lg:py-40" id="contact">
    <div className="container mx-auto">
      <div className="flex flex-col items-center gap-12 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">
          Nuestras Redes
        </h2>
        <TooltipProvider>
          <div className="flex gap-8">
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook className="w-8 h-8" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>Facebook</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="https://www.instagram.com/boieroagropecuariasas/"
                  className="hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InstagramIcon className="w-8 h-8" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>Instagram: @boieroagropecuariasas</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter className="w-8 h-8" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>Twitter</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-8 h-8" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>LinkedIn</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </TooltipProvider>
      </div>
    </div>
  </div>
);
