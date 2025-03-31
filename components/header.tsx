"use client";

import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const navigationItems = [
  {
    title: "Inicio",
    href: "#inicio",
  },
  {
    title: "Productos",
    href: "#productos",
    items: [
      { title: "Productos 1", href: "#productos1" },
      { title: "Productos 2", href: "#productos2" },
    ],
  },
  {
    title: "Sobre Nosotros",
    href: "#about",
  },
  {
    title: "Contacto",
    href: "#contacto",
  },
];

export const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`w-full z-40 fixed top-0 left-0 transition-all duration-300 ${
        isScrolled
          ? "bg-white/10 backdrop-blur-md border-b border-white/20"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto min-h-16 lg:min-h-20 flex items-center justify-between px-8 pt-8">
        <div className="flex items-center w-[100px] lg:w-[140px]">
          <Image
            src="/test.png"
            alt="Boiero Logo"
            width={100}
            height={46}
            className="h-auto w-[64px] lg:w-[100px]"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center justify-center flex-1">
          <div className="flex items-center gap-12">
            {navigationItems.map((item) => (
              <div
                key={item.title}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.title)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={item.href}
                  className={`text-lg font-semibold transition-colors flex items-center gap-1 ${
                    isScrolled ? "text-black" : "text-black"
                  } hover:text-[#7FFF00]`}
                >
                  {item.title}
                  {item.items && <ChevronDown className="w-4 h-4" />}
                </a>
                {item.items && activeDropdown === item.title && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white/10 backdrop-blur-md border border-white/20 rounded-md shadow-lg py-2 z-50">
                    {/* Agregamos un área invisible que extiende la zona interactiva */}
                    <div className="absolute inset-0 -top-6 -left-4 -right-4 h-8 bg-transparent"></div>

                    {item.items.map((subItem) => (
                      <a
                        key={subItem.title}
                        href={subItem.href}
                        className="block px-4 py-2 text-sm text-black hover:bg-white/20 transition-colors"
                      >
                        {subItem.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="w-[200px] lg:w-[200px] flex justify-end">
          <Button
            variant="ghost"
            onClick={() => setOpen(!isOpen)}
            className={`lg:hidden p-2 bg-transparent hover:bg-transparent focus:bg-transparent active:bg-transparent ${
              isOpen ? "bg-black/20" : ""
            } text-black`}
          >
            <svg
              style={{ width: "32px", height: "32px" }} // Ajusta el tamaño manualmente
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </Button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-t lg:hidden">
            <nav className="container mx-auto py-4">
              {navigationItems.map((item) => (
                <div key={item.title} className="px-4">
                  <a
                    href={item.href}
                    className="block py-3 text-black text-lg font-medium hover:text-[#7FFF00] transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    {item.title}
                  </a>
                  {item.items && (
                    <div className="pl-4 border-l border-gray-200 ml-2">
                      {item.items.map((subItem) => (
                        <a
                          key={subItem.title}
                          href={subItem.href}
                          className="block py-2 text-gray-600 hover:text-[#7FFF00] transition-colors"
                          onClick={() => setOpen(false)}
                        >
                          {subItem.title}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        )}
      </div>
    </motion.header>
  );
};
