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
  title?: string;
  id?: string;
  categories: Category[];
  showHeader?: boolean;
}

export const ProductCarousel = ({
  products,
  categories,
  title = "Nuestros productos",
  showHeader = true,
}: ProductCarouselProps) => {
  const [api, setApi] = useState<CarouselApi>();
  const [currentCategory, setCurrentCategory] = useState(categories[0]?.id);

  // Filter products based on the current category
  const filteredProducts = products.filter(
    (product) => product.category === currentCategory
  );

  const handleCategoryChange = (categoryId: string) => {
    setCurrentCategory(categoryId);
    // Reset carousel position when changing category
    if (api) {
      api.scrollTo(0);
    }
  };

  return (
    <div className="py-6 sm:py-10 px-4 mx-4 sm:mx-auto max-w-[1400px] rounded-xl sm:rounded-2xl bg-[#f0f7e8] sm:bg-[#f0f7e8]">
      {showHeader && (
        <div className="mb-6 sm:mb-8 relative flex flex-col sm:flex-row sm:items-center sm:justify-between">
          {/* Title for mobile - stacked layout */}
          <div className="sm:hidden w-full">
            <div className="h-[33px] self-stretch mb-4">
              <span
                className="text-[#85C153] text-right font-poppins text-xl font-semibold leading-7 block w-full"
                style={{
                  fontFamily: "Poppins",
                  fontSize: "20px",
                  fontWeight: 600,
                  lineHeight: "28px",
                }}
              >
                {title}
              </span>
              {/* Removed the underline div here */}
            </div>

            <div className="self-stretch text-center">
              {/* Ensure word-break doesn't happen and text is fully visible */}
              <div
                style={{
                  width: "100%",
                  overflowX: "visible",
                  whiteSpace: "nowrap",
                  display: "inline-block",
                }}
              >
                <span
                  className="font-caveat text-3xl font-bold"
                  style={{
                    fontFamily: "Caveat",
                    fontSize: "32px",
                    fontWeight: 700,
                    lineHeight: "normal",
                    background:
                      "linear-gradient(94deg, #85C153 -2.16%, #3F5B27 102.9%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    display: "inline", // Changed to inline for better text flow
                    wordBreak: "keep-all", // Prevents breaking the word
                  }}
                >
                  Desarrollo&nbsp;
                </span>
                <span
                  className="font-poppins text-2xl font-semibold"
                  style={{
                    fontFamily: "Poppins",
                    fontSize: "24px",
                    fontWeight: 600,
                    lineHeight: "normal",
                    background:
                      "linear-gradient(94deg, #85C153 -2.16%, #3F5B27 102.9%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    display: "inline", // Changed to inline for better text flow
                  }}
                >
                  {" "}
                  que crece
                </span>
              </div>
              <div
                className="font-poppins text-2xl font-semibold text-center"
                style={{
                  fontFamily: "Poppins",
                  fontSize: "24px",
                  fontWeight: 600,
                  lineHeight: "normal",
                  background:
                    "linear-gradient(94deg, #85C153 -2.16%, #3F5B27 102.9%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                con tus tierras
              </div>
            </div>
          </div>

          {/* Desktop layout - side by side */}
          <div className="hidden sm:flex w-full items-center justify-between pl-12">
            <div className="flex items-center">
              <div className="sm:text-left" style={{ overflowX: "visible" }}>
                <span
                  className="font-caveat text-4xl md:text-5xl font-bold"
                  style={{
                    fontFamily: "Caveat",
                    fontWeight: 700,
                    lineHeight: "normal",
                    background:
                      "linear-gradient(94deg, #85C153 -2.16%, #3F5B27 102.9%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    display: "inline-block",
                    wordBreak: "keep-all", // Prevents breaking the word
                  }}
                >
                  Desarrollo&nbsp;
                </span>
                <span
                  className="font-poppins text-3xl md:text-4xl font-semibold"
                  style={{
                    fontFamily: "Poppins",
                    fontWeight: 600,
                    lineHeight: "normal",
                    background:
                      "linear-gradient(94deg, #85C153 -2.16%, #3F5B27 102.9%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    display: "inline-block",
                  }}
                >
                  {" "}
                  que crece
                </span>
                <div
                  className="text-2xl sm:text-3xl md:text-4xl font-poppins font-semibold sm:text-left"
                  style={{
                    fontFamily: "Poppins",
                    fontWeight: 600,
                    lineHeight: "normal",
                    background:
                      "linear-gradient(94deg, #85C153 -2.16%, #3F5B27 102.9%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  con tus tierras
                </div>
              </div>
            </div>

            {/* Title for desktop on the right */}
            <div className="h-[33px] self-start">
              <span
                className="text-[#85C153] text-right font-poppins text-xl font-semibold leading-7 block w-full"
                style={{
                  fontFamily: "Poppins",
                  fontSize: "20px", // Increased from 16px to 20px
                  fontWeight: 600,
                  lineHeight: "28px",
                }}
              >
                {title}
              </span>
              {/* Removed the underline div here */}
            </div>
          </div>
        </div>
      )}

      {/* Categories */}
      <div className="flex gap-2 sm:gap-4 mb-8 sm:mb-12 overflow-x-auto pb-4 justify-start flex-nowrap sm:pl-6 lg:pl-12">
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
      <div className="relative lg:pl-12">
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
            {filteredProducts.map((product) => (
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
