
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Maintenance = () => {
  const services = [
    {
      id: 'maintenance-a-service',
      title: 'ТО A (базовое)',
      description: 'Замена масла двигателя, проверка основных систем',
      price: 'от 8 500 ₽',
      image: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 'maintenance-b-service',
      title: 'ТО B (расширенное)',
      description: 'Полное техническое обслуживание с заменой фильтров',
      price: 'от 15 000 ₽',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 'brake-service',
      title: 'Обслуживание тормозной системы',
      description: 'Замена колодок, дисков, проверка системы',
      price: 'от 12 000 ₽',
      image: 'https://images.unsplash.com/photo-1486496572940-2bb2341fdbdf?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 'suspension-service',
      title: 'Ремонт подвески',
      description: 'Замена амортизаторов, пружин, втулок',
      price: 'от 20 000 ₽',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    }
  ];

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
              <Link to="/#services" className="text-slate-700 hover:text-slate-900 transition-all duration-300 hover:scale-105 font-semibold">Услуги</Link>
              <Link to="/#promotions" className="text-slate-700 hover:text-slate-900 transition-all duration-300 hover:scale-105">Акции</Link>
              <Link to="/#reviews" className="text-slate-700 hover:text-slate-900 transition-all duration-300 hover:scale-105">Отзывы</Link>
              <Link to="/#contact" className="text-slate-700 hover:text-slate-900 transition-all duration-300 hover:scale-105">Контакты</Link>
              <Link to="/about" className="text-slate-700 hover:text-slate-900 transition-all duration-300 hover:scale-105">О нас</Link>
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

      {/* Breadcrumbs */}
      <section className="pt-24 pb-8 px-4">
        <div className="container mx-auto">
          <div className="flex items-center space-x-2 text-slate-600">
            <Link to="/" className="hover:text-slate-900 transition-colors">Главная</Link>
            <span>/</span>
            <Link to="/#services" className="hover:text-slate-900 transition-colors">Услуги</Link>
            <span>/</span>
            <span className="text-slate-900 font-medium">ТО и Ремонт</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="pb-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-800 via-gray-800 to-slate-700 bg-clip-text text-transparent">
              Техническое обслуживание и ремонт
            </h1>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
              Профессиональное обслуживание Mercedes-Benz W222 по стандартам завода-изготовителя. 
              Используем только оригинальные запчасти и расходные материалы.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <Link 
                key={service.id}
                to={`/services/maintenance/${service.id}`}
                className="group"
              >
                <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 rounded-2xl overflow-hidden bg-white/90 backdrop-blur-sm group shadow-slate-200/30 hover:shadow-slate-300/50">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-xl text-slate-800 group-hover:text-slate-900 transition-colors duration-300">{service.title}</CardTitle>
                      <div className="text-lg font-bold text-gray-700">{service.price}</div>
                    </div>
                    <CardDescription className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <Button 
                      className="w-full bg-gradient-to-r from-slate-600 to-gray-600 hover:from-slate-700 hover:to-gray-700 text-white rounded-xl py-3 transition-all duration-300 shadow-lg shadow-slate-300/50 hover:shadow-xl hover:shadow-slate-400/60"
                    >
                      Подробнее
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Back to Home */}
      <section className="pb-20 px-4">
        <div className="container mx-auto text-center">
          <Link to="/">
            <Button 
              variant="outline"
              size="lg"
              className="text-slate-700 border-slate-300 hover:bg-slate-50"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Вернуться на главную
            </Button>
          </Link>
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

export default Maintenance;
