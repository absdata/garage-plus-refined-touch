import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, MapPin, Phone, Clock, Star, ChevronLeft, ChevronRight } from 'lucide-react';
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
        },
        location: {
          title: 'Удобное расположение',
          description: 'Сервис находится в 1,5 км от Москва-Сити и рядом с Поклонной горой — удобно доехать из любого района Москвы.'
        }
      },
      contact: {
        title: 'Записаться на сервис',
        address: 'г. Москва, ул. Поклонная, 11 стр. 1А',
        phone: '+7 (495) 123-45-67',
        schedule: 'Пн-Пт: 9:00-20:00, Сб-Вс: 10:00-18:00'
      }
    }
  };

  const t = translations[language];

  if (isLoading) {
    return <LoadingScreen />;
  }

  const featuresArray = [
    { key: 'experience', title: t.features.experience.title, description: t.features.experience.description },
    { key: 'specialists', title: t.features.specialists.title, description: t.features.specialists.description },
    { key: 'parts', title: t.features.parts.title, description: t.features.parts.description },
    { key: 'technology', title: t.features.technology.title, description: t.features.technology.description },
    { key: 'location', title: t.features.location.title, description: t.features.location.description }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 text-gray-900">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-orange-100/95 via-amber-100/95 to-yellow-100/95 backdrop-blur-sm border-b border-orange-200 shadow-lg">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">GARAGE</div>
            <div className="text-2xl font-bold text-orange-400">PLUS</div>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-6">
              <a href="#services" className="text-orange-700 hover:text-orange-900 transition-all duration-300 hover:scale-105">{t.nav.services}</a>
              <a href="#promotions" className="text-orange-700 hover:text-orange-900 transition-all duration-300 hover:scale-105">{t.nav.promotions}</a>
              <a href="#reviews" className="text-orange-700 hover:text-orange-900 transition-all duration-300 hover:scale-105">{t.nav.reviews}</a>
              <a href="#contact" className="text-orange-700 hover:text-orange-900 transition-all duration-300 hover:scale-105">{t.nav.contact}</a>
              <a href="#about" className="text-orange-700 hover:text-orange-900 transition-all duration-300 hover:scale-105">{t.nav.about}</a>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <div className="text-right">
              <div className="text-sm text-orange-600 font-medium">Mercedes Benz</div>
              <div className="text-xs text-orange-500">независимый специалист</div>
            </div>
            <div className="w-12 h-8 bg-gradient-to-r from-orange-300 to-amber-300 rounded-lg flex items-center justify-center shadow-md">
              <div className="w-6 h-6 bg-white rounded-full shadow-inner"></div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-gradient-to-br from-orange-100 via-amber-100 to-yellow-100">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight bg-gradient-to-r from-orange-800 via-amber-800 to-yellow-800 bg-clip-text text-transparent">
                  {t.hero.title}
                </h1>
                <p className="text-xl text-orange-700 font-medium">
                  {t.hero.subtitle}
                </p>
                <p className="text-lg text-orange-600">
                  {t.hero.description}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-8 py-6 text-lg font-medium rounded-2xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 shadow-lg shadow-orange-300/50"
                >
                  {t.hero.bookService}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
            
            <div className="relative animate-fade-in">
              <div className="aspect-[4/3] bg-gradient-to-br from-orange-200 via-amber-200 to-yellow-200 rounded-3xl overflow-hidden shadow-2xl shadow-orange-300/30">
                <img 
                  src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Mercedes-Benz W222"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl shadow-orange-200/50">
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
      <section className="py-12 border-t border-orange-200 bg-gradient-to-r from-orange-50 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center space-x-12 opacity-60">
            <div className="text-2xl font-bold text-orange-400">Mercedes-Benz</div>
            <div className="text-2xl font-bold text-amber-400">AMG</div>
            <div className="text-2xl font-bold text-yellow-500">MAYBACH</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-orange-800 to-amber-800 bg-clip-text text-transparent">Почему выбирают нас</h2>
            <p className="text-xl text-orange-700 max-w-2xl mx-auto">
              Профессионализм, качество и надёжность в каждой детали
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuresArray.map((feature, index) => (
              <Card key={feature.key} className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 rounded-2xl bg-white/80 backdrop-blur-sm shadow-orange-200/30 group hover:bg-gradient-to-br hover:from-orange-50 hover:to-amber-50">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl text-orange-800 group-hover:text-orange-900 transition-colors duration-300">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-orange-600 leading-relaxed group-hover:text-orange-700 transition-colors duration-300">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Promotions Section */}
      <section id="promotions" className="py-20 bg-gradient-to-br from-yellow-50 via-orange-50 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-orange-800 to-amber-800 bg-clip-text text-transparent">Актуальные акции</h2>
            <p className="text-xl text-orange-700">
              Выгодные предложения на обслуживание вашего Mercedes-Benz
            </p>
          </div>
          
          <PromotionCarousel />
        </div>
      </section>

      {/* Services Preview */}
      <section id="services" className="py-20 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
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
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-3 transition-all duration-300"
                  >
                    Смотреть услуги
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
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-3 transition-all duration-300"
                  >
                    Смотреть услуги
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
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-3 transition-all duration-300"
                  >
                    Смотреть услуги
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
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-3 transition-all duration-300"
                  >
                    Смотреть услуги
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
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
      <section id="contact" className="py-20 bg-gradient-to-br from-yellow-50 via-orange-50 to-amber-50">
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
      <footer className="bg-gradient-to-r from-orange-900 via-amber-900 to-yellow-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="text-xl font-bold text-orange-300">GARAGE</div>
                <div className="text-xl font-bold text-amber-300">PLUS</div>
              </div>
              <p className="text-orange-200">
                Профессиональный ремонт и обслуживание Mercedes-Benz с 1999 года
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4 text-orange-300">Услуги</h3>
              <ul className="space-y-2 text-orange-200">
                <li><Link to="/services/maintenance" className="hover:text-orange-100 transition-colors">Техническое обслуживание</Link></li>
                <li><Link to="/services/transmission" className="hover:text-orange-100 transition-colors">Обслуживание АКПП</Link></li>
                <li><Link to="/services/engine" className="hover:text-orange-100 transition-colors">Ремонт двигателя</Link></li>
                <li><Link to="/services/tuning" className="hover:text-orange-100 transition-colors">Тюнинг</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4 text-orange-300">Информация</h3>
              <ul className="space-y-2 text-orange-200">
                <li><a href="#about" className="hover:text-orange-100 transition-colors">О нас</a></li>
                <li><a href="#reviews" className="hover:text-orange-100 transition-colors">Отзывы</a></li>
                <li><a href="#contact" className="hover:text-orange-100 transition-colors">Контакты</a></li>
                <li><a href="#promotions" className="hover:text-orange-100 transition-colors">Акции</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4 text-orange-300">Контакты</h3>
              <div className="space-y-2 text-orange-200">
                <p>{t.contact.address}</p>
                <p>{t.contact.phone}</p>
                <p>{t.contact.schedule}</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-orange-800 mt-8 pt-8 text-center text-orange-300">
            <p>&copy; 2024 Garage Plus. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
