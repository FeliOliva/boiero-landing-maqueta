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
            className="flex justify-between items-end max-w-[1200px] mx-auto"
          >
            <div className="max-w-[700px]">
              <h1 className="text-6xl sm:text-6xl md:text-8xl lg:text-8xl font-light text-white ">
                <div className="flex items-baseline gap-4">
                  <span className="font-cursive">Cultivando</span>{" "}
                  <span className="text-[#7FFF00] font-bold not-italic">
                    confianza,
                  </span>
                </div>
                <div className="flex  items-baseline gap-4">
                  <span className="font-cursive">Cosechando</span>{" "}
                  <span className="text-[#7FFF00] font-bold not-italic">
                    futuro
                  </span>
                </div>
              </h1>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <Button
                size="lg"
                className="bg-[#7FFF00] text-black hover:bg-[#7FFF00]/90 text-2xl px-10 py-8 rounded-full flex items-center gap-3 transform hover:scale-105 transition-all"
              >
                Conocenos
                <div className="bg-black/10 rounded-full p-2">
                  <MoveRight className="w-8 h-8" />
                </div>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
