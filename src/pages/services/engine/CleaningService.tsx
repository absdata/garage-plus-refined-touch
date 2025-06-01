
import React from 'react';
import { ServiceLayout } from '@/components/layout/ServiceLayout';
import { ServiceHero } from '@/components/sections/ServiceHero';
import { ContactSection } from '@/components/sections/ContactSection';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, AlertTriangle, Wrench, Clock } from 'lucide-react';

const CleaningService = () => {
  const serviceData = {
    title: "Очистка двигателя",
    description: "Профессиональная очистка двигателя от нагара и отложений Mercedes-Benz W222",
    price: "от 8 000 ₽",
    duration: "3-4 часа",
    image: "/mercedes_w222.jpg"
  };

  const problems = [
    "Нагар на клапанах и поршнях",
    "Снижение мощности двигателя",
    "Повышенный расход топлива",
    "Неровная работа на холостом ходу"
  ];

  const stages = [
    "Диагностика состояния двигателя",
    "Подготовка специального оборудования",
    "Очистка камеры сгорания",
    "Промывка системы смазки",
    "Проверка результатов очистки",
    "Тест-драйв и контрольная диагностика"
  ];

  const pricing = {
    work: "5 000 ₽",
    parts: "от 3 000 ₽",
    total: "от 8 000 ₽"
  };

  return (
    <ServiceLayout>
      <ServiceHero {...serviceData} />
      
      {/* Main Problems Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Основные проблемы загрязнения</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {problems.map((problem, index) => (
              <div key={index} className="flex items-start space-x-3">
                <AlertTriangle className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                <p className="text-gray-700">{problem}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Stages Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Этапы работы</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stages.map((stage, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    <CardTitle className="text-lg">{stage}</CardTitle>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Media Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Фото и видео работ</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Видео процесса очистки</p>
            </div>
            <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Фото до и после очистки</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Стоимость услуг</h2>
          <Card className="max-w-md mx-auto border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl text-center">Очистка двигателя</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span>Работа:</span>
                <span className="font-semibold">{pricing.work}</span>
              </div>
              <div className="flex justify-between">
                <span>Материалы:</span>
                <span className="font-semibold">{pricing.parts}</span>
              </div>
              <div className="border-t pt-4">
                <div className="flex justify-between text-lg font-bold">
                  <span>Итого:</span>
                  <span>{pricing.total}</span>
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

export default CleaningService;
