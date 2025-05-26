
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Phone, Clock, CheckCircle, AlertTriangle } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
  const { category, service } = useParams();

  // Пример данных для детальной страницы услуги
  const serviceData = {
    title: 'Замена тормозных дисков',
    description: 'Профессиональная замена тормозных дисков Mercedes-Benz W222 с использованием оригинальных запчастей',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    workPrice: 'от 8 500 ₽',
    partsPrice: 'от 25 000 ₽',
    duration: '2-3 часа',
    warranty: '1 год',
    problems: [
      'Вибрация при торможении',
      'Скрип или скрежет тормозов',
      'Увеличенный тормозной путь',
      'Биение руля при торможении'
    ],
    process: [
      'Диагностика тормозной системы',
      'Демонтаж колес и суппортов',
      'Замена тормозных дисков',
      'Установка новых колодок (при необходимости)',
      'Тестирование системы'
    ],
    parts: [
      'Передние тормозные диски - от 12 000 ₽',
      'Задние тормозные диски - от 10 000 ₽',
      'Тормозные колодки - от 3 000 ₽',
      'Тормозная жидкость - от 500 ₽'
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link to={`/services/${category}`} className="flex items-center space-x-2">
            <ArrowLeft className="h-5 w-5" />
            <span>Назад к категории</span>
          </Link>
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-gray-900">GARAGE</div>
            <div className="text-2xl font-bold text-gray-600">PLUS</div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-800">Ремонт ходовой части</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{serviceData.title}</h1>
              <p className="text-xl text-gray-600 mb-8">{serviceData.description}</p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <Card className="p-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{serviceData.workPrice}</div>
                    <div className="text-sm text-gray-600">Работа</div>
                  </div>
                </Card>
                <Card className="p-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{serviceData.partsPrice}</div>
                    <div className="text-sm text-gray-600">Запчасти</div>
                  </div>
                </Card>
              </div>

              <Button 
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-2xl"
              >
                <Phone className="mr-2 h-5 w-5" />
                Записаться на сервис
              </Button>
            </div>

            <div className="relative">
              <img 
                src={serviceData.image}
                alt={serviceData.title}
                className="w-full rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl">
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-blue-600" />
                  <div>
                    <div className="font-semibold">{serviceData.duration}</div>
                    <div className="text-sm text-gray-600">Время работы</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Problems */}
            <Card className="p-6">
              <CardHeader className="p-0 mb-6">
                <div className="flex items-center space-x-2">
                  <AlertTriangle className="h-6 w-6 text-red-600" />
                  <CardTitle className="text-xl">Основные проблемы</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <ul className="space-y-3">
                  {serviceData.problems.map((problem, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{problem}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Process */}
            <Card className="p-6">
              <CardHeader className="p-0 mb-6">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <CardTitle className="text-xl">Процесс работы</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <ul className="space-y-3">
                  {serviceData.process.map((step, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">
                        {index + 1}
                      </div>
                      <span className="text-gray-700">{step}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Parts and Prices */}
            <Card className="p-6">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-xl">Стоимость запчастей</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <ul className="space-y-3">
                  {serviceData.parts.map((part, index) => (
                    <li key={index} className="flex justify-between items-start">
                      <span className="text-gray-700 flex-1">{part.split(' - ')[0]}</span>
                      <span className="font-semibold text-blue-600">{part.split(' - ')[1]}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 p-4 bg-blue-50 rounded-xl">
                  <div className="text-sm text-blue-800">
                    <strong>Гарантия:</strong> {serviceData.warranty} на работы и запчасти
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Готовы записаться?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Свяжитесь с нами для консультации и записи на сервис
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-2xl"
            >
              <Phone className="mr-2 h-5 w-5" />
              +7 (495) 123-45-67
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-blue-300 hover:border-blue-400 hover:bg-blue-50 px-8 py-4 text-lg rounded-2xl"
            >
              Онлайн запись
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
