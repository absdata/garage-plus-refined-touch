
import React from 'react';
import { ServiceLayout } from '@/components/layout/ServiceLayout';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from 'lucide-react';
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
    <ServiceLayout>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-slate-100 via-gray-100 to-slate-100">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-800 to-gray-800 bg-clip-text text-transparent">Обслуживание и ремонт ДВС</h1>
            <p className="text-xl text-slate-700 max-w-2xl mx-auto">
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
                <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 rounded-2xl bg-white/90 backdrop-blur-sm group cursor-pointer shadow-slate-200/30 hover:shadow-slate-300/50">
                  <div className="aspect-[4/3] overflow-hidden rounded-t-2xl">
                    <img 
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl text-slate-800 group-hover:text-slate-900 transition-colors duration-300">{category.title}</CardTitle>
                    <p className="text-slate-600 group-hover:text-slate-700 transition-colors duration-300">{category.description}</p>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <ul className="space-y-2 text-sm text-slate-600 mb-4">
                      {category.services.map((service, index) => (
                        <li key={index} className="group-hover:text-slate-700 transition-colors duration-300">• {service}</li>
                      ))}
                    </ul>
                    <Button 
                      className="w-full bg-gradient-to-r from-slate-600 to-gray-600 hover:from-slate-700 hover:to-gray-700 text-white rounded-xl py-3 transition-all duration-300 shadow-lg shadow-slate-300/50 hover:shadow-xl hover:shadow-slate-400/60"
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
    </ServiceLayout>
  );
};

export default Engine;
