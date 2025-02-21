"use client";

import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navigationItems = [
    { title: "Inicio", href: "#home" },
    {
      title: "Cultivos",
      href: "#",
      items: [
        { title: "Cultivo 1", href: "#cultivo1" },
        { title: "Cultivo 2", href: "#cultivo2" },
      ],
    },
    { title: "Sobre nosotros", href: "#about" },
    { title: "Contacto", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
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
      <div className="container mx-auto min-h-20 flex items-center justify-between px-4">
        <div className="flex items-center w-[140px]">
          <Image
            src="/logo.jpg"
            alt="Boiero Logo"
            width={140}
            height={46}
            className="h-auto w-[140px]"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center justify-center flex-1">
          <div className="flex items-center gap-12">
            {navigationItems.map((item) => (
              <div
                key={item.title}
                className="relative"
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
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white/10 backdrop-blur-md border border-white/20 rounded-md shadow-lg py-2">
                    {item.items.map((subItem) => (
                      <a
                        key={subItem.title}
                        href={subItem.href}
                        className="block px-4 py-2 text-sm text-white hover:bg-white/20 transition-colors"
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
        <div className="w-[140px] flex justify-end">
          <Button
            variant="ghost"
            onClick={() => setOpen(!isOpen)}
            className={`lg:hidden ${
              isScrolled ? "text-gray-800" : "text-white"
            }`}
          >
            <svg
              className="w-6 h-6"
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
        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-white/10 backdrop-blur-md border-t border-white/20 lg:hidden">
            <nav className="container mx-auto py-4">
              {navigationItems.map((item) => (
                <div key={item.title} className="px-4">
                  <a
                    href={item.href}
                    className="block py-2 text-white hover:text-[#7FFF00] transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    {item.title}
                  </a>
                  {item.items && (
                    <div className="pl-4">
                      {item.items.map((subItem) => (
                        <a
                          key={subItem.title}
                          href={subItem.href}
                          className="block py-2 text-white/80 hover:text-[#7FFF00] transition-colors"
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
