"use client";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, MoveRight, X } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const navigationItems = [
    {
      title: "Inicio",
      href: "#home",
    },
    {
      title: "Sobre Nosotros",
      href: "#about",
    },
    {
      title: "Productos",
      description: "Conoce nuestra línea completa de productos agropecuarios",
      items: [
        {
          title: "Productos 1",
          href: "#product1",
        },
        {
          title: "Productos 2",
          href: "#products2",
        },
      ],
    },
    {
      title: "Contacto",
      href: "#contact",
    },
    {
      title: "Final",
      href: "#final",
    },
  ];

  const [isOpen, setOpen] = useState(false);

  return (
    <header className="w-full z-40 fixed top-0 left-0 bg-background border-b">
      <div className="container relative mx-auto min-h-14 flex items-center">
        {/* Logo/Title - Centered on desktop, left on mobile */}
        <div className="lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:transform">
          <p className="font-semibold text-xl">Boiero Agropecuaria</p>
        </div>

        <NavigationMenu className="hidden lg:flex justify-start w-full">
          <NavigationMenuList className="flex gap-4 flex-row">
            {navigationItems.map((item) => (
              <NavigationMenuItem key={item.title}>
                {item.href && !item.items ? (
                  <NavigationMenuLink asChild>
                    <a href={item.href} className="inline-block">
                      <Button variant="ghost">{item.title}</Button>
                    </a>
                  </NavigationMenuLink>
                ) : (
                  <>
                    <NavigationMenuTrigger className="font-medium text-sm">
                      {item.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="!w-[450px] p-4">
                      <div className="flex flex-col lg:grid grid-cols-2 gap-4">
                        <div className="flex flex-col h-full justify-between">
                          <div className="flex flex-col">
                            <p className="text-base">{item.title}</p>
                            <p className="text-muted-foreground text-sm">
                              {item.description}
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-col text-sm h-full justify-end">
                          {item.items?.map((subItem) => (
                            <a
                              href={subItem.href}
                              key={subItem.title}
                              className="flex flex-row justify-between items-center hover:bg-muted py-2 px-4 rounded"
                            >
                              <span>{subItem.title}</span>
                              <MoveRight className="w-4 h-4 text-muted-foreground" />
                            </a>
                          ))}
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <Button
          variant="ghost"
          onClick={() => setOpen(!isOpen)}
          className="lg:hidden ml-auto"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </Button>

        {isOpen && (
          <div className="absolute top-14 border-t flex flex-col w-full left-0 bg-background shadow-lg py-4 px-3 container gap-8">
            {navigationItems.map((item) => (
              <div key={item.title}>
                <div className="flex flex-col gap-2">
                  {item.href && !item.items ? (
                    <a
                      href={item.href}
                      className="flex justify-between items-center"
                      onClick={() => setOpen(false)}
                    >
                      <span className="text-lg">{item.title}</span>
                      <MoveRight className="w-4 h-4 stroke-1 text-muted-foreground" />
                    </a>
                  ) : (
                    <p className="text-lg">{item.title}</p>
                  )}
                  {item.items &&
                    item.items.map((subItem) => (
                      <a
                        key={subItem.title}
                        href={subItem.href}
                        className="flex justify-between items-center"
                        onClick={() => setOpen(false)}
                      >
                        <span className="text-muted-foreground">
                          {subItem.title}
                        </span>
                        <MoveRight className="w-4 h-4 stroke-1" />
                      </a>
                    ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};
