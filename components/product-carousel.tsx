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
  title,
  id,
  categories,
}: ProductCarouselProps) => {
  const [api, setApi] = useState<CarouselApi>();
  const [currentCategory, setCurrentCategory] = useState(categories[0]?.id);

  // Group products by category
  const productsByCategory = products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {} as Record<string, Product[]>);

  const handleCategoryChange = (categoryId: string) => {
    setCurrentCategory(categoryId);
    const categoryIndex = categories.findIndex((cat) => cat.id === categoryId);
    if (categoryIndex !== -1 && api) {
      api.scrollTo(categoryIndex * 3); // Scroll to the start of the category
    }
  };

  return (
    <div className="py-10 px-4 max-w-[1400px] mx-auto bg-[#b0f5b0] rounded-2xl">
      <h2 className="text-4xl font-bold text-center mb-2">{title}</h2>

      {/* Category Navigation */}
      <div className="flex gap-4 mb-12 overflow-x-auto pb-4 justify-center flex-wrap">
        {categories.map((category) => (
          <Button
            key={category.id}
            onClick={() => handleCategoryChange(category.id)}
            variant={currentCategory === category.id ? "default" : "outline"}
            className="whitespace-nowrap rounded-full px-6 py-2 transition-colors text-lg"
          >
            {category.name}
          </Button>
        ))}
      </div>

      {/* Products Carousel */}
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
                <Card className="overflow-hidden group relative border rounded-lg h-full bg-[#4C7C4C]/10">
                  <div className="relative w-full h-full">
                    <div className="w-full h-[400px] relative">
                      <Image
                        src={product.imageUrl || "/placeholder.svg"}
                        alt={product.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-lime-400 p-6">
                      <h3 className="text-2xl font-semibold mb-2 text-[#f7f5ec]">
                        {product.title}
                      </h3>
                      <p className="text-black">{product.description}</p>
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
