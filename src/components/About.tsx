import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../data/translations";
import { CheckCircle, Building } from "lucide-react";

const About = () => {
  const { language, isRTL } = useLanguage();
  const t = translations[language];

  const stats = [
    {
      number: "15+",
      label: language === "ar" ? "سنة خبرة" : "Years Experience",
    },
    {
      number: "200+",
      label: language === "ar" ? "مشروع منجز" : "Completed Projects",
    },
    {
      number: "98%",
      label: language === "ar" ? "رضا العملاء" : "Client Satisfaction",
    },
    {
      number: "300+",
      label: language === "ar" ? "فريق محترف" : "Professional Team",
    },
  ];

  const images = [
    {
      src: "/images/about1.jpg",
      title: language === "ar" ? "مشاريع حديثة" : "Modern Projects",
    },
    {
      src: "/images/about2.jpg",
      title: language === "ar" ? "عمل متقن" : "Quality Work",
    },
    {
      src: "/images/about3.jpg",
      title: language === "ar" ? "فريق محترف" : "Professional Team",
    },
    {
      src: "/images/about4.jpg",
      title: language === "ar" ? "مشاريع حكومية" : "Government Projects",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
              {t.aboutTitle}
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-700 mx-auto rounded-full"></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Text Content */}
          <div className="animate-fade-in delay-300">
            <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 border border-gray-100 hover:shadow-3xl transition-all duration-500">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Building
                  className={`w-8 h-8 text-red-600 ${isRTL ? "ml-4" : "mr-4"}`}
                />
                {language === "ar"
                  ? "عن الحل الحديث للمقاولات"
                  : "About Modern Solution Contracting"}
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                {t.aboutText}
              </p>

              {/* Key Points */}
              <div className="space-y-4">
                {[
                  language === "ar"
                    ? "إشراف ومتابعة دائمة لمواقع المشاريع"
                    : "Continuous supervision and monitoring of project sites",
                  language === "ar"
                    ? "التواصل المستمر والشفاف مع العميل"
                    : "Continuous and transparent communication with clients",
                  language === "ar"
                    ? "متابعة رضا العميل من خلال مؤشرات أداء دقيقة"
                    : "Monitoring client satisfaction through precise performance indicators",
                  language === "ar"
                    ? "الالتزام بإجراءات السلامة"
                    : "Commitment to safety procedures",
                ].map((point, index) => (
                  <div key={index} className="flex items-start group">
                    <CheckCircle
                      className={`w-6 h-6 text-red-600 ${
                        isRTL ? "ml-3" : "mr-3"
                      } mt-1 group-hover:scale-110 transition-transform duration-300`}
                    />
                    <span className="text-gray-700 font-medium">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Images Grid */}
          <div className="animate-fade-in delay-500">
            <div className="grid grid-cols-2 gap-4">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full object-cover group-hover:scale-110 transition-transform duration-700 h-48 "
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <p className="text-sm font-semibold">{image.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mb-20 animate-fade-in delay-700">
          <div className="bg-gradient-to-r from-red-600 to-red-800 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-red-100 font-semibold text-sm md:text-base">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
