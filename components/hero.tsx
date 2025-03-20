"use client";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Detectar si está en móvil para ajustar scroll
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    // Revisar al cargar y cuando cambia el tamaño
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  // Función de scroll mejorada
  const scrollToAbout = () => {
    // Obtener la referencia al elemento about
    const aboutSection = document.getElementById("about");

    if (aboutSection) {
      // Usar scrollIntoView con offset ajustado según dispositivo
      const yOffset = isMobile ? -50 : -100;
      const y =
        aboutSection.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    } else {
      // Fallback al método anterior si no encuentra el ID
      const scrollPosition = isMobile ? 1800 : 2500;
      window.scrollTo({
        top: scrollPosition,
        behavior: "smooth",
      });
    }
  };

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
            {/* Sección móvil (oculta en pantallas grandes) */}
            <div className="max-w-[700px] text-left w-full pl-4 lg:hidden">
              <h1 className="text-4xl sm:text-5xl font-light text-white leading-tight">
                <div className="flex items-baseline mb-1">
                  <span className="font-caveat mr-2">Cultivando</span>
                  <span className="text-[#7FFF00] font-semibold font-poppins">
                    confianza,
                  </span>
                </div>
                <div className="flex items-baseline">
                  <span className="font-caveat mr-2">Cosechando</span>
                  <span className="text-[#7FFF00] font-semibold font-poppins">
                    futuro
                  </span>
                </div>
              </h1>
            </div>

            {/* Sección desktop (oculta en pantallas pequeñas) */}
            <div className="max-w-[700px] text-left w-full hidden lg:block">
              <h1 className="text-6xl lg:text-8xl font-light text-white">
                <div className="flex flex-row items-baseline gap-4 mb-0">
                  <span className="font-caveat">Cultivando</span>{" "}
                  <span className="text-[#7FFF00] font-semibold font-poppins">
                    confianza,
                  </span>
                </div>
                <div className="flex flex-row items-baseline gap-4">
                  <span className="font-caveat">Cosechando</span>{" "}
                  <span className="text-[#7FFF00] font-semibold font-poppins">
                    futuro
                  </span>
                </div>
              </h1>
            </div>

            {/* Botón versión móvil (centrado, oculto en pantallas grandes) */}
            <div className="w-full flex justify-center lg:hidden mt-4">
              <Button
                size="lg"
                onClick={scrollToAbout}
                className="bg-[#7FFF00] text-black hover:bg-[#7FFF00]/90 text-lg px-6 py-2 rounded-full flex items-center justify-center gap-2 transform hover:scale-105 transition-all max-w-[180px]"
              >
                Conocenos
                <ChevronDown className="w-5 h-5" />
              </Button>
            </div>

            {/* Botón versión desktop (original, oculto en pantallas pequeñas) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="hidden lg:flex lg:justify-end w-auto"
            >
              <Button
                size="lg"
                onClick={scrollToAbout}
                className="bg-[#7FFF00] text-black hover:bg-[#7FFF00]/90 text-xl px-10 py-6 rounded-full flex items-center justify-center gap-3 transform hover:scale-105 transition-all"
              >
                Conocenos
                <div className="bg-black/10 rounded-full p-1.5">
                  <ChevronDown className="w-6 h-6" />
                </div>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
