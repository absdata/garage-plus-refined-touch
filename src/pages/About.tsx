
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, MapPin, Phone, Clock, Award, Shield, Wrench, Users, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const achievements = [
    {
      title: '25+ лет опыта',
      description: 'Работаем с Mercedes-Benz с 1999 года',
      icon: Award
    },
    {
      title: '1000+ автомобилей',
      description: 'Обслужено за последние 5 лет',
      icon: CheckCircle
    },
    {
      title: '100% оригинальные запчасти',
      description: 'Прямые поставки из ОАЭ',
      icon: Shield
    },
    {
      title: 'Сертифицированные мастера',
      description: 'Обучение в «Мерседес-Бенц РУС»',
      icon: Users
    }
  ];

  const services = [
    'Техническое обслуживание',
    'Ремонт и обслуживание АКПП',
    'Ремонт двигателя',
    'Диагностика',
    'Тюнинг',
    'Кузовной ремонт'
  ];

  const scrollToContact = () => {
    window.location.href = '/#contact';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 text-gray-900">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-slate-100/95 via-gray-100/95 to-slate-100/95 backdrop-blur-sm border-b border-slate-200 shadow-lg">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/ec5cb8ce-9a6e-4657-ae6d-ddcd09487589.png" 
              alt="GARAGE PLUS" 
              className="h-12 w-auto"
            />
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-6">
              <Link to="/#services" className="text-slate-700 hover:text-slate-900 transition-all duration-300 hover:scale-105">Услуги</Link>
              <Link to="/#promotions" className="text-slate-700 hover:text-slate-900 transition-all duration-300 hover:scale-105">Акции</Link>
              <Link to="/#reviews" className="text-slate-700 hover:text-slate-900 transition-all duration-300 hover:scale-105">Отзывы</Link>
              <Link to="/#contact" className="text-slate-700 hover:text-slate-900 transition-all duration-300 hover:scale-105">Контакты</Link>
              <Link to="/about" className="text-slate-700 hover:text-slate-900 transition-all duration-300 hover:scale-105 font-semibold">О нас</Link>
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
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-800 via-gray-800 to-slate-700 bg-clip-text text-transparent">
              О компании Garage Plus
            </h1>
            <p className="text-xl text-slate-700 mb-8 leading-relaxed">
              Мы — команда профессионалов с 25-летним опытом работы с автомобилями Mercedes-Benz. 
              Наша миссия — обеспечить высочайший уровень сервиса, используя только оригинальные запчасти 
              и заводские технологии.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-slate-50 to-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-gray-800 bg-clip-text text-transparent">
                Наша история
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Garage Plus был основан в 1999 году группой энтузиастов, влюбленных в автомобили Mercedes-Benz. 
                  За четверть века мы прошли путь от небольшой мастерской до признанного специализированного центра.
                </p>
                <p>
                  Наши мастера регулярно проходят обучение в «Мерседес-Бенц РУС», изучают новые технологии 
                  и следят за всеми обновлениями от производителя. Это позволяет нам оставаться на передовой 
                  автомобильного сервиса.
                </p>
                <p>
                  Мы гордимся тем, что многие наши клиенты доверяют нам свои автомобили уже много лет, 
                  а некоторые приводят к нам уже второй и третий Mercedes.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-slate-200 via-gray-200 to-slate-200 rounded-3xl overflow-hidden shadow-2xl shadow-slate-300/30">
                <img 
                  src="mercedes-benz-s-class-w222-3705.jpg"
                  alt="Mercedes-Benz в нашем сервисе"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-gray-50 to-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-slate-800 to-gray-800 bg-clip-text text-transparent">
              Наши достижения
            </h2>
            <p className="text-xl text-slate-700">
              Цифры, которые говорят о нашем профессионализме
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 rounded-2xl bg-white/80 backdrop-blur-sm shadow-slate-200/30 group text-center">
                <CardHeader className="pb-4">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-slate-100 to-gray-100">
                      <achievement.icon className="h-8 w-8 text-slate-500" />
                    </div>
                  </div>
                  <CardTitle className="text-xl text-slate-800 group-hover:text-slate-900 transition-colors duration-300">
                    {achievement.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                    {achievement.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-slate-50 to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-slate-800 to-gray-800 bg-clip-text text-transparent">
              Что мы делаем
            </h2>
            <p className="text-xl text-slate-700">
              Полный спектр услуг для вашего Mercedes-Benz
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span className="text-slate-700 font-medium">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-gray-50 to-slate-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-gray-800 bg-clip-text text-transparent">
            Доверьте свой Mercedes профессионалам
          </h2>
          <p className="text-xl text-slate-700 mb-8 max-w-2xl mx-auto">
            Запишитесь на диагностику или консультацию. Мы расскажем о состоянии вашего автомобиля 
            и предложим оптимальное решение.
          </p>
          <Button 
            size="lg"
            onClick={scrollToContact}
            className="bg-gradient-to-r from-slate-600 to-gray-600 hover:from-slate-700 hover:to-gray-700 text-white px-8 py-6 text-lg font-medium rounded-2xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 shadow-lg shadow-slate-300/50"
          >
            Записаться на сервис
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-slate-900 via-gray-900 to-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img 
                  src="/lovable-uploads/ec5cb8ce-9a6e-4657-ae6d-ddcd09487589.png" 
                  alt="GARAGE PLUS" 
                  className="h-10 w-auto brightness-0 invert"
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
                <li><Link to="/about" className="hover:text-slate-100 transition-colors">О нас</Link></li>
                <li><Link to="/#reviews" className="hover:text-slate-100 transition-colors">Отзывы</Link></li>
                <li><Link to="/#contact" className="hover:text-slate-100 transition-colors">Контакты</Link></li>
                <li><Link to="/#promotions" className="hover:text-slate-100 transition-colors">Акции</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4 text-slate-300">Контакты</h3>
              <div className="space-y-2 text-slate-200">
                <p>г. Москва, ул. Поклонная, 11 стр. 1А</p>
                <p>+7 (495) 221-8480</p>
                <p>ПН-ПТ: 11:30-20:30, СБ: 12:00-17:00, ВС: выходной</p>
                <Button 
                  variant="outline"
                  size="sm"
                  className="mt-2 text-white border-white hover:bg-white hover:text-slate-900"
                  onClick={() => window.open('https://yandex.ru/maps/?text=' + encodeURIComponent('г. Москва, ул. Поклонная, 11 стр. 1А'), '_blank')}
                >
                  Проложить маршрут
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

export default About;
