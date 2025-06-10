
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';
import { Target, Shield, Users, Award, Heart, Handshake } from 'lucide-react';

const ValuesAndEthics = () => {
  const { language, isRTL } = useLanguage();
  const t = translations[language];

  const values = [
    {
      icon: Target,
      title: language === 'ar' ? 'الدقة والمهنية' : 'Precision & Professionalism',
      description: language === 'ar' ? 'تنفيذ المشاريع بدقة ومهنية عالية' : 'Executing projects with high precision and professionalism'
    },
    {
      icon: Shield,
      title: language === 'ar' ? 'السلامة والجودة' : 'Safety & Quality',
      description: language === 'ar' ? 'الالتزام الكامل بمعايير السلامة والجودة' : 'Complete commitment to safety and quality standards'
    },
    {
      icon: Users,
      title: language === 'ar' ? 'الشفافية' : 'Transparency',
      description: language === 'ar' ? 'التواصل المستمر والشفاف مع العميل' : 'Continuous and transparent communication with clients'
    },
    {
      icon: Award,
      title: language === 'ar' ? 'التميز' : 'Excellence',
      description: language === 'ar' ? 'تطبيق أفضل الممارسات والمعايير العالمية' : 'Applying best practices and international standards'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        {/* Values Section */}
        <div className="mb-20 animate-fade-in">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
                {language === 'ar' ? 'قيمنا الأساسية' : 'Our Core Values'}
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-700 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-red-800 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Social Responsibility & Ethics */}
        <div className="grid lg:grid-cols-2 gap-12 animate-fade-in delay-500">
          {/* Social Responsibility */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-10 border border-gray-100 hover:shadow-3xl transition-all duration-500">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center mr-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  {t.socialResponsibilityTitle}
                </span>
              </h3>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              {language === 'ar' 
                ? 'نؤمن بأننا جزء لا يتجزأ من نسيج المجتمع، ولذلك نتحمّل مسؤوليتنا الاجتماعية بكل فخر ونعمل على الإسهام الفعّال فيه.'
                : 'We believe we are an integral part of the fabric of society, and therefore we proudly bear our social responsibility and work to contribute effectively to it.'
              }
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              {language === 'ar'
                ? 'نفخر بأن يكون لنا دور ملموس يترك أثرًا إيجابيًا يمتد إلى جميع شرائح المجتمع، من خلال المشاركة في بنائه وتطويره.'
                : 'We are proud to have a tangible role that leaves a positive impact extending to all segments of society, through participation in its construction and development.'
              }
            </p>
          </div>

          {/* Ethical Commitment */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-10 border border-gray-100 hover:shadow-3xl transition-all duration-500">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-green-800 rounded-2xl flex items-center justify-center mr-4">
                <Handshake className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
                  {t.ethicalCommitmentTitle}
                </span>
              </h3>
            </div>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                {language === 'ar'
                  ? 'تلتزم شركة الحل الحديث للمقاولات بتطبيق أعلى معايير السلوك الأخلاقي في جميع تعاملاتها.'
                  : 'Modern Solution Contracting Company is committed to applying the highest standards of ethical conduct in all its dealings.'
                }
              </p>
              <p>
                {language === 'ar'
                  ? 'نحرص على أن يعمل جميع موظفينا، وشركائنا، وموردينا وفقًا لقيمنا الأخلاقية الراسخة.'
                  : 'We ensure that all our employees, partners, and suppliers work according to our established ethical values.'
                }
              </p>
              <p>
                {language === 'ar'
                  ? 'لا نقبل بأي شكل من أشكال الرشوة، أو الفساد، أو السلوكيات غير الأخلاقية.'
                  : 'We do not accept any form of bribery, corruption, or unethical behavior.'
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesAndEthics;
