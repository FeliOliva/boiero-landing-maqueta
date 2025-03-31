"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export const About = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 640); // Adjust breakpoint as needed
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  return (
    <div className="w-full pt-8 sm:pt-16 bg-[#f9f5ef]" id="about">
      <div className="container mx-auto px-8">
        {/* Título para pantallas móviles - visible solo en móviles */}
        <div className="block lg:hidden mb-4">
          <span className="text-lg sm:text-xl font-poppins text-[#7dd87d]">
            Sobre nosotros
          </span>
          <div className="w-full h-0.5 bg-[#7dd87d] mt-1 mb-4"></div>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:gap-12 items-start lg:grid-cols-2">
          {/* Left Column - Image */}
          <div className="rounded-lg overflow-hidden w-full">
            <div className="relative w-full aspect-[16/10]">
              <Image
                className="object-cover object-center"
                src={isMobile ? "/empleadoMobile.jpg" : "/empleado.jpg"}
                alt="Equipo de trabajo"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
          {/* Right Column - Content */}
          <div className="flex gap-3 sm:gap-4 flex-col px-8">
            {/* Título solo para pantallas grandes - oculto en móviles */}
            <div className="hidden lg:block mb-4">
              <span className="text-lg sm:text-xl font-poppins text-[#7dd87d]">
                Sobre nosotros
              </span>
              <div className="w-full h-0.5 bg-[#7dd87d] mt-1"></div>
            </div>
            {/* Main Heading */}
            <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-semibold font-poppins text-[#2c5530] lg:text-left sm:text-center whitespace-nowrap">
              Vamos a <span className="font-caveat italic">conocernos</span>
            </h2>
            {/* Description */}
            <p className="text-[12px] sm:text-[14px] font-poppins font-normal leading-[20px] sm:leading-[25px] text-[#0F100F]">
              En Boiero Agropecuaria nos especializamos en la producción y venta
              de cultivos estivales y otoñales durante todo el año. Trabajamos
              principalmente con proveedores, pero ahora también queremos llegar
              directamente a vos. Creemos en construir relaciones de confianza,
              no solo con quienes nos eligen como proveedores, sino también con
              quienes disfrutan de nuestros productos en su mesa. En Boiero,
              cultivamos con dedicación y pensamos en el futuro de todos 💚🌾
            </p>
          </div>
          {/* Trayectoria Section - Full Width */}
          <div className="col-span-1 lg:col-span-2 mt-12 sm:mt-16 mb-16 sm:mb-24">
            {/* Mobile Image (hidden on sm and above) */}
            <div className="block sm:hidden w-full">
              <h2 className="text-3xl sm:text-4xl font-semibold font-poppins text-[#7dd87d] mb-6">
                Trayectoria
              </h2>
              <Image
                src="/timeLineMobile.png"
                alt="Trayectoria de la empresa - versión móvil"
                width={500}
                height={600}
                layout="responsive"
                className="w-full"
                priority
              />
            </div>
            {/* Desktop Image (hidden on xs, visible from sm onwards) */}
            <div className="hidden sm:block w-full">
              <div className="relative w-full aspect-[4/1]">
                <Image
                  src="/timeLineWeb.png"
                  alt="Trayectoria de la empresa - versión escritorio"
                  fill
                  sizes="100vw"
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
