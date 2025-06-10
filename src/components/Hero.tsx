import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../data/translations";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

const Hero = () => {
  const { language, isRTL } = useLanguage();
  const t = translations[language];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Professional Construction Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/video/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay لتحسين وضوح النصوص فوق الفيديو */}
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-black/20 to-black/10"></div>

        {/* Arabic Touch - Geometric Pattern Overlay */}
        {/* <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Cpath d='M30 30l15-15v30l-15-15zm-15 0l15-15v30l-15-15z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: "60px 60px",
            }}
          ></div>
        </div> */}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Enhanced MSCC Logo with Arabic Touch */}
          <div className="mb-12 animate-fade-in">
            <div className="flex items-center justify-center mb-6">
              <div className="relative">
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-wider animate-scale-in">
                  <span className="text-red-500 drop-shadow-2xl hover:text-red-400 transition-colors duration-500">
                    M
                  </span>
                  <span className="text-white drop-shadow-2xl hover:text-gray-100 transition-colors duration-500">
                    S
                  </span>
                  <span className="text-red-500 drop-shadow-2xl hover:text-red-400 transition-colors duration-500">
                    C
                  </span>
                  <span className="text-white drop-shadow-2xl hover:text-gray-100 transition-colors duration-500">
                    C
                  </span>
                </h1>
                {/* Arabic geometric decoration */}
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <div className="w-24 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent animate-slide-in-right"></div>
                  <div className="w-3 h-3 bg-red-500 rounded-full mx-4 animate-pulse"></div>
                  <div className="w-24 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent animate-slide-in-right"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Title with Better Typography */}
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight animate-fade-in delay-300 text-shadow-xl">
            <span className="bg-gradient-to-r from-white via-gray-100 to-red-100 bg-clip-text text-transparent">
              {language === "ar"
                ? "شركة الحل الحديث للمقاولات"
                : "Modern Solution Contracting Company"}
            </span>
          </h2>

          {/* Enhanced Subtitle with Better Size */}
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-100 mb-12 leading-relaxed max-w-4xl mx-auto animate-fade-in delay-500 text-shadow-lg font-light">
            {t.heroSubtitle}
          </p>

          {/* Active CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in delay-700 ${
              isRTL ? "sm:flex-row-reverse" : ""
            }`}
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="group bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-12 py-6 text-xl font-bold transition-all duration-500 transform hover:scale-110 shadow-2xl hover:shadow-red-500/50 border-0 rounded-2xl"
            >
              <Phone
                className={`w-6 h-6 ${
                  isRTL ? "ml-3" : "mr-3"
                } group-hover:animate-bounce`}
              />
              {t.heroButton}
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="group border-3 border-white/90 text-white hover:bg-white hover:text-gray-900 px-12 py-6 text-xl font-bold transition-all duration-500 transform hover:scale-110 shadow-2xl backdrop-blur-md bg-white/20 rounded-2xl"
            >
              {t.projectsTitle}
              <ArrowRight
                className={`w-6 h-6 ${
                  isRTL ? "mr-3" : "ml-3"
                } group-hover:translate-x-2 transition-transform duration-300`}
              />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
