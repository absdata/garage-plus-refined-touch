
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Phone, Calendar, Star, CheckCircle, AlertCircle, Wrench, DollarSign, MapPin, Mail, Clock } from 'lucide-react';

const ServiceDetail = () => {
  const { category, service } = useParams();

  // Расширенные данные для всех категорий услуг
  const serviceData = {
    'maintenance': {
      'regular-maintenance': {
        title: 'Регламентное ТО A или ТО B',
        shortDescription: 'Полное техническое обслуживание по регламенту Mercedes-Benz',
        fullDescription: 'Регламентное техническое обслуживание Mercedes-Benz W222 включает полный комплекс работ согласно заводскому регламенту. Проводим ТО типа A (малое) и ТО типа B (большое) с использованием оригинальных расходных материалов.',
        images: [
          'https://images.unsplash.com/photo-1486496572940-2bb2341fdbdf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        ],
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        problems: [
          'Превышение межсервисного интервала',
          'Загрязнение масла и фильтров',
          'Снижение эффективности систем',
          'Потеря гарантийных обязательств',
          'Преждевременный износ компонентов'
        ],
        process: [
          'Диагностика всех систем автомобиля',
          'Замена моторного масла и фильтра',
          'Проверка уровней технических жидкостей',
          'Диагностика тормозной системы',
          'Проверка подвески и рулевого управления',
          'Сброс счетчика межсервисного интервала'
        ],
        pricing: { labor: 'от 8 500 ₽', parts: 'от 12 500 ₽', total: 'от 21 000 ₽' },
        duration: '3-4 часа',
        warranty: '1 год'
      },
      'brake-discs': {
        title: 'Замена тормозных дисков',
        shortDescription: 'Замена и проточка тормозных дисков Mercedes-Benz',
        fullDescription: 'Профессиональная замена тормозных дисков с использованием оригинальных запчастей Mercedes-Benz или проверенных аналогов. Проводим диагностику износа и при необходимости выполняем проточку дисков.',
        images: [
          'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1486496572940-2bb2341fdbdf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        ],
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        problems: [
          'Биение руля при торможении',
          'Увеличенный тормозной путь',
          'Скрип и визг при торможении',
          'Неравномерный износ колодок',
          'Перегрев тормозной системы'
        ],
        process: [
          'Диагностика состояния тормозных дисков',
          'Демонтаж колеса и суппорта',
          'Снятие изношенного диска',
          'Установка нового диска',
          'Сборка тормозной системы',
          'Прокачка тормозов и тест-драйв'
        ],
        pricing: { labor: 'от 4 500 ₽', parts: 'от 15 000 ₽', total: 'от 19 500 ₽' },
        duration: '2-3 часа',
        warranty: '1 год'
      }
    },
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
        pricing: { labor: 'от 3 500 ₽', parts: 'от 8 500 ₽', total: 'от 12 000 ₽' },
        duration: '2-3 часа',
        warranty: '1 год'
      },
      'hydraulic-block': {
        title: 'Ремонт гидроблока',
        shortDescription: 'Диагностика и ремонт гидравлического блока управления',
        fullDescription: 'Гидроблок АКПП - это сердце автоматической трансмиссии Mercedes-Benz. Выполняем полную диагностику, ремонт и адаптацию гидроблока с использованием специального оборудования Mercedes-Benz.',
        images: [
          'https://images.unsplash.com/photo-1486496572940-2bb2341fdbdf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        ],
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        problems: [
          'Жесткие толчки при переключении',
          'Проскальзывание передач',
          'Аварийный режим трансмиссии',
          'Ошибки в блоке управления',
          'Неправильное давление в системе'
        ],
        process: [
          'Диагностика блока управления АКПП',
          'Снятие и разборка гидроблока',
          'Промывка и замена соленоидов',
          'Замена прокладок и уплотнений',
          'Сборка и установка гидроблока',
          'Адаптация и дорожные испытания'
        ],
        pricing: { labor: 'от 25 000 ₽', parts: 'от 35 000 ₽', total: 'от 60 000 ₽' },
        duration: '1-2 дня',
        warranty: '1 год'
      }
    },
    'engine': {
      'major-overhaul': {
        title: 'Капитальный ремонт двигателя',
        shortDescription: 'Полный капитальный ремонт двигателя Mercedes-Benz',
        fullDescription: 'Капитальный ремонт двигателя Mercedes-Benz W222 включает полную разборку, дефектовку, замену изношенных деталей и сборку с соблюдением всех технических требований завода-изготовителя.',
        images: [
          'https://images.unsplash.com/photo-1486496572940-2bb2341fdbdf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        ],
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        problems: [
          'Низкая компрессия в цилиндрах',
          'Повышенный расход масла',
          'Металлический стук в двигателе',
          'Перегрев двигателя',
          'Потеря мощности'
        ],
        process: [
          'Полная диагностика двигателя',
          'Демонтаж и разборка двигателя',
          'Дефектовка всех деталей',
          'Замена изношенных компонентов',
          'Сборка с соблюдением моментов затяжки',
          'Обкатка и настройка'
        ],
        pricing: { labor: 'от 150 000 ₽', parts: 'от 200 000 ₽', total: 'от 350 000 ₽' },
        duration: '7-14 дней',
        warranty: '2 года'
      }
    },
    'tuning': {
      'aerodynamics': {
        title: 'Обвесы и аэродинамика',
        shortDescription: 'AMG-пакет, сплиттеры, диффузоры',
        fullDescription: 'Установка аэродинамических обвесов AMG для Mercedes-Benz W222. Включает передние и задние бампера, боковые пороги, сплиттеры и диффузоры из оригинальных материалов.',
        images: [
          'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        ],
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        problems: [
          'Заводской внешний вид не соответствует ожиданиям',
          'Желание выделиться среди стандартных моделей',
          'Улучшение аэродинамических характеристик',
          'Придание спортивного характера автомобилю'
        ],
        process: [
          'Консультация по выбору обвеса',
          'Заказ оригинальных деталей AMG',
          'Демонтаж стандартных элементов',
          'Подготовка кузова к установке',
          'Установка нового обвеса',
          'Покраска и финишная обработка'
        ],
        pricing: { labor: 'от 80 000 ₽', parts: 'от 250 000 ₽', total: 'от 330 000 ₽' },
        duration: '5-7 дней',
        warranty: '1 год'
      }
    }
  };

  const currentService = serviceData[category]?.[service];

  if (!currentService) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-800 mb-4">Услуга не найдена</h1>
          <Link to="/">
            <Button className="bg-gradient-to-r from-slate-600 to-gray-600 hover:from-slate-700 hover:to-gray-700 text-white">
              Вернуться на главную
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const categoryNames = {
    'maintenance': 'ТО и Ремонт',
    'transmission': 'Обслуживание АКПП',
    'engine': 'Обслуживание ДВС',
    'tuning': 'Тюнинг'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-slate-100/95 via-gray-100/95 to-slate-100/95 backdrop-blur-sm border-b border-slate-200 py-4 shadow-lg">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link to={`/services/${category}`} className="flex items-center space-x-2 text-slate-700 hover:text-slate-900 transition-colors">
            <ArrowLeft className="h-5 w-5" />
            <span>Назад к услугам</span>
          </Link>
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold bg-gradient-to-r from-slate-600 to-gray-600 bg-clip-text text-transparent">GARAGE</div>
            <div className="text-2xl font-bold text-slate-400">PLUS</div>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-br from-slate-100 via-gray-100 to-slate-100">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-gradient-to-r from-slate-500 to-gray-500 text-white px-4 py-2 rounded-full">
                {categoryNames[category]}
              </Badge>
              <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-slate-800 to-gray-800 bg-clip-text text-transparent">
                {currentService.title}
              </h1>
              <p className="text-xl text-slate-700 mb-6">
                {currentService.shortDescription}
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center space-x-2 text-slate-600">
                  <Calendar className="h-5 w-5" />
                  <span>Время: {currentService.duration}</span>
                </div>
                <div className="flex items-center space-x-2 text-slate-600">
                  <Star className="h-5 w-5 text-yellow-500 fill-current" />
                  <span>Гарантия: {currentService.warranty}</span>
                </div>
              </div>
              <Button 
                size="lg"
                className="bg-gradient-to-r from-slate-500 to-gray-500 hover:from-slate-600 hover:to-gray-600 text-white px-8 py-4 rounded-2xl shadow-lg shadow-slate-300/50 hover:shadow-xl hover:shadow-slate-400/60 transition-all duration-300"
              >
                <Phone className="mr-2 h-5 w-5" />
                Записаться на сервис
              </Button>
            </div>
            
            <div className="relative">
              <img 
                src={currentService.images[0]}
                alt={currentService.title}
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
                {currentService.fullDescription}
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
                {currentService.problems.map((problem, index) => (
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
                {currentService.process.map((step, index) => (
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
                    src={currentService.videoUrl}
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
                  <p className="text-2xl font-bold text-slate-600">{currentService.pricing.labor}</p>
                </div>
                <div className="p-6 bg-gradient-to-br from-gray-50 to-slate-50 rounded-xl text-center">
                  <h3 className="font-semibold text-gray-800 mb-2">Запчасти</h3>
                  <p className="text-2xl font-bold text-gray-600">{currentService.pricing.parts}</p>
                </div>
                <div className="p-6 bg-gradient-to-br from-slate-50 to-gray-50 rounded-xl text-center border-2 border-slate-300">
                  <h3 className="font-semibold text-slate-800 mb-2">Итого</h3>
                  <p className="text-2xl font-bold text-slate-700">{currentService.pricing.total}</p>
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-slate-100 via-gray-100 to-slate-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-slate-800 to-gray-800 bg-clip-text text-transparent">
            Готовы записаться на обслуживание?
          </h2>
          <p className="text-xl text-slate-700 mb-8">
            Свяжитесь с нами для консультации и записи
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-slate-500 to-gray-500 hover:from-slate-600 hover:to-gray-600 text-white px-8 py-4 rounded-2xl shadow-lg shadow-slate-300/50 hover:shadow-xl hover:shadow-slate-400/60 transition-all duration-300"
            >
              <Phone className="mr-2 h-5 w-5" />
              Позвонить
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-slate-300 hover:border-slate-400 hover:bg-slate-50 px-8 py-4 rounded-2xl transition-all duration-300 text-slate-700"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Записаться онлайн
            </Button>
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
                <div className="text-2xl font-bold">GARAGE</div>
                <div className="text-2xl font-bold text-slate-400">PLUS</div>
              </div>
              <p className="text-slate-300 leading-relaxed mb-4">
                Специализированный сервис по обслуживанию и ремонту автомобилей Mercedes-Benz S-Class W222.
              </p>
              <div className="flex items-center space-x-2 text-slate-300">
                <MapPin className="h-4 w-4" />
                <span>Москва, ул. Автомобильная, 15</span>
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

            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Контакты</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-slate-400" />
                  <span className="text-slate-300">+7 (495) 123-45-67</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-slate-400" />
                  <span className="text-slate-300">info@garageplus.ru</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-slate-400" />
                  <span className="text-slate-300">Пн-Пт: 9:00-20:00</span>
                </li>
              </ul>
            </div>

            {/* Working Hours */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Время работы</h3>
              <ul className="space-y-3 text-slate-300">
                <li>Понедельник - Пятница: 9:00-20:00</li>
                <li>Суббота: 10:00-18:00</li>
                <li>Воскресенье: выходной</li>
              </ul>
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

export default ServiceDetail;
