import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Star, Award, Shield, Wrench, Users } from 'lucide-react';
import { ServiceCard } from "@/components/ServiceCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { PromotionCarousel } from "@/components/PromotionCarousel";
import { LoadingScreen } from "@/components/LoadingScreen";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ContactSection } from "@/components/sections/ContactSection";
import { Link } from 'react-router-dom';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  const featuresArray = [
    {
      title: 'Профессиональный ремонт с 1999 года',
      description: 'Обслуживаем автомобили Mercedes-Benz уже более 25 лет. Опыт, проверенный временем.',
      icon: Award,
    },
    {
      title: 'Сертифицированные специалисты',
      description:
        'Наши мастера имеют многолетний опыт работы в дилерских центрах Mercedes-Benz и прошли обучение в "Мерседес-Бенц РУС" с подтверждёнными сертификатами.',
      icon: Users,
    },
    {
      title: 'Оригинальные запчасти или качественные аналоги',
      description:
        'Используем оригинальные детали Mercedes-Benz или качественные аналоги от официальных поставщиков. Никогда не применяем подделки или запчасти ненадлежащего качества.',
      icon: Shield,
    },
    {
      title: 'Технологии Mercedes-Benz',
      description:
        'Все работы выполняются по технологии завода Mercedes-Benz с применением официальных сервисных программ EPC, WIS и ASRA.',
      icon: Wrench,
    },
    {
      title: 'Удобное расположение',
      description:
        'Сервис находится в 1,5 км от Москва-Сити и рядом с Поклонной горой — удобно добираться из любого района Москвы.',
      icon: Star,
    },
    {
      title: 'Быстрая доставка запчастей',
      description:
        'Благодаря отлаженной логистике и прямым поставкам мы минимизируем сроки ремонта вашего автомобиля.',
      icon: ArrowRight,
    },
  ];
  

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 text-gray-900">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-gradient-to-br from-slate-100 via-gray-100 to-slate-100">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight bg-gradient-to-r from-slate-800 via-gray-800 to-slate-700 bg-clip-text text-transparent">
                  Обслуживаем по стандартам завода-изготовителя
                </h1>
                <p className="text-xl text-slate-700 font-medium">
                  Только оригинальные запчасти
                </p>
                <p className="text-lg text-slate-600">
                  Профессиональный ремонт и обслуживание Mercedes-Benz с 1999 года
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  onClick={scrollToContact}
                  className="bg-gradient-to-r from-slate-600 to-gray-600 hover:from-slate-700 hover:to-gray-700 text-white px-8 py-6 text-lg font-medium rounded-2xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 shadow-lg shadow-slate-300/50"
                >
                  Записаться на сервис
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
            
            <div className="relative animate-fade-in">
              <div className="aspect-[5/3] bg-gradient-to-br from-slate-200 via-gray-200 to-slate-200 rounded-3xl overflow-hidden shadow-2xl shadow-slate-300/30">
                <img 
                  src="/mercedes_w222.jpg"
                  alt="Mercedes-Benz W222"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  loading="eager"
                  width={800}
                  height={480}
                  style={{
                    backgroundColor: '#f1f5f9',
                    backgroundImage: 'linear-gradient(to right, #f1f5f9, #e2e8f0, #f1f5f9)',
                    backgroundSize: '200% 100%',
                    animation: 'shimmer 2s infinite',
                  }}
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
      <section className="py-8 md:py-12 border-t border-slate-200 bg-gradient-to-r from-slate-50 to-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-nowrap md:flex-wrap justify-center items-center gap-4 md:gap-8 lg:gap-12 overflow-x-auto pb-4 -mx-4 px-4">
            <img 
              src="/mb.svg" 
              alt="Mercedes-Benz" 
              className="h-3 md:h-4 opacity-60 hover:opacity-80 transition-opacity flex-shrink-0"
            />
            <img 
              src="/amg.svg" 
              alt="AMG" 
              className="h-3 md:h-4 opacity-60 hover:opacity-80 transition-opacity flex-shrink-0"
            />
            <img 
              src="mbh.svg" 
              alt="MAYBACH" 
              className="h-3 md:h-4 opacity-60 hover:opacity-80 transition-opacity flex-shrink-0"
            />
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
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuresArray.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 rounded-2xl bg-white/80 backdrop-blur-sm shadow-slate-200/30 group hover:bg-gradient-to-br hover:from-slate-50 hover:to-gray-50">
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
                    src="engine2.jpg"
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
                    src="transmission.jpg"
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
                    src="engine.jpg"
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
                    src="tuning.jpg"
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
              car="Mercedes S 350 W222"
              text="Регулярно прохожу ТО в Garage Plus. Всегда довольна результатом и отношением персонала."
              rating={5}
            />
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
