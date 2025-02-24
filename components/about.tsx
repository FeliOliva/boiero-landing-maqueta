import Image from "next/image";

export const About = () => (
  <div className="w-full py-12" id="about">
    <div className="container mx-auto">
      <div className="grid container grid-cols-1 gap-8 items-start lg:grid-cols-2">
        {/* Left Column - Image */}
        <div className="rounded-3xl overflow-hidden max-w-[500px] justify-self-center lg:justify-self-start">
          <div className="relative w-full aspect-[4/3]">
            <Image
              className="object-cover rounded-3xl"
              src="/imagenEquipo.png"
              alt="Equipo de trabajo"
              fill
              sizes="(max-width: 768px) 100vw, 500px"
            />
          </div>
        </div>

        {/* Right Column - Content */}
        <div className="flex gap-4 flex-col">
          {/* Title Section */}
          <div className="relative">
            <span className="text-xl text-[#7dd87d]">Sobre nosotros</span>
            <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-[#7dd87d]"></div>
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl lg:text-5xl font-semibold text-[#2c5530] mt-4">
            Vamos a <span className="font-dancing-script">conocernos</span>
          </h2>

          {/* Description */}
          <p className="text-lg leading-relaxed text-[#4a7c59]">
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
        <div className="col-span-1 lg:col-span-2 mt-8">
          <div className="w-full relative">
            <div className="relative w-full aspect-[4/1]">
              <Image
                src="/trayectoria.png"
                alt="Trayectoria de la empresa"
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
