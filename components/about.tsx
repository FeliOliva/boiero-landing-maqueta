import Image from "next/image";

export const About = () => (
  <div className="w-full pt-8 sm:pt-16" id="about">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 gap-8 lg:gap-12 items-start lg:grid-cols-2">
        {/* Left Column - Image */}
        <div className="rounded-2xl sm:rounded-3xl overflow-hidden w-full">
          <div className="relative w-full aspect-[16/10]">
            <Image
              className="object-cover rounded-2xl sm:rounded-3xl"
              src="/imagenEquipo.png"
              alt="Equipo de trabajo"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>

        {/* Right Column - Content */}
        <div className="flex gap-3 sm:gap-4 flex-col">
          {/* Title Section */}
          <div className="relative">
            <span className="text-lg sm:text-xl font-poppins text-[#7dd87d]">
              Sobre nosotros
            </span>
            <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-[#7dd87d]"></div>
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl sm:text-4xl lg:text-5xl font-semibold font-poppins text-[#2c5530] mt-2">
            Vamos a <span className="font-caveat">conocernos</span>
          </h2>

          {/* Description */}
          <p className="text-base font-poppins sm:text-lg leading-relaxed text-[#4a7c59]">
            En Boiero Agropecuaria nos especializamos en la producción y venta
            de cultivos estivales y otoñales durante todo el año. Trabajamos
            principalmente con proveedores, pero ahora también queremos llegar
            directamente a vos. Creemos en construir relaciones de confianza, no
            solo con quienes nos eligen como proveedores, sino también con
            quienes disfrutan de nuestros productos en su mesa. En Boiero,
            cultivamos con dedicación y pensamos en el futuro de todos.
          </p>
        </div>

        {/* Trayectoria Section - Full Width */}
        <div className="col-span-1 lg:col-span-2 mt-12 sm:mt-16 mb-16 sm:mb-24">
          {/* Mobile Image (hidden on sm and above) */}
          <div className="block sm:hidden w-full">
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
