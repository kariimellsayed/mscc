import React, { useState, useEffect } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../data/translations";
import LanguageSwitch from "./LanguageSwitch";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const { language, isRTL } = useLanguage();
  const t = translations[language];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { key: "home", href: "#hero" },
    { key: "about", href: "#about" },
    { key: "services", href: "#services" },
    { key: "projects", href: "#projects" },
    { key: "contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-gray-200/50 shadow-xl"
          : "bg-white/90 backdrop-blur-sm border-b border-gray-100/30"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center group">
            <div className="relative overflow-hidden rounded-lg p-2">
              <img
                src="/images/logo.png"
                alt="MSCC Logo"
                className="h-16 w-auto transition-all duration-500 group-hover:scale-110 filter drop-shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center">
            {navItems.map((item, index) => (
              <a
                key={item.key}
                href={item.href}
                className={`relative px-5 py-2 text-gray-700 hover:text-red-600 transition-all duration-300 font-medium text-lg group ${
                  isRTL ? "ml-2" : "mr-2"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="relative z-10">
                  {t[item.key as keyof typeof t]}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-50 to-red-100 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></div>
                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-red-500 to-red-700 group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
              </a>
            ))}
          </nav>

          {/* Language Switch & Mobile Menu */}
          <div className="flex items-center gap-4">
            <LanguageSwitch />

            <Button
              variant="ghost"
              size="lg"
              className="lg:hidden p-2 hover:bg-red-50 transition-all duration-300 rounded-lg"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="relative w-6 h-6">
                <Menu
                  size={24}
                  className={`absolute transition-all duration-300 ${
                    isMenuOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
                  }`}
                />
                <X
                  size={24}
                  className={`absolute transition-all duration-300 ${
                    isMenuOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
                  }`}
                />
              </div>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="py-6 border-t border-gray-200/50 bg-white/95 backdrop-blur-md rounded-b-xl">
            {navItems.map((item, index) => (
              <a
                key={item.key}
                href={item.href}
                className="block py-4 px-6 text-gray-700 hover:text-red-600 hover:bg-red-50 transition-all duration-300 font-semibold text-lg border-l-4 border-transparent hover:border-red-500"
                onClick={() => setIsMenuOpen(false)}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {t[item.key as keyof typeof t]}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
