import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../data/translations";
import {
  Building,
  Wrench,
  Palette,
  Fuel,
  FileText,
  Hammer,
  Warehouse,
} from "lucide-react";

const Services = () => {
  const { language, isRTL } = useLanguage();
  const t = translations[language];

  const services = [
    {
      icon: Building,
      title: t.buildingRenovation,
      description:
        language === "ar"
          ? "تجديد وترميم المباني بأحدث التقنيات والمعايير"
          : "Building renovation with latest techniques and standards",
      image: "/images/serve1.jpg",
    },
    {
      icon: Wrench,
      title: t.maintenance,
      description:
        language === "ar"
          ? "خدمات الصيانة والأشغال المتخصصة بجودة عالية"
          : "Specialized maintenance and works services with high quality",
      image: "/images/serve2.jpg",
    },
    {
      icon: Hammer,
      title: t.contracting,
      description:
        language === "ar"
          ? "مقاولات عامة للمشاريع الحكومية والخاصة"
          : "General contracting for government and private projects",
      image: "/images/serve3.jpg",
    },
    {
      icon: Palette,
      title: t.decoration,
      description:
        language === "ar"
          ? "تصميم وتنفيذ الديكورات الداخلية والخارجية"
          : "Design and execution of interior and exterior decorations",
      image: "/images/serve4.jpg",
    },
    {
      icon: Fuel,
      title: t.fuelStationConstruction,
      description:
        language === "ar"
          ? "إنشاء وتطوير محطات الوقود بأحدث المواصفات"
          : "Construction and development of fuel stations with latest specifications",
      image: "/images/serve5.jpg",
    },
    {
      icon: FileText,
      title: t.governmentContracts,
      description:
        language === "ar"
          ? "عقود صيانة وتشغيل المباني الحكومية"
          : "Government building maintenance and operation contracts",
      image: "/images/serve6.jpg",
    },
    {
      icon: Warehouse,
      title: language === "ar" ? "المستودعات" : "Warehouses",
      description:
        language === "ar"
          ? "إنشاء وتطوير المستودعات بأحدث المواصفات"
          : "Construction and development of warehouses with latest specifications",
      image: "/images/serve7.jpg",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
              {t.servicesTitle}
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {language === "ar"
              ? "نقدم خدمات متكاملة في مجال المقاولات والإنشاءات بأعلى معايير الجودة والمهنية"
              : "We provide comprehensive services in contracting and construction with the highest standards of quality and professionalism"}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-700 mx-auto rounded-full mt-6"></div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                {/* Icon */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-red-800/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center animate-fade-in delay-500">
          <div className="bg-gradient-to-r from-red-600 to-red-800 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              {language === "ar" ? "هل تحتاج لخدماتنا؟" : "Need Our Services?"}
            </h3>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              {language === "ar"
                ? "تواصل معنا اليوم للحصول على استشارة مجانية وعرض أسعار مخصص لمشروعك"
                : "Contact us today for a free consultation and customized quote for your project"}
            </p>
            <a
              href="#contact"
              className="inline-block bg-white text-red-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              {language === "ar" ? "احصل على عرض أسعار" : "Get a Quote"}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
