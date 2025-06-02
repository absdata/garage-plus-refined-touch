import React from 'react';
import { ServiceLayout } from '@/components/layout/ServiceLayout';
import { ServiceHero } from '@/components/sections/ServiceHero';
import { ServiceDescription } from '@/components/sections/ServiceDescription';
import { ContactSection } from '@/components/sections/ContactSection';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, AlertTriangle, Wrench, Clock } from 'lucide-react';

const BrakeService = () => {
  const serviceData = {
    title: "Обслуживание тормозной системы",
    subtitle: "Безопасность торможения Mercedes-Benz W222",
    description: "Диагностика, ремонт и замена компонентов тормозной системы Mercedes-Benz W222",
    price: "от 12 000 ₽",
    duration: "3-4 часа",
    image: "/mercedes_w222.jpg"
  };

  const detailedDescription = "Тормозная система Mercedes-Benz W222 – это сложный комплекс компонентов, обеспечивающих безопасность водителя и пассажиров. Качественное обслуживание тормозной системы критически важно для предотвращения аварийных ситуаций на дороге. Наш сервисный центр проводит комплексную диагностику всех элементов тормозной системы с использованием современного оборудования. Мы проверяем толщину тормозных колодок и дисков, состояние тормозной жидкости и герметичность всей системы. Своевременная замена изношенных компонентов предотвращает повреждение дорогостоящих элементов, таких как тормозные диски или суппорта. Правильная прокачка тормозной системы обеспечивает эффективность торможения и исключает появление воздушных пробок. Диагностика систем ABS и ESP гарантирует стабильность автомобиля в критических ситуациях. Использование оригинальных запчастей Mercedes-Benz обеспечивает максимальную совместимость и долговечность. Наши специалисты имеют многолетний опыт работы с тормозными системами Mercedes-Benz и знают все особенности модели W222. Регулярное обслуживание тормозной системы – это инвестиция в вашу безопасность и безопасность окружающих.";

  const problems = [
    "Износ тормозных колодок и дисков",
    "Утечка тормозной жидкости",
    "Снижение эффективности торможения",
    "Вибрации при торможении"
  ];

  const stages = [
    "Диагностика тормозной системы",
    "Проверка толщины колодок и дисков",
    "Замена изношенных компонентов",
    "Прокачка тормозной системы",
    "Проверка работы ABS и ESP",
    "Тест-драйв и настройка"
  ];

  const pricing = {
    work: "6 000 ₽",
    parts: "от 6 000 ₽",
    total: "от 12 000 ₽"
  };

  return (
    <ServiceLayout>
      <ServiceHero {...serviceData} />
      <ServiceDescription description={detailedDescription} />
      
      {/* Main Problems Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Основные проблемы тормозной системы</h2>
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
              <p className="text-gray-500">Видео замены тормозных колодок</p>
            </div>
            <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Фото тормозных дисков</p>
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
              <CardTitle className="text-xl text-center">Обслуживание тормозов</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span>Работа:</span>
                <span className="font-semibold">{pricing.work}</span>
              </div>
              <div className="flex justify-between">
                <span>Запчасти:</span>
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

export default BrakeService;
