
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
        contact: 'Контакты'
      },
      hero: {
        title: 'Обслуживаем по стандартам завода-изготовителя',
        subtitle: 'Только оригинальные запчасти',
        description: 'Профессиональный ремонт и обслуживание Mercedes-Benz W222 с 1999 года',
        bookService: 'Записаться на сервис',
        buildRoute: 'Построить маршрут'
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
        },
        navigation: {
          title: 'Проложить маршрут за 1 клик',
          description: 'Ссылка на Яндекс.Навигатор позволяет сразу построить маршрут до сервиса.'
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
    { key: 'experience', ...t.features.experience },
    { key: 'specialists', ...t.features.specialists },
    { key: 'parts', ...t.features.parts },
    { key: 'technology', ...t.features.technology },
    { key: 'location', ...t.features.location },
    { key: 'navigation', ...t.features.navigation }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-gray-900">GARAGE</div>
            <div className="text-2xl font-bold text-gray-600">PLUS</div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-6">
              <a href="#services" className="text-gray-600 hover:text-gray-900 transition-colors">{t.nav.services}</a>
              <a href="#promotions" className="text-gray-600 hover:text-gray-900 transition-colors">{t.nav.promotions}</a>
              <a href="#reviews" className="text-gray-600 hover:text-gray-900 transition-colors">{t.nav.reviews}</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">{t.nav.contact}</a>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <div className="text-right">
              <div className="text-sm text-gray-500">Mercedes Benz</div>
              <div className="text-xs text-gray-400">независимый специалист</div>
            </div>
            <div className="w-12 h-8 bg-gray-200 rounded flex items-center justify-center">
              <div className="w-6 h-6 bg-gray-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  {t.hero.title}
                </h1>
                <p className="text-xl text-gray-600 font-medium">
                  {t.hero.subtitle}
                </p>
                <p className="text-lg text-gray-500">
                  {t.hero.description}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-6 text-lg font-medium rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  {t.hero.bookService}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-gray-300 hover:border-gray-400 px-8 py-6 text-lg font-medium rounded-2xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <MapPin className="mr-2 h-5 w-5" />
                  {t.hero.buildRoute}
                </Button>
              </div>
            </div>
            
            <div className="relative animate-fade-in">
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Mercedes-Benz W222"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl">
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="font-semibold">4.9/5</span>
                  <span className="text-gray-500 text-sm">250+ отзывов</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Logos */}
      <section className="py-12 border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center space-x-12 opacity-40">
            <div className="text-2xl font-bold">Mercedes-Benz</div>
            <div className="text-2xl font-bold">AMG</div>
            <div className="text-2xl font-bold">MAYBACH</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Почему выбирают нас</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Профессионализм, качество и надёжность в каждой детали
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuresArray.map((feature, index) => (
              <Card key={feature.key} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 rounded-2xl bg-white">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-4">
                    <div className="w-6 h-6 bg-gray-400 rounded"></div>
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Promotions Section */}
      <section id="promotions" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Актуальные акции</h2>
            <p className="text-xl text-gray-600">
              Выгодные предложения на обслуживание вашего Mercedes-Benz
            </p>
          </div>
          
          <PromotionCarousel />
        </div>
      </section>

      {/* Services Preview */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-gray-600">
              Полный спектр обслуживания и ремонта Mercedes-Benz W222
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              title="Техническое обслуживание"
              description="Регламентное ТО A и ТО B, замена масла и фильтров, диагностика"
              price="от 8 500 ₽"
              image="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
            />
            <ServiceCard 
              title="Ремонт ходовой части"
              description="Пневмоподвеска AIRMATIC, тормозная система, рычаги"
              price="от 12 000 ₽"
              image="https://images.unsplash.com/photo-1486496572940-2bb2341fdbdf?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
            />
            <ServiceCard 
              title="Обслуживание АКПП"
              description="Замена масла, ремонт гидроблока, диагностика 7G-Tronic"
              price="от 15 000 ₽"
              image="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
            />
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20">
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
              car="Mercedes S 350 W222"
              text="Регулярно прохожу ТО в Garage Plus. Всегда довольна результатом и отношением персонала."
              rating={5}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
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
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="text-xl font-bold">GARAGE</div>
                <div className="text-xl font-bold text-gray-400">PLUS</div>
              </div>
              <p className="text-gray-400">
                Профессиональный ремонт и обслуживание Mercedes-Benz с 1999 года
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">Услуги</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Техническое обслуживание</li>
                <li>Ремонт ходовой части</li>
                <li>Обслуживание АКПП</li>
                <li>Ремонт двигателя</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">Контакты</h3>
              <div className="space-y-2 text-gray-400">
                <p>{t.contact.address}</p>
                <p>{t.contact.phone}</p>
                <p>{t.contact.schedule}</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Garage Plus. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
