
import React from 'react';
import { ServiceLayout } from '@/components/layout/ServiceLayout';
import { ServiceHero } from '@/components/sections/ServiceHero';
import { ContactSection } from '@/components/sections/ContactSection';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, CheckCircle } from 'lucide-react';

const OilChangeService = () => {
  const serviceData = {
    title: "Замена масла АКПП",
    subtitle: "Частичная и полная замена трансмиссионного масла",
    description: "Замена масла в автоматической коробке передач Mercedes-Benz W222 с использованием оригинальных жидкостей ATF",
    price: "от 12 000 ₽",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  };

  const problems = [
    "Рывки при переключении передач",
    "Задержки при включении режимов D или R",
    "Перегрев коробки передач",
    "Загрязнение масла продуктами износа",
    "Снижение эффективности работы гидроблока"
  ];

  const stages = [
    "Диагностика текущего состояния АКПП",
    "Проверка уровня и качества масла",
    "Слив отработанного масла",
    "Замена фильтра и поддона",
    "Заливка нового оригинального масла ATF",
    "Адаптация и тестирование"
  ];

  const pricing = {
    work: "3 500 ₽",
    parts: "от 8 500 ₽",
    total: "от 12 000 ₽"
  };

  return (
    <ServiceLayout>
      <ServiceHero {...serviceData} />
      
      {/* Problems Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">Признаки необходимости замены масла</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {problems.map((problem, index) => (
              <div key={index} className="flex items-start space-x-3 p-4 bg-gradient-to-r from-slate-50 to-gray-50 rounded-xl">
                <AlertTriangle className="h-6 w-6 text-amber-500 mt-1 flex-shrink-0" />
                <p className="text-slate-700">{problem}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Stages */}
      <section className="py-16 bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">Этапы работы</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stages.map((stage, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white/90 backdrop-blur-sm rounded-2xl">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-slate-600 to-gray-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    <CardTitle className="text-lg text-slate-800">{stage}</CardTitle>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">Стоимость услуг</h2>
          <Card className="max-w-md mx-auto border-0 shadow-lg rounded-2xl bg-white/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl text-center text-slate-800">Замена масла АКПП</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span className="text-slate-700">Работа:</span>
                <span className="font-semibold text-slate-800">{pricing.work}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-700">Масло и фильтр:</span>
                <span className="font-semibold text-slate-800">{pricing.parts}</span>
              </div>
              <div className="border-t pt-4">
                <div className="flex justify-between text-lg font-bold">
                  <span className="text-slate-700">Итого:</span>
                  <span className="text-slate-800">{pricing.total}</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
                <div className="flex items-center space-x-2 text-green-700">
                  <CheckCircle className="h-5 w-5" />
                  <span className="font-medium">Гарантия: 1 год</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <ContactSection />
    </ServiceLayout>
  );
};

export default OilChangeService;
