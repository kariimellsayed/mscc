
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';
import { Truck, Package, Snowflake, Wheat, Clock, Building2 } from 'lucide-react';

const Warehouses = () => {
  const { language, isRTL } = useLanguage();
  const t = translations[language];

  const warehouses = [
    {
      icon: Truck,
      title: t.commercialWarehouses,
      description: language === 'ar' ? 'مساحات واسعة وسقوف عالية مع تجهيزات خاصة مثل الرافعات والجسور العلوية' : 'Wide spaces and high ceilings with special equipment like cranes and overhead bridges',
      features: [
        language === 'ar' ? 'مساحات واسعة وسقوف عالية' : 'Wide spaces and high ceilings',
        language === 'ar' ? 'تجهيزات خاصة للرافعات' : 'Special crane equipment',
        language === 'ar' ? 'جسور علوية متطورة' : 'Advanced overhead bridges'
      ],
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: Package,
      title: t.distributionWarehouses,
      description: language === 'ar' ? 'تنظيم متقدم وأنظمة رفوف حديثة لشركات التوزيع والتجارة بالجملة' : 'Advanced organization and modern shelf systems for distribution and wholesale companies',
      features: [
        language === 'ar' ? 'تنظيم متقدم ومنهجي' : 'Advanced and systematic organization',
        language === 'ar' ? 'أنظمة رفوف حديثة' : 'Modern shelf systems',
        language === 'ar' ? 'تحسين كفاءة التوزيع' : 'Distribution efficiency optimization'
      ],
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: Snowflake,
      title: t.coldStorageWarehouses,
      description: language === 'ar' ? 'مجهّزة بأنظمة تبريد عالية الكفاءة وتجميد للأغذية والأدوية' : 'Equipped with high-efficiency cooling and freezing systems for food and medicine',
      features: [
        language === 'ar' ? 'أنظمة تبريد عالية الكفاءة' : 'High-efficiency cooling systems',
        language === 'ar' ? 'تحكم دقيق في درجات الحرارة' : 'Precise temperature control',
        language === 'ar' ? 'مناسب للأغذية والأدوية' : 'Suitable for food and medicine'
      ],
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: Wheat,
      title: t.agriculturalWarehouses,
      description: language === 'ar' ? 'تهوية ممتازة وحماية من الرطوبة والآفات للمحاصيل والمنتجات الزراعية' : 'Excellent ventilation and protection from moisture and pests for crops and agricultural products',
      features: [
        language === 'ar' ? 'تهوية طبيعية ممتازة' : 'Excellent natural ventilation',
        language === 'ar' ? 'حماية من الرطوبة' : 'Moisture protection',
        language === 'ar' ? 'مقاومة للآفات' : 'Pest resistance'
      ],
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: Clock,
      title: t.temporaryWarehouses,
      description: language === 'ar' ? 'سرعة في التركيب والمرونة في التنقل والاستخدام للتخزين المؤقت' : 'Quick installation and flexibility in movement and use for temporary storage',
      features: [
        language === 'ar' ? 'سرعة التركيب والفك' : 'Quick installation and disassembly',
        language === 'ar' ? 'مرونة في التنقل' : 'Mobility flexibility',
        language === 'ar' ? 'حلول مؤقتة فعالة' : 'Effective temporary solutions'
      ],
      image: 'https://images.unsplash.com/photo-1566228015668-4c45dbc4e2f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: Building2,
      title: t.multiStoryWarehouses,
      description: language === 'ar' ? 'بناء رأسي لزيادة السعة التخزينية مع الحفاظ على مساحة الأرض' : 'Vertical construction to increase storage capacity while preserving land space',
      features: [
        language === 'ar' ? 'بناء رأسي متطور' : 'Advanced vertical construction',
        language === 'ar' ? 'زيادة السعة التخزينية' : 'Increased storage capacity',
        language === 'ar' ? 'توفير مساحة الأرض' : 'Land space conservation'
      ],
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <section id="warehouses" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
              {language === 'ar' ? 'أنواع المستودعات' : 'Warehouse Types'}
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {language === 'ar' 
              ? 'نتميز في تصميم وبناء مختلف أنواع المستودعات التي تلبي احتياجاتكم المتنوعة'
              : 'We excel in designing and building various types of warehouses that meet your diverse needs'
            }
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-700 mx-auto rounded-full mt-6"></div>
        </div>

        {/* Warehouses Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {warehouses.map((warehouse, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:-translate-y-2"
            >
              <div className="lg:flex">
                {/* Image */}
                <div className="lg:w-1/2">
                  <div className="relative h-64 lg:h-full overflow-hidden">
                    <img
                      src={warehouse.image}
                      alt={warehouse.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
                    
                    {/* Icon */}
                    <div className="absolute top-6 left-6 w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <warehouse.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:w-1/2 p-8 lg:p-10">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors duration-300">
                    {warehouse.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {warehouse.description}
                  </p>
                  
                  {/* Features */}
                  <div className="space-y-3">
                    {warehouse.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-red-600 rounded-full mr-3 ml-3"></div>
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-red-800/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center animate-fade-in delay-500">
          <div className="bg-gradient-to-r from-red-600 to-red-800 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              {language === 'ar' ? 'احتياجات مستودعات مخصصة؟' : 'Custom Warehouse Needs?'}
            </h3>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              {language === 'ar' 
                ? 'نقوم بتصميم وبناء مستودعات مخصصة تلبي احتياجاتكم الفريدة ومتطلبات مشروعكم'
                : 'We design and build custom warehouses that meet your unique needs and project requirements'
              }
            </p>
            <a 
              href="#contact"
              className="inline-block bg-white text-red-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              {language === 'ar' ? 'طلب استشارة مجانية' : 'Request Free Consultation'}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Warehouses;
