"use client";
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
    const aboutSection = document.getElementById("about");

    if (aboutSection) {
      const yOffset = isMobile ? -50 : -100;
      const y =
        aboutSection.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    } else {
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
        src={isMobile ? "/bgfinalmobile.jpg" : "/bgfinaal2.jpg"}
        alt="Hero background"
        fill
        className="object-cover object-center"
        priority
        quality={100}
      />
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative z-10 container mx-auto h-full">
        {/* Título reposicionado más abajo en móvil */}
        <div className="absolute top-[60%] w-full lg:top-[35%] lg:left-[5%] lg:w-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col"
          >
            {/* Mobile heading - centrado y bajado */}
            <div className="lg:hidden px-4 text-center">
              <h1 className="text-4xl sm:text-5xl font-light text-white leading-tight">
                <span className="font-caveat">Trayectoria en semillas</span>{" "}
                <span className="text-[#65D71E] font-semibold font-poppins block">
                  forrajeras y pasturas…
                </span>
              </h1>
            </div>

            {/* Desktop heading */}
            <div className="hidden lg:block">
              <h1 className="text-10xl lg:text-8xl font-light text-white leading-tight">
                <div className="flex flex-row items-baseline gap-4 mb-0">
                  <span className="font-caveat">Trayectoria en semillas</span>
                </div>
                <div className="flex flex-row items-baseline gap-4">
                  <span className="text-[#65D71E] font-semibold font-poppins">
                    Forrajeras y Pasturas…
                  </span>
                </div>
              </h1>
            </div>
          </motion.div>
        </div>

        {/* Botón Conocenos - reposicionado más abajo siguiendo el título */}
        <div className="absolute bottom-[12%] lg:bottom-[20%] left-0 w-full px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col lg:flex-row lg:justify-end max-w-[1200px] mx-auto gap-8 lg:gap-0"
          >
            {/* Mobile button - centrado y reposicionado */}
            <div className="w-full flex justify-center lg:hidden mt-6">
              <button
                onClick={scrollToAbout}
                className="bg-[#7FFF00] text-black hover:bg-[#7FFF00]/90 text-lg px-8 py-3 rounded-full flex items-center justify-center gap-2 transform hover:scale-105 transition-all max-w-[180px]"
              >
                Conocenos
                <div className="bg-black/10 rounded-full p-1">
                  <svg
                    width="24"
                    height="23"
                    viewBox="0 0 24 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.9361 22.8669C18.1289 22.9141 23.1879 17.9315 23.235 11.7387C23.2822 5.54595 18.2996 0.486982 12.1069 0.439845C5.91406 0.392708 0.855095 5.37525 0.807958 11.568C0.760821 17.7608 5.74336 22.8198 11.9361 22.8669ZM6.87172 8.23753L12.0078 13.4524L17.2227 8.31632L18.4334 9.54561L11.9892 15.8924L5.64242 9.44825L6.87172 8.23753Z"
                      fill="#0F100F"
                    />
                  </svg>
                </div>
              </button>
            </div>

            {/* Desktop button - sin cambios */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="hidden lg:flex lg:justify-end w-auto"
            >
              <button
                onClick={scrollToAbout}
                className="flex w-[250px] h-[60px] transform rotate-[0.436deg] justify-center items-center gap-[15px] 
               flex-shrink-0 rounded-[25px] border border-black bg-[#65D71E] 
               text-[#0F100F] text-[24px] font-poppins font-normal leading-[0px] transition-all hover:scale-105"
              >
                Conocenos
                <div className="bg-black/10 rounded-full p-1.5">
                  <svg
                    width="24"
                    height="23"
                    viewBox="0 0 24 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.9361 22.8669C18.1289 22.9141 23.1879 17.9315 23.235 11.7387C23.2822 5.54595 18.2996 0.486982 12.1069 0.439845C5.91406 0.392708 0.855095 5.37525 0.807958 11.568C0.760821 17.7608 5.74336 22.8198 11.9361 22.8669ZM6.87172 8.23753L12.0078 13.4524L17.2227 8.31632L18.4334 9.54561L11.9892 15.8924L5.64242 9.44825L6.87172 8.23753Z"
                      fill="#0F100F"
                    />
                  </svg>
                </div>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
