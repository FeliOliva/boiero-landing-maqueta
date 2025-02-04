import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const About = () => (
  <div className="w-full py-20 lg:py-40" id="about">
    <div className="container mx-auto">
      <div className="grid border rounded-lg container py-8 grid-cols-1 gap-8 items-center lg:grid-cols-2">
        <div className="px-6 flex gap-10 flex-col">
          <div className="flex gap-4 flex-col">
            <div className="flex gap-2 flex-col">
              <h2 className="text-3xl lg:text-5xl tracking-tighter max-w-xl text-left font-regular">
                Un poco sobre nosotros!
              </h2>
              <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
                Nuestra gran empresa.
              </p>
            </div>
          </div>
          <div className="grid lg:pl-6 grid-cols-1 sm:grid-cols-3 items-start lg:grid-cols-1 gap-6">
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-16 h-16 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Historia</p>
                <p className="text-muted-foreground text-sm">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic
                  quo cum a, sint praesentium maxime sapiente nostrum est optio
                  nesciunt in nam facere non dolores labore nisi eveniet iste
                  fugit?.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-16 h-16 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Algo</p>
                <p className="text-muted-foreground text-sm">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Suscipit, quod labore? Odit reiciendis, facere quo nostrum
                  voluptatem eveniet dolorem consequuntur incidunt minus, labore
                  aliquam tempore nobis minima sequi ducimus error.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-md aspect-square px-4">
          <img className="rounded-3xl" src="/imagen1.jpg" alt="placeholder" />
        </div>
      </div>
    </div>
  </div>
);
