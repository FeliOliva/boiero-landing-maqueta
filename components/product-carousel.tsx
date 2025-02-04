"use client";

import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

interface Product {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

interface ProductCarouselProps {
  products: Product[];
  title: string;
  id: string; // Nuevo prop para el ID
}

export const ProductCarousel = ({
  products,
  title,
  id,
}: ProductCarouselProps) => {
  return (
    <div id={id} className="py-10">
      {" "}
      {/* Añadimos el ID aquí */}
      <h2 className="text-2xl font-bold text-center mb-8">{title}</h2>
      <Carousel className="w-full max-w-[250px] sm:max-w-[400px] md:max-w-[600px] lg:max-w-[800px] mx-auto relative">
        <CarouselContent>
          {products.map((product) => (
            <CarouselItem key={product.id}>
              <Card className="overflow-hidden group relative border rounded-lg">
                <div className="relative w-full">
                  {/* Contenedor de imagen y título */}
                  <div className="relative">
                    <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/70 to-transparent p-4 z-10">
                      <h3 className="text-white text-lg sm:text-xl md:text-2xl font-semibold text-center">
                        {product.title}
                      </h3>
                    </div>
                    <div className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] relative">
                      <Image
                        src={product.imageUrl || "/placeholder.svg"}
                        alt={product.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 250px) 100vw, (max-width: 400px) 400px, (max-width: 600px) 600px, 800px"
                      />
                    </div>
                  </div>

                  {/* Descripción */}
                  <div
                    className={`
                    bg-white p-4 sm:p-6 
                    sm:absolute sm:bottom-0 sm:left-0 sm:right-0
                    sm:translate-y-full sm:group-hover:translate-y-0
                    transition-transform duration-300 ease-in-out
                  `}
                  >
                    <p className="text-sm sm:text-base md:text-lg text-gray-600 text-center">
                      {product.description}
                    </p>
                  </div>
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute -left-12 top-1/2 -translate-y-1/2" />
        <CarouselNext className="absolute -right-12 top-1/2 -translate-y-1/2" />
      </Carousel>
    </div>
  );
};
