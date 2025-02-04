"use client";

import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Homebg = () => (
  <div className="relative w-full h-screen" id="home">
    <Image
      src="/background.jpg"
      alt="Hero background"
      layout="fill"
      objectFit="cover"
      quality={100}
    />
    <div className="absolute inset-0 bg-black bg-opacity-50" />{" "}
    {/* Overlay para mejorar la legibilidad del texto */}
    <div className="relative z-10 container mx-auto h-full flex items-center justify-center">
      <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col text-white">
        <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-bold">
          Bienvenido a Boiero Agropecuaria
        </h1>
        <p className="text-xl md:text-2xl leading-relaxed tracking-tight max-w-xl text-center">
          Innovación y calidad en el sector agropecuario
        </p>
        <Button
          size="lg"
          className="gap-4 bg-white text-black hover:bg-gray-200"
        >
          Conócenos más <MoveRight className="w-5 h-5" />
        </Button>
      </div>
    </div>
  </div>
);
