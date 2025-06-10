import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../data/translations";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, MapPin, Mail, Globe } from "lucide-react";

const Contact = () => {
  const { language, isRTL } = useLanguage();
  const t = translations[language];

  const whatsappNumber = "+966 534 155 887";
  const whatsappMessage =
    language === "ar"
      ? "مرحباً، أرغب في الاستفسار عن خدماتكم"
      : "Hello, I would like to inquire about your services";

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/${whatsappNumber.replace(
      /[^0-9]/g,
      ""
    )}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: t.address,
      value: t.addressText,
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Phone,
      label: t.phone,
      value: "+966 534 155 887",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Mail,
      label: t.email,
      value: "info@msolution.com",
      color: "from-red-500 to-red-600",
    },
    // {
    //   icon: Globe,
    //   label: t.website,
    //   value: "www.msolution.com",
    //   color: "from-purple-500 to-purple-600",
    // },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
                {t.contactTitle}
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {language === "ar"
                ? "تواصل معنا الآن للحصول على استشارة مجانية وعرض أسعار مخصص لمشروعك"
                : "Contact us now for a free consultation and customized quote for your project"}
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-700 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid lg:grid-cols-2 items-center gap-16">
            {/* Contact Information */}
            <div className="animate-fade-in delay-300">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                {language === "ar" ? "معلومات التواصل" : "Contact Information"}
              </h3>

              <div className="space-y-6 mb-10">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${info.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1 text-lg">
                        {info.label}
                      </h4>
                      <p className="text-gray-600 text-lg">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              {/* <div className="h-64 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center shadow-xl border border-gray-200">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500 font-semibold text-lg">
                    {language === 'ar' ? 'خريطة الموقع - الرياض' : 'Location Map - Riyadh'}
                  </p>
                </div>
              </div> */}
            </div>

            {/* WhatsApp Contact */}
            <div className="animate-fade-in delay-500">
              <div className="bg-gradient-to-br from-green-50 to-white rounded-3xl shadow-2xl p-8 md:p-12 border border-green-100 hover:shadow-3xl transition-all duration-500">
                <div className="text-center">
                  {/* WhatsApp Icon */}
                  <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                    <MessageCircle className="w-12 h-12 text-white" />
                  </div>

                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    {language === "ar" ? "تواصل معنا الآن" : "Contact Us Now"}
                  </h3>

                  <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                    {language === "ar"
                      ? "تواصل معنا مباشرة عبر واتساب للحصول على رد سريع واستشارة فورية"
                      : "Contact us directly via WhatsApp for quick response and instant consultation"}
                  </p>

                  {/* Phone Number Display */}
                  <div className="bg-white rounded-2xl p-6 mb-8 shadow-xl border border-gray-100">
                    <div className="flex items-center justify-center gap-3">
                      <Phone className="w-6 h-6 text-green-600" />
                      <span
                        className="text-2xl font-bold text-gray-900"
                        dir="ltr"
                      >
                        {whatsappNumber}
                      </span>
                    </div>
                  </div>

                  {/* WhatsApp Button */}
                  <Button
                    onClick={handleWhatsAppClick}
                    className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-6 text-xl font-bold rounded-2xl transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-green-500/50"
                    size="lg"
                  >
                    <MessageCircle
                      className={`w-6 h-6 ${isRTL ? "ml-3" : "mr-3"}`}
                    />
                    {language === "ar" ? "محادثة واتساب" : "WhatsApp Chat"}
                  </Button>

                  <p className="text-sm text-gray-500 mt-4">
                    {language === "ar"
                      ? "متوفرون 24/7 للرد على استفساراتكم"
                      : "Available 24/7 to answer your inquiries"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
