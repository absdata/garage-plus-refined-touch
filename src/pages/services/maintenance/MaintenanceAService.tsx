
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Phone, Calendar, Star, CheckCircle, AlertCircle, Wrench, DollarSign, MapPin, Mail, Clock } from 'lucide-react';
import { ContactForm } from "@/components/ContactForm";

const MaintenanceAService = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const serviceData = {
    title: 'ТО A (базовое)',
    shortDescription: 'Базовое техническое обслуживание Mercedes-Benz W222',
    fullDescription: 'Техническое обслуживание типа A - это базовый комплекс работ по поддержанию автомобиля Mercedes-Benz W222 в исправном состоянии. Включает замену моторного масла, проверку основных систем и диагностику.',
    images: [
      'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1486496572940-2bb2341fdbdf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    problems: [
      'Превышение межсервисного интервала',
      'Загрязнение моторного масла',
      'Снижение уровня технических жидкостей',
      'Износ воздушного фильтра',
      'Потеря эффективности работы двигателя'
    ],
    process: [
      'Компьютерная диагностика всех систем',
      'Замена моторного масла и масляного фильтра',
      'Проверка уровней технических жидкостей',
      'Визуальный осмотр узлов и агрегатов',
      'Проверка работы световых приборов',
      'Сброс счетчика межсервисного интервала'
    ],
    pricing: { labor: 'от 6 500 ₽', parts: 'от 8 500 ₽', total: 'от 15 000 ₽' },
    duration: '2-3 часа',
    warranty: '1 год'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-slate-100/95 via-gray-100/95 to-slate-100/95 backdrop-blur-sm border-b border-slate-200 py-4 shadow-lg">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link to="/services/maintenance" className="flex items-center space-x-2 text-slate-700 hover:text-slate-900 transition-colors">
            <ArrowLeft className="h-5 w-5" />
            <span>Назад к ТО и ремонту</span>
          </Link>
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/ec5cb8ce-9a6e-4657-ae6d-ddcd09487589.png" 
              alt="GARAGE PLUS" 
              className="h-12 w-auto"
            />
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/#services" className="text-slate-700 hover:text-slate-900 transition-colors">Услуги</Link>
            <Link to="/#promotions" className="text-slate-700 hover:text-slate-900 transition-colors">Акции</Link>
            <Link to="/#reviews" className="text-slate-700 hover:text-slate-900 transition-colors">Отзывы</Link>
            <Link to="/#contact" className="text-slate-700 hover:text-slate-900 transition-colors">Контакты</Link>
            <Link to="/about" className="text-slate-700 hover:text-slate-900 transition-colors">О нас</Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-br from-slate-100 via-gray-100 to-slate-100">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-gradient-to-r from-slate-500 to-gray-500 text-white px-4 py-2 rounded-full">
                ТО и Ремонт
              </Badge>
              <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-slate-800 to-gray-800 bg-clip-text text-transparent">
                {serviceData.title}
              </h1>
              <p className="text-xl text-slate-700 mb-6">
                {serviceData.shortDescription}
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center space-x-2 text-slate-600">
                  <Calendar className="h-5 w-5" />
                  <span>Время: {serviceData.duration}</span>
                </div>
                <div className="flex items-center space-x-2 text-slate-600">
                  <Star className="h-5 w-5 text-yellow-500 fill-current" />
                  <span>Гарантия: {serviceData.warranty}</span>
                </div>
              </div>
              <Button 
                size="lg"
                onClick={scrollToContact}
                className="bg-gradient-to-r from-slate-500 to-gray-500 hover:from-slate-600 hover:to-gray-600 text-white px-8 py-4 rounded-2xl shadow-lg shadow-slate-300/50 hover:shadow-xl hover:shadow-slate-400/60 transition-all duration-300"
              >
                <Phone className="mr-2 h-5 w-5" />
                Записаться на сервис
              </Button>
            </div>
            
            <div className="relative">
              <img 
                src={serviceData.images[0]}
                alt={serviceData.title}
                className="w-full h-80 object-cover rounded-2xl shadow-2xl shadow-slate-200/50"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 space-y-12">
          
          {/* Description */}
          <Card className="bg-white/90 backdrop-blur-sm shadow-lg shadow-slate-200/30 border-0 rounded-2xl">
            <CardHeader>
              <CardTitle className="text-2xl text-slate-800">Подробное описание</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-700 leading-relaxed text-lg">
                {serviceData.fullDescription}
              </p>
            </CardContent>
          </Card>

          {/* Problems */}
          <Card className="bg-white/90 backdrop-blur-sm shadow-lg shadow-slate-200/30 border-0 rounded-2xl">
            <CardHeader>
              <CardTitle className="text-2xl text-slate-800 flex items-center">
                <AlertCircle className="mr-2 h-6 w-6 text-amber-500" />
                Основные проблемы
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {serviceData.problems.map((problem, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 bg-gradient-to-r from-slate-50 to-gray-50 rounded-xl">
                    <AlertCircle className="h-5 w-5 text-amber-500 mt-0.5" />
                    <span className="text-slate-700">{problem}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Process */}
          <Card className="bg-white/90 backdrop-blur-sm shadow-lg shadow-slate-200/30 border-0 rounded-2xl">
            <CardHeader>
              <CardTitle className="text-2xl text-slate-800 flex items-center">
                <Wrench className="mr-2 h-6 w-6 text-slate-500" />
                Этапы работы
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {serviceData.process.map((step, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-gradient-to-r from-slate-50 to-gray-50 rounded-xl">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-slate-500 to-gray-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                    <span className="text-slate-700 font-medium">{step}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Media */}
          <div className="grid gap-6">
            <Card className="bg-white/90 backdrop-blur-sm shadow-lg shadow-slate-200/30 border-0 rounded-2xl">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-800">Видео процесса</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                  <iframe 
                    src={serviceData.videoUrl}
                    className="w-full h-full"
                    allowFullScreen
                    title="Видео процесса работы"
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm shadow-lg shadow-slate-200/30 border-0 rounded-2xl">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-800">Фотографии работ</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {serviceData.images.map((image, index) => (
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

          {/* Pricing */}
          <Card className="bg-white/90 backdrop-blur-sm shadow-lg shadow-slate-200/30 border-0 rounded-2xl">
            <CardHeader>
              <CardTitle className="text-2xl text-slate-800 flex items-center">
                <DollarSign className="mr-2 h-6 w-6 text-green-500" />
                Стоимость услуг
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 bg-gradient-to-br from-slate-50 to-gray-50 rounded-xl text-center">
                  <h3 className="font-semibold text-slate-800 mb-2">Работа</h3>
                  <p className="text-2xl font-bold text-slate-600">{serviceData.pricing.labor}</p>
                </div>
                <div className="p-6 bg-gradient-to-br from-gray-50 to-slate-50 rounded-xl text-center">
                  <h3 className="font-semibold text-gray-800 mb-2">Запчасти</h3>
                  <p className="text-2xl font-bold text-gray-600">{serviceData.pricing.parts}</p>
                </div>
                <div className="p-6 bg-gradient-to-br from-slate-50 to-gray-50 rounded-xl text-center border-2 border-slate-300">
                  <h3 className="font-semibold text-slate-800 mb-2">Итого</h3>
                  <p className="text-2xl font-bold text-slate-700">{serviceData.pricing.total}</p>
                </div>
              </div>
              <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
                <div className="flex items-center space-x-2 text-green-700">
                  <CheckCircle className="h-5 w-5" />
                  <span className="font-medium">Гарантия на выполненные работы: {serviceData.warranty}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Form */}
          <div id="contact">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-slate-800 via-gray-800 to-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* About */}
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <img 
                  src="/lovable-uploads/ec5cb8ce-9a6e-4657-ae6d-ddcd09487589.png" 
                  alt="GARAGE PLUS" 
                  className="h-10 w-auto brightness-0 invert"
                />
              </div>
              <p className="text-slate-300 leading-relaxed mb-4">
                Специализированный сервис по обслуживанию и ремонту автомобилей Mercedes-Benz S-Class W222.
              </p>
              <div className="flex items-center space-x-2 text-slate-300">
                <MapPin className="h-4 w-4" />
                <span>г. Москва, ул. Поклонная, 11 стр. 1А</span>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Услуги</h3>
              <ul className="space-y-3">
                <li><Link to="/services/maintenance" className="text-slate-300 hover:text-white transition-colors">ТО и Ремонт</Link></li>
                <li><Link to="/services/transmission" className="text-slate-300 hover:text-white transition-colors">Обслуживание АКПП</Link></li>
                <li><Link to="/services/engine" className="text-slate-300 hover:text-white transition-colors">Обслуживание ДВС</Link></li>
                <li><Link to="/services/tuning" className="text-slate-300 hover:text-white transition-colors">Тюнинг</Link></li>
              </ul>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Навигация</h3>
              <ul className="space-y-3">
                <li><Link to="/#services" className="text-slate-300 hover:text-white transition-colors">Услуги</Link></li>
                <li><Link to="/#promotions" className="text-slate-300 hover:text-white transition-colors">Акции</Link></li>
                <li><Link to="/#reviews" className="text-slate-300 hover:text-white transition-colors">Отзывы</Link></li>
                <li><Link to="/#contact" className="text-slate-300 hover:text-white transition-colors">Контакты</Link></li>
                <li><Link to="/about" className="text-slate-300 hover:text-white transition-colors">О нас</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Контакты</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-slate-400" />
                  <span className="text-slate-300">+7 (495) 221-8480</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-slate-400" />
                  <span className="text-slate-300">info@garageplus.ru</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-slate-400" />
                  <div className="text-slate-300">
                    <div>ПН-ПТ: 11:30-20:30</div>
                    <div>СБ: 12:00-17:00</div>
                    <div>ВС: выходной</div>
                  </div>
                </li>
              </ul>
              <Button 
                variant="outline"
                size="sm"
                className="mt-4 text-white border-white hover:bg-white hover:text-slate-900"
                onClick={() => window.open('https://yandex.ru/maps/?text=' + encodeURIComponent('г. Москва, ул. Поклонная, 11 стр. 1А'), '_blank')}
              >
                Проложить маршрут
              </Button>
            </div>
          </div>

          <div className="border-t border-slate-700 mt-12 pt-8 text-center text-slate-400">
            <p>&copy; 2024 Garage Plus. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MaintenanceAService;
