"use client";

import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";

export const Hero = () => {
  return (
    <div className="relative w-full h-screen" id="home">
      <Image
        src="/bg.png"
        alt="Hero background"
        fill
        className="object-cover"
        priority
        quality={100}
      />
      <div className="absolute inset-0 bg-black/20" />

      <div className="relative z-10 container mx-auto h-full">
        <div className="absolute bottom-[20%] left-0 w-full px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col lg:flex-row lg:justify-between lg:items-end max-w-[1200px] mx-auto gap-8 lg:gap-0"
          >
            <div className="max-w-[700px]">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-light text-white">
                <div className="flex flex-col sm:flex-row items-baseline gap-2 sm:gap-4 mb-2 sm:mb-0">
                  <span className="font-caveat">Cultivando</span>{" "}
                  <span className="text-[#7FFF00] font-semibold font-poppins">
                    confianza,
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row items-baseline gap-2 sm:gap-4">
                  <span className="font-caveat">Cosechando</span>{" "}
                  <span className="text-[#7FFF00] font-semibold font-poppins">
                    futuro
                  </span>
                </div>
              </h1>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="w-full sm:w-auto"
            >
              <Button
                size="lg"
                onClick={() =>
                  window.scrollTo({ top: 2500, behavior: "smooth" })
                }
                className="w-full sm:w-auto bg-[#7FFF00] text-black hover:bg-[#7FFF00]/90 text-xl sm:text-2xl px-6 sm:px-10 py-6 sm:py-8 rounded-full flex items-center justify-center gap-3 transform hover:scale-105 transition-all"
              >
                Conocenos
                <div className="bg-black/10 rounded-full p-1.5 sm:p-2">
                  <MoveRight className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
