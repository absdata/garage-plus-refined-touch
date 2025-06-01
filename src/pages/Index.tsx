
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, MapPin, Phone, Clock, Star, ChevronLeft, ChevronRight, Award, Shield, Wrench, Users } from 'lucide-react';
import { ContactForm } from "@/components/ContactForm";
import { ServiceCard } from "@/components/ServiceCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { PromotionCarousel } from "@/components/PromotionCarousel";
import { LoadingScreen } from "@/components/LoadingScreen";
import { Link } from 'react-router-dom';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [language, setLanguage] = useState('ru');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const translations = {
    ru: {
      nav: {
        services: 'Услуги',
        promotions: 'Акции',
        reviews: 'Отзывы',
        contact: 'Контакты',
        about: 'О нас'
      },
      hero: {
        title: 'Обслуживаем по стандартам завода-изготовителя',
        subtitle: 'Только оригинальные запчасти',
        description: 'Профессиональный ремонт и обслуживание Mercedes-Benz W222 с 1999 года',
        bookService: 'Записаться на сервис'
      },
      features: {
        experience: {
          title: '25 лет с Mercedes-Benz',
          description: 'Мы обслуживаем автомобили Mercedes с 1999 года. Опыт, проверенный временем.'
        },
        specialists: {
          title: 'Сертифицированные специалисты',
          description: 'Наши мастера прошли обучение в «Мерседес-Бенц РУС» и имеют опыт работы в дилерских центрах.'
        },
        parts: {
          title: 'Оригинальные запчасти',
          description: 'Прямые поставки со складов в ОАЭ. Качество и надёжность без компромиссов.'
        },
        technology: {
          title: 'Технологии Mercedes-Benz',
          description: 'Все работы выполняются строго по технологиям завода-изготовителя. Никакой самодеятельности.'
        }
      },
      contact: {
        title: 'Записаться на сервис',
        address: 'г. Москва, ул. Поклонная, 11 стр. 1А',
        phone: '+7 (495) 221-8480',
        schedule: 'ПН-ПТ: 11:30-20:30, СБ: 12:00-17:00, ВС: выходной',
        routeButton: 'Проложить маршрут'
      }
    }
  };

  const t = translations[language];

  if (isLoading) {
    return <LoadingScreen />;
  }

  const featuresArray = [
    { 
      key: 'experience', 
      title: t.features.experience.title, 
      description: t.features.experience.description,
      icon: Award
    },
    { 
      key: 'specialists', 
      title: t.features.specialists.title, 
      description: t.features.specialists.description,
      icon: Users
    },
    { 
      key: 'parts', 
      title: t.features.parts.title, 
      description: t.features.parts.description,
      icon: Shield
    },
    { 
      key: 'technology', 
      title: t.features.technology.title, 
      description: t.features.technology.description,
      icon: Wrench
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 text-gray-900">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-slate-100/95 via-gray-100/95 to-slate-100/95 backdrop-blur-sm border-b border-slate-200 shadow-lg">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/0e1f2e66-35b1-4036-990c-a2df35a14e71.png" 
              alt="GARAGE PLUS" 
              className="h-10"
            />
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-6">
              <a href="#services" className="text-slate-700 hover:text-slate-900 transition-all duration-300 hover:scale-105">{t.nav.services}</a>
              <a href="#promotions" className="text-slate-700 hover:text-slate-900 transition-all duration-300 hover:scale-105">{t.nav.promotions}</a>
              <a href="#reviews" className="text-slate-700 hover:text-slate-900 transition-all duration-300 hover:scale-105">{t.nav.reviews}</a>
              <a href="#contact" className="text-slate-700 hover:text-slate-900 transition-all duration-300 hover:scale-105">{t.nav.contact}</a>
              <a href="#about" className="text-slate-700 hover:text-slate-900 transition-all duration-300 hover:scale-105">{t.nav.about}</a>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <div className="text-right">
              <div className="text-sm text-slate-600 font-medium">Mercedes Benz</div>
              <div className="text-xs text-slate-500">независимый специалист</div>
            </div>
            <div className="w-12 h-8 bg-gradient-to-r from-slate-300 to-gray-300 rounded-lg flex items-center justify-center shadow-md">
              <div className="w-6 h-6 bg-white rounded-full shadow-inner"></div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-gradient-to-br from-slate-100 via-gray-100 to-slate-100">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight bg-gradient-to-r from-slate-800 via-gray-800 to-slate-700 bg-clip-text text-transparent">
                  {t.hero.title}
                </h1>
                <p className="text-xl text-slate-700 font-medium">
                  {t.hero.subtitle}
                </p>
                <p className="text-lg text-slate-600">
                  {t.hero.description}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-slate-600 to-gray-600 hover:from-slate-700 hover:to-gray-700 text-white px-8 py-6 text-lg font-medium rounded-2xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 shadow-lg shadow-slate-300/50"
                >
                  {t.hero.bookService}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
            
            <div className="relative animate-fade-in">
              <div className="aspect-[4/3] bg-gradient-to-br from-slate-200 via-gray-200 to-slate-200 rounded-3xl overflow-hidden shadow-2xl shadow-slate-300/30">
                <img 
                  src="mercedes-benz-s-class-w222-3705.jpg"
                  alt="Mercedes-Benz W222"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl shadow-slate-200/50">
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-yellow-500 fill-current" />
                  <span className="font-semibold">4.9/5</span>
                  <span className="text-gray-500 text-sm">250+ отзывов</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Logos */}
      <section className="py-12 border-t border-slate-200 bg-gradient-to-r from-slate-50 to-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center space-x-12 opacity-60">
            <div className="text-2xl font-bold text-slate-400">Mercedes-Benz</div>
            <div className="text-2xl font-bold text-gray-400">AMG</div>
            <div className="text-2xl font-bold text-slate-500">MAYBACH</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-slate-50 to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-slate-800 to-gray-800 bg-clip-text text-transparent">Почему выбирают нас</h2>
            <p className="text-xl text-slate-700 max-w-2xl mx-auto">
              Профессионализм, качество и надёжность в каждой детали
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {featuresArray.map((feature, index) => (
              <Card key={feature.key} className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 rounded-2xl bg-white/80 backdrop-blur-sm shadow-slate-200/30 group hover:bg-gradient-to-br hover:from-slate-50 hover:to-gray-50">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="p-2 rounded-lg bg-gradient-to-r from-slate-100 to-gray-100">
                      <feature.icon className="h-6 w-6 text-slate-500" />
                    </div>
                    <CardTitle className="text-xl text-slate-800 group-hover:text-slate-900 transition-colors duration-300">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Promotions Section */}
      <section id="promotions" className="py-20 bg-gradient-to-br from-slate-50 via-gray-50 to-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-slate-800 to-gray-800 bg-clip-text text-transparent">Актуальные акции</h2>
            <p className="text-xl text-slate-700">
              Выгодные предложения на обслуживание вашего Mercedes-Benz
            </p>
          </div>
          
          <PromotionCarousel />
        </div>
      </section>

      {/* Services Preview */}
      <section id="services" className="py-20 bg-gradient-to-br from-slate-50 via-gray-50 to-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-gray-600">
              Полный спектр обслуживания и ремонта Mercedes-Benz W222
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link to="/services/maintenance">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 rounded-2xl bg-white group cursor-pointer">
                <div className="aspect-[4/3] overflow-hidden rounded-t-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                    alt="Техническое обслуживание"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl">ТО и Ремонт</CardTitle>
                  <CardDescription className="text-gray-600">
                    Техническое обслуживание, ремонт ходовой части, диагностика
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <Button 
                    className="w-full bg-slate-600 hover:bg-slate-700 text-white rounded-xl py-3 transition-all duration-300"
                  >
                    Подробнее
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </Link>

            <Link to="/services/transmission">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 rounded-2xl bg-white group cursor-pointer">
                <div className="aspect-[4/3] overflow-hidden rounded-t-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                    alt="Обслуживание АКПП"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl">Обслуживание АКПП</CardTitle>
                  <CardDescription className="text-gray-600">
                    Замена масла, ремонт гидроблока, диагностика 7G-Tronic
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <Button 
                    className="w-full bg-slate-600 hover:bg-slate-700 text-white rounded-xl py-3 transition-all duration-300"
                  >
                    Подробнее
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </Link>

            <Link to="/services/engine">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 rounded-2xl bg-white group cursor-pointer">
                <div className="aspect-[4/3] overflow-hidden rounded-t-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1486496572940-2bb2341fdbdf?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                    alt="Ремонт ДВС"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl">Обслуживание ДВС</CardTitle>
                  <CardDescription className="text-gray-600">
                    Капитальный ремонт, замена цепи ГРМ, диагностика
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <Button 
                    className="w-full bg-slate-600 hover:bg-slate-700 text-white rounded-xl py-3 transition-all duration-300"
                  >
                    Подробнее
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </Link>

            <Link to="/services/tuning">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 rounded-2xl bg-white group cursor-pointer">
                <div className="aspect-[4/3] overflow-hidden rounded-t-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                    alt="Тюнинг"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl">Тюнинг</CardTitle>
                  <CardDescription className="text-gray-600">
                    AMG-пакет, перешив салона, колесные диски
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <Button 
                    className="w-full bg-slate-600 hover:bg-slate-700 text-white rounded-xl py-3 transition-all duration-300"
                  >
                    Подробнее
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-gradient-to-br from-gray-50 via-slate-50 to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Отзывы клиентов</h2>
            <p className="text-xl text-gray-600">
              Что говорят владельцы Mercedes-Benz о нашей работе
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard 
              name="Александр М."
              car="Mercedes S-класс W222"
              text="Отличный сервис! Мастера знают свое дело, использовали только оригинальные запчасти. Машина работает как новая."
              rating={5}
            />
            <TestimonialCard 
              name="Дмитрий К."
              car="Mercedes S 500 W222"
              text="Привозил на ремонт АКПП. Сделали быстро и качественно. Цены адекватные, рекомендую."
              rating={5}
            />
            <TestimonialCard 
              name="Елена В."
              car="Mer Mercedes S 350 W222"
              text="Регулярно прохожу ТО в Garage Plus. Всегда довольна результатом и отношением персонала."
              rating={5}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-slate-50 via-gray-50 to-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">{t.contact.title}</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-gray-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Адрес</h3>
                    <p className="text-gray-600">{t.contact.address}</p>
                    <Button 
                      variant="outline"
                      className="mt-2"
                      onClick={() => window.open('https://yandex.ru/maps/?text=' + encodeURIComponent(t.contact.address), '_blank')}
                    >
                      {t.contact.routeButton}
                    </Button>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-gray-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Телефон</h3>
                    <p className="text-gray-600">{t.contact.phone}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-gray-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Режим работы</h3>
                    <p className="text-gray-600">{t.contact.schedule}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-slate-900 via-gray-900 to-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img 
                  src="/lovable-uploads/0e1f2e66-35b1-4036-990c-a2df35a14e71.png" 
                  alt="GARAGE PLUS" 
                  className="h-8 brightness-0 invert"
                />
              </div>
              <p className="text-slate-200">
                Профессиональный ремонт и обслуживание Mercedes-Benz с 1999 года
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4 text-slate-300">Услуги</h3>
              <ul className="space-y-2 text-slate-200">
                <li><Link to="/services/maintenance" className="hover:text-slate-100 transition-colors">Техническое обслуживание</Link></li>
                <li><Link to="/services/transmission" className="hover:text-slate-100 transition-colors">Обслуживание АКПП</Link></li>
                <li><Link to="/services/engine" className="hover:text-slate-100 transition-colors">Ремонт двигателя</Link></li>
                <li><Link to="/services/tuning" className="hover:text-slate-100 transition-colors">Тюнинг</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4 text-slate-300">Информация</h3>
              <ul className="space-y-2 text-slate-200">
                <li><a href="#about" className="hover:text-slate-100 transition-colors">О нас</a></li>
                <li><a href="#reviews" className="hover:text-slate-100 transition-colors">Отзывы</a></li>
                <li><a href="#contact" className="hover:text-slate-100 transition-colors">Контакты</a></li>
                <li><a href="#promotions" className="hover:text-slate-100 transition-colors">Акции</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4 text-slate-300">Контакты</h3>
              <div className="space-y-2 text-slate-200">
                <p>{t.contact.address}</p>
                <p>{t.contact.phone}</p>
                <p>{t.contact.schedule}</p>
                <Button 
                  variant="outline"
                  size="sm"
                  className="mt-2 text-white border-white hover:bg-white hover:text-slate-900"
                  onClick={() => window.open('https://yandex.ru/maps/?text=' + encodeURIComponent(t.contact.address), '_blank')}
                >
                  {t.contact.routeButton}
                </Button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-300">
            <p>&copy; 2024 Garage Plus. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
