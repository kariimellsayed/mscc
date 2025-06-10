
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Users, Briefcase, Wrench, Hammer, Paintbrush, Car, Calculator, FileText } from 'lucide-react';

const TechnicalTeam = () => {
  const { language, isRTL } = useLanguage();

  const teamData = [
    {
      icon: Briefcase,
      title: language === 'ar' ? 'مهندسين مدنيين' : 'Civil Engineers',
      count: 8,
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Briefcase,
      title: language === 'ar' ? 'مهندسين معماريين' : 'Architectural Engineers',
      count: 6,
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Briefcase,
      title: language === 'ar' ? 'مهندسين كهرباء' : 'Electrical Engineers',
      count: 3,
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      icon: Briefcase,
      title: language === 'ar' ? 'مهندسين ميكانيكا' : 'Mechanical Engineers',
      count: 3,
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Calculator,
      title: language === 'ar' ? 'محاسبين' : 'Accountants',
      count: 4,
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: FileText,
      title: language === 'ar' ? 'سكرتير' : 'Secretaries',
      count: 2,
      color: 'from-pink-500 to-pink-600'
    },
    {
      icon: Car,
      title: language === 'ar' ? 'سائق' : 'Drivers',
      count: 50,
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Hammer,
      title: language === 'ar' ? 'نجار + حداد' : 'Carpenters + Blacksmiths',
      count: 47,
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Wrench,
      title: language === 'ar' ? 'مليس + بناء' : 'Plasterers + Builders',
      count: 64,
      color: 'from-teal-500 to-teal-600'
    },
    {
      icon: Wrench,
      title: language === 'ar' ? 'مبلط' : 'Tilers',
      count: 35,
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      icon: Paintbrush,
      title: language === 'ar' ? 'دهان' : 'Painters',
      count: 47,
      color: 'from-lime-500 to-lime-600'
    },
    {
      icon: Wrench,
      title: language === 'ar' ? 'فنين جبس وتحت مغربي' : 'Gypsum & Moroccan Technicians',
      count: 18,
      color: 'from-amber-500 to-amber-600'
    },
    {
      icon: Users,
      title: language === 'ar' ? 'عمال' : 'Workers',
      count: 100,
      color: 'from-gray-500 to-gray-600'
    },
    {
      icon: Users,
      title: language === 'ar' ? 'مراقبين' : 'Supervisors',
      count: 16,
      color: 'from-red-600 to-red-700'
    }
  ];

  return (
    <section id="technical-team" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
              {language === 'ar' ? 'الكوادر الفنية' : 'Technical Team'}
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {language === 'ar' 
              ? 'فريق عمل محترف ومتخصص يضمن تنفيذ المشاريع بأعلى معايير الجودة والمهنية'
              : 'Professional and specialized team ensuring project execution with the highest standards of quality and professionalism'
            }
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-700 mx-auto rounded-full mt-6"></div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {teamData.map((team, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${team.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              {/* Content */}
              <div className="relative p-6 text-center">
                {/* Icon */}
                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${team.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <team.icon className="w-8 h-8 text-white" />
                </div>
                
                {/* Count */}
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {team.count}
                </div>
                
                {/* Title */}
                <h3 className="text-sm md:text-base font-semibold text-gray-700 leading-tight">
                  {team.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Total Team Section */}
        <div className="mt-16 animate-fade-in delay-700">
          <div className="bg-gradient-to-r from-red-600 to-red-800 rounded-3xl p-8 md:p-12 text-white shadow-2xl text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              {language === 'ar' ? 'إجمالي الفريق' : 'Total Team'}
            </h3>
            <div className="text-6xl md:text-7xl font-black mb-4">
              {teamData.reduce((total, team) => total + team.count, 0)}+
            </div>
            <p className="text-xl text-red-100 max-w-2xl mx-auto">
              {language === 'ar' 
                ? 'خبير ومتخصص يعملون بتفاني لضمان نجاح مشاريعكم'
                : 'Experts and specialists working with dedication to ensure the success of your projects'
              }
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalTeam;
