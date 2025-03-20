"use client";

import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import type { CarouselApi } from "@/components/ui/carousel";

interface Product {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
}

interface Category {
  id: string;
  name: string;
}

interface ProductCarouselProps {
  products: Product[];
  title?: string; // Hacemos que el título sea opcional
  id: string;
  categories: Category[];
  showHeader?: boolean; // Nueva prop para controlar si se muestra el encabezado
}

export const ProductCarousel = ({
  products,
  categories,
  title = "Nuestros productos", // Valor por defecto
  id,
  showHeader = true, // Por defecto mostramos el encabezado
}: ProductCarouselProps) => {
  const [api, setApi] = useState<CarouselApi>();
  const [currentCategory, setCurrentCategory] = useState(categories[0]?.id);

  const handleCategoryChange = (categoryId: string) => {
    setCurrentCategory(categoryId);
    const categoryIndex = categories.findIndex((cat) => cat.id === categoryId);
    if (categoryIndex !== -1 && api) {
      api.scrollTo(categoryIndex * 3);
    }
  };

  return (
    <div className="py-6 sm:py-10 px-4 mx-4 sm:mx-auto max-w-[1400px] rounded-xl sm:rounded-2xl">
      {/* Mostramos el encabezado solo si showHeader es true */}
      {showHeader && (
        <div className="mb-6 sm:mb-8 relative flex flex-col sm:block">
          <div className="relative mb-4 sm:mt-0 sm:absolute sm:right-0 sm:top-0">
            <div className="relative">
              <span className="text-lg font-poppins sm:text-xl text-[#7dd87d]">
                {title}
              </span>
              <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-[#7dd87d]"></div>
            </div>
          </div>
          <div className="max-w-[600px]">
            <h2 className="text-3xl sm:text-4xl md:text-5xl mb-1">
              <span className="font-caveat text-[#4a7c59]">Desarrollo</span>
              <span className="text-[#2c5530] font-poppins"> que crece</span>
            </h2>
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#2c5530] font-poppins leading-tight">
              con tus tierras
            </h2>
          </div>
        </div>
      )}

      {/* Categories */}
      <div className="flex gap-2 sm:gap-4 mb-8 sm:mb-12 overflow-x-auto pb-4 justify-start flex-nowrap">
        {categories.map((category) => (
          <Button
            key={category.id}
            onClick={() => handleCategoryChange(category.id)}
            variant={currentCategory === category.id ? "default" : "outline"}
            className={`whitespace-nowrap rounded-full px-4 sm:px-8 py-4 sm:py-6 transition-colors text-base sm:text-lg border-2 flex-shrink-0
              ${
                currentCategory === category.id
                  ? "bg-[#7dd87d] text-white border-transparent hover:bg-[#6cc76c]"
                  : "bg-transparent border-[#2c5530] text-[#2c5530] hover:bg-[#f0f7f0]"
              }`}
          >
            {category.name}
          </Button>
        ))}
      </div>

      {/* Carousel */}
      <div className="relative">
        <Carousel
          setApi={setApi}
          className="w-full"
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {products.map((product) => (
              <CarouselItem
                key={product.id}
                className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="h-full"
                >
                  <Card className="overflow-hidden group relative border-none rounded-xl sm:rounded-2xl h-full bg-[#4C7C4C]">
                    <div className="relative w-full h-full">
                      <div className="w-full h-[200px] sm:h-[250px] md:h-[300px] relative">
                        <Image
                          src={product.imageUrl || "/placeholder.svg"}
                          alt={product.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4 sm:p-6 bg-[#4C7C4C]">
                        <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-white">
                          {product.title}
                        </h3>
                        <p className="text-[#e8f3e8] text-sm leading-relaxed line-clamp-3 sm:line-clamp-none">
                          {product.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute -left-4 sm:-left-12 top-1/2 -translate-y-1/2 hidden sm:flex" />
          <CarouselNext className="absolute -right-4 sm:-right-12 top-1/2 -translate-y-1/2 hidden sm:flex" />
        </Carousel>
      </div>
    </div>
  );
};
