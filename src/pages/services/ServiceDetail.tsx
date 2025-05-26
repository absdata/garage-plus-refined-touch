
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Play, Phone, Calendar, Star, CheckCircle, AlertCircle, Wrench, DollarSign } from 'lucide-react';

const ServiceDetail = () => {
  const { category, service } = useParams();
  const [activeTab, setActiveTab] = useState('description');

  // Mock data - in real app this would come from a database
  const serviceData = {
    'transmission': {
      'oil-change': {
        title: 'Замена масла АКПП',
        shortDescription: 'Частичная и полная замена трансмиссионного масла',
        fullDescription: 'Замена масла в автоматической коробке передач Mercedes-Benz W222 - критически важная процедура для поддержания надежности и долговечности трансмиссии. Мы выполняем как частичную, так и полную замену масла с использованием оригинальных жидкостей ATF.',
        images: [
          'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1486496572940-2bb2341fdbdf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        ],
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        problems: [
          'Рывки при переключении передач',
          'Задержки при включении режимов D или R',
          'Перегрев коробки передач',
          'Загрязнение масла продуктами износа',
          'Снижение эффективности работы гидроблока'
        ],
        process: [
          'Диагностика текущего состояния АКПП',
          'Проверка уровня и качества масла',
          'Слив отработанного масла',
          'Замена фильтра и поддона',
          'Заливка нового оригинального масла ATF',
          'Адаптация и тестирование'
        ],
        pricing: {
          labor: 'от 3 500 ₽',
          parts: 'от 8 500 ₽',
          total: 'от 12 000 ₽'
        },
        duration: '2-3 часа',
        warranty: '1 год'
      }
    }
  };

  const currentService = serviceData[category]?.[service];

  if (!currentService) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-orange-800 mb-4">Услуга не найдена</h1>
          <Link to="/">
            <Button className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white">
              Вернуться на главную
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-orange-100/95 via-amber-100/95 to-yellow-100/95 backdrop-blur-sm border-b border-orange-200 py-4 shadow-lg">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link to={`/services/${category}`} className="flex items-center space-x-2 text-orange-700 hover:text-orange-900 transition-colors">
            <ArrowLeft className="h-5 w-5" />
            <span>Назад к услугам</span>
          </Link>
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">GARAGE</div>
            <div className="text-2xl font-bold text-orange-400">PLUS</div>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-br from-orange-100 via-amber-100 to-yellow-100">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white px-4 py-2 rounded-full">
                Обслуживание АКПП
              </Badge>
              <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-800 to-amber-800 bg-clip-text text-transparent">
                {currentService.title}
              </h1>
              <p className="text-xl text-orange-700 mb-6">
                {currentService.shortDescription}
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center space-x-2 text-orange-600">
                  <Calendar className="h-5 w-5" />
                  <span>Время: {currentService.duration}</span>
                </div>
                <div className="flex items-center space-x-2 text-orange-600">
                  <Star className="h-5 w-5 text-yellow-500 fill-current" />
                  <span>Гарантия: {currentService.warranty}</span>
                </div>
              </div>
              <Button 
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-8 py-4 rounded-2xl shadow-lg shadow-orange-300/50 hover:shadow-xl hover:shadow-orange-400/60 transition-all duration-300"
              >
                <Phone className="mr-2 h-5 w-5" />
                Записаться на сервис
              </Button>
            </div>
            
            <div className="relative">
              <img 
                src={currentService.images[0]}
                alt={currentService.title}
                className="w-full h-80 object-cover rounded-2xl shadow-2xl shadow-orange-200/50"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-900/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-5 mb-8 bg-white/80 backdrop-blur-sm rounded-2xl p-2 shadow-lg">
              <TabsTrigger 
                value="description" 
                className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-amber-500 data-[state=active]:text-white transition-all duration-300"
              >
                Описание
              </TabsTrigger>
              <TabsTrigger 
                value="problems"
                className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-amber-500 data-[state=active]:text-white transition-all duration-300"
              >
                Проблемы
              </TabsTrigger>
              <TabsTrigger 
                value="process"
                className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-amber-500 data-[state=active]:text-white transition-all duration-300"
              >
                Процесс
              </TabsTrigger>
              <TabsTrigger 
                value="media"
                className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-amber-500 data-[state=active]:text-white transition-all duration-300"
              >
                Фото/Видео
              </TabsTrigger>
              <TabsTrigger 
                value="pricing"
                className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-amber-500 data-[state=active]:text-white transition-all duration-300"
              >
                Цены
              </TabsTrigger>
            </TabsList>

            <TabsContent value="description" className="space-y-6">
              <Card className="bg-white/90 backdrop-blur-sm shadow-lg shadow-orange-200/30 border-0 rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-orange-800">Подробное описание</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-orange-700 leading-relaxed text-lg">
                    {currentService.fullDescription}
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="problems" className="space-y-6">
              <Card className="bg-white/90 backdrop-blur-sm shadow-lg shadow-orange-200/30 border-0 rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-orange-800 flex items-center">
                    <AlertCircle className="mr-2 h-6 w-6 text-amber-500" />
                    Основные проблемы
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    {currentService.problems.map((problem, index) => (
                      <div key={index} className="flex items-start space-x-3 p-4 bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl">
                        <AlertCircle className="h-5 w-5 text-amber-500 mt-0.5" />
                        <span className="text-orange-700">{problem}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="process" className="space-y-6">
              <Card className="bg-white/90 backdrop-blur-sm shadow-lg shadow-orange-200/30 border-0 rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-orange-800 flex items-center">
                    <Wrench className="mr-2 h-6 w-6 text-orange-500" />
                    Этапы работы
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {currentService.process.map((step, index) => (
                      <div key={index} className="flex items-start space-x-4 p-4 bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl">
                        <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                          {index + 1}
                        </div>
                        <span className="text-orange-700 font-medium">{step}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="media" className="space-y-6">
              <div className="grid gap-6">
                <Card className="bg-white/90 backdrop-blur-sm shadow-lg shadow-orange-200/30 border-0 rounded-2xl">
                  <CardHeader>
                    <CardTitle className="text-2xl text-orange-800">Видео процесса</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                      <iframe 
                        src={currentService.videoUrl}
                        className="w-full h-full"
                        allowFullScreen
                        title="Видео процесса работы"
                      />
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/90 backdrop-blur-sm shadow-lg shadow-orange-200/30 border-0 rounded-2xl">
                  <CardHeader>
                    <CardTitle className="text-2xl text-orange-800">Фотографии работ</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {currentService.images.map((image, index) => (
                        <div key={index} className="aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                          <img 
                            src={image}
                            alt={`Фото работы ${index + 1}`}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="pricing" className="space-y-6">
              <Card className="bg-white/90 backdrop-blur-sm shadow-lg shadow-orange-200/30 border-0 rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-orange-800 flex items-center">
                    <DollarSign className="mr-2 h-6 w-6 text-green-500" />
                    Стоимость услуг
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="p-6 bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl text-center">
                      <h3 className="font-semibold text-orange-800 mb-2">Работа</h3>
                      <p className="text-2xl font-bold text-orange-600">{currentService.pricing.labor}</p>
                    </div>
                    <div className="p-6 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl text-center">
                      <h3 className="font-semibold text-amber-800 mb-2">Запчасти</h3>
                      <p className="text-2xl font-bold text-amber-600">{currentService.pricing.parts}</p>
                    </div>
                    <div className="p-6 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl text-center border-2 border-orange-300">
                      <h3 className="font-semibold text-orange-800 mb-2">Итого</h3>
                      <p className="text-2xl font-bold text-orange-700">{currentService.pricing.total}</p>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
                    <div className="flex items-center space-x-2 text-green-700">
                      <CheckCircle className="h-5 w-5" />
                      <span className="font-medium">Гарантия на выполненные работы: {currentService.warranty}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-100 via-amber-100 to-yellow-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-orange-800 to-amber-800 bg-clip-text text-transparent">
            Готовы записаться на обслуживание?
          </h2>
          <p className="text-xl text-orange-700 mb-8">
            Свяжитесь с нами для консультации и записи
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-8 py-4 rounded-2xl shadow-lg shadow-orange-300/50 hover:shadow-xl hover:shadow-orange-400/60 transition-all duration-300"
            >
              <Phone className="mr-2 h-5 w-5" />
              Позвонить
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-orange-300 hover:border-orange-400 hover:bg-orange-50 px-8 py-4 rounded-2xl transition-all duration-300 text-orange-700"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Записаться онлайн
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
