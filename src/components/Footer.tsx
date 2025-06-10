import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../data/translations";

const Footer = () => {
  const { language, isRTL } = useLanguage();
  const t = translations[language];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div>
              <img
                src="/images/logo.png"
                alt="MSCC Logo"
                className="h-24 w-auto mb-4 filter brightness-0 invert"
              />
              <p className="text-gray-400 leading-relaxed">
                {language === "ar"
                  ? "شركة الحل الحديث للمقاولات - نبني المستقبل بجودة وثقة"
                  : "Modern Solution Contracting Company - Building the future with quality and trust"}
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">
                {language === "ar" ? "روابط سريعة" : "Quick Links"}
              </h3>
              <div className="space-y-2">
                <a
                  href="#about"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  {t.about}
                </a>
                <a
                  href="#services"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  {t.services}
                </a>
                <a
                  href="#projects"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  {t.projects}
                </a>
                <a
                  href="#contact"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  {t.contact}
                </a>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">
                {language === "ar" ? "معلومات التواصل" : "Contact Info"}
              </h3>
              <div className="space-y-2 text-gray-400">
                <p>{t.addressText}</p>
                <p>+966 534 155 887</p>
                <p>info@msolution.com</p>
                {/* <p>www.msolution.com</p> */}
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2025{" "}
              {language === "ar"
                ? "شركة الحل الحديث للمقاولات"
                : "Modern Solution Contracting Company"}
              .
              {language === "ar"
                ? " جميع الحقوق محفوظة."
                : " All rights reserved."}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
