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
  title: string;
  id: string;
  categories: Category[];
}

export const ProductCarousel = ({
  products,
  categories,
}: ProductCarouselProps) => {
  const [api, setApi] = useState<CarouselApi>();
  const [currentCategory, setCurrentCategory] = useState(categories[0]?.id);

  // const productsByCategory = products.reduce((acc, product) => {
  //   if (!acc[product.category]) {
  //     acc[product.category] = [];
  //   }
  //   acc[product.category].push(product);
  //   return acc;
  // }, {} as Record<string, Product[]>);

  const handleCategoryChange = (categoryId: string) => {
    setCurrentCategory(categoryId);
    const categoryIndex = categories.findIndex((cat) => cat.id === categoryId);
    if (categoryIndex !== -1 && api) {
      api.scrollTo(categoryIndex * 3);
    }
  };

  return (
    <div className="py-10 px-4 max-w-[1400px] mx-auto bg-[#E6F8D8] rounded-2xl">
      <div className="mb-8 relative">
        <div className="max-w-[600px]">
          <h2 className="text-5xl mb-1">
            <span className="font-dancing-script text-[#4a7c59]">
              Desarrollo
            </span>
            <span className="text-[#2c5530] font-semibold"> que crece</span>
          </h2>
          <h2 className="text-4xl text-[#2c5530] font-semibold leading-tight">
            con tus tierras
          </h2>
        </div>
        <div className="absolute right-0 top-0">
          <div className="relative">
            <span className="text-xl text-[#7dd87d]">Nuestros productos</span>
            <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-[#7dd87d]"></div>
          </div>
        </div>
      </div>
      <div className="flex gap-4 mb-12 overflow-x-auto pb-4 justify-center flex-wrap">
        {categories.map((category) => (
          <Button
            key={category.id}
            onClick={() => handleCategoryChange(category.id)}
            variant={currentCategory === category.id ? "default" : "outline"}
            className={`whitespace-nowrap rounded-full px-8 py-6 transition-colors text-lg border-2 
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
      <Carousel
        setApi={setApi}
        className="w-full relative"
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
              className="pl-2 md:pl-4 basis-full md:basis-1/3"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="h-full"
              >
                <Card className="overflow-hidden group relative border-none rounded-2xl h-full bg-[#4C7C4C]">
                  <div className="relative w-full h-full">
                    <div className="w-full h-[300px] relative">
                      <Image
                        src={product.imageUrl || "/placeholder.svg"}
                        alt={product.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6 bg-[#4C7C4C]">
                      <h3 className="text-2xl font-semibold mb-2 text-white">
                        {product.title}
                      </h3>
                      <p className="text-[#e8f3e8] text-sm leading-relaxed">
                        {product.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute -left-12 top-1/2 -translate-y-1/2 hidden md:flex" />
        <CarouselNext className="absolute -right-12 top-1/2 -translate-y-1/2 hidden md:flex" />
      </Carousel>
    </div>
  );
};

export default ProductCarousel;
