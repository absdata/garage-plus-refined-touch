
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Transmission = () => {
  const categories = [
    {
      id: 'oil-change',
      title: 'Замена масла АКПП',
      description: 'Частичная и полная замена трансмиссионного масла',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      services: ['Замена масла (частичная/полная)', 'Фильтр, поддон']
    },
    {
      id: 'hydraulic-block',
      title: 'Ремонт гидроблока',
      description: 'Диагностика и ремонт гидравлического блока управления',
      image: 'https://images.unsplash.com/photo-1486496572940-2bb2341fdbdf?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      services: ['Ремонт гидроблока', 'Диагностика, адаптация']
    },
    {
      id: '7g-tronic',
      title: 'Проблемы 7G-Tronic',
      description: 'Специализированный ремонт коробки передач 7G-Tronic',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      services: ['Проблемы 7G-Tronic', 'Адаптация и настройка']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-orange-100/95 via-amber-100/95 to-yellow-100/95 backdrop-blur-sm border-b border-orange-200 py-4 shadow-lg">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 text-orange-700 hover:text-orange-900 transition-colors">
            <ArrowLeft className="h-5 w-5" />
            <span>Назад</span>
          </Link>
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">GARAGE</div>
            <div className="text-2xl font-bold text-orange-400">PLUS</div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-orange-100 via-amber-100 to-yellow-100">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-800 to-amber-800 bg-clip-text text-transparent">Обслуживание и ремонт АКПП</h1>
            <p className="text-xl text-orange-700 max-w-2xl mx-auto">
              Профессиональное обслуживание автоматических коробок передач Mercedes-Benz
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Link key={category.id} to={`/services/transmission/${category.id}`}>
                <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 rounded-2xl bg-white/90 backdrop-blur-sm group cursor-pointer shadow-orange-200/30 hover:shadow-orange-300/50">
                  <div className="aspect-[4/3] overflow-hidden rounded-t-2xl">
                    <img 
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl text-orange-800 group-hover:text-orange-900 transition-colors duration-300">{category.title}</CardTitle>
                    <p className="text-orange-600 group-hover:text-orange-700 transition-colors duration-300">{category.description}</p>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <ul className="space-y-2 text-sm text-orange-600 mb-4">
                      {category.services.map((service, index) => (
                        <li key={index} className="group-hover:text-orange-700 transition-colors duration-300">• {service}</li>
                      ))}
                    </ul>
                    <Button 
                      className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white rounded-xl py-3 transition-all duration-300 shadow-lg shadow-orange-300/50 hover:shadow-xl hover:shadow-orange-400/60"
                    >
                      Смотреть услуги
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Transmission;
