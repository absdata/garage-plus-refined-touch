
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Engine = () => {
  const categories = [
    {
      id: 'major-overhaul',
      title: 'Капитальный ремонт',
      description: 'Полный капитальный ремонт двигателя Mercedes-Benz',
      image: 'https://images.unsplash.com/photo-1486496572940-2bb2341fdbdf?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      services: ['Капитальный ремонт', 'Диагностика компрессии']
    },
    {
      id: 'timing-chain',
      title: 'Замена цепи ГРМ',
      description: 'Замена цепи газораспределительного механизма',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      services: ['Замена цепи ГРМ', 'Сальники, прокладки']
    },
    {
      id: 'cleaning',
      title: 'Очистка и промывка',
      description: 'Промывка двигателя и очистка впускного тракта',
      image: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      services: ['Промывка, чистка впуска', 'Устранение течей']
    },
    {
      id: 'eco-delete',
      title: 'Экологические доработки',
      description: 'Удаление экологических систем (по запросу)',
      image: 'https://images.unsplash.com/photo-1473091534298-04dcbce3278c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      services: ['Удаление сажевого фильтра и EGR (по запросу)']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <ArrowLeft className="h-5 w-5" />
            <span>Назад</span>
          </Link>
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-gray-900">GARAGE</div>
            <div className="text-2xl font-bold text-gray-600">PLUS</div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Обслуживание и ремонт ДВС</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Профессиональный ремонт и диагностика двигателей Mercedes-Benz
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category) => (
              <Link key={category.id} to={`/services/engine/${category.id}`}>
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 rounded-2xl bg-white group cursor-pointer">
                  <div className="aspect-[4/3] overflow-hidden rounded-t-2xl">
                    <img 
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                    <p className="text-gray-600">{category.description}</p>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <ul className="space-y-2 text-sm text-gray-600 mb-4">
                      {category.services.map((service, index) => (
                        <li key={index}>• {service}</li>
                      ))}
                    </ul>
                    <Button 
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-3 transition-all duration-300"
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

export default Engine;
