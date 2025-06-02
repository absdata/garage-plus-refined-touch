
import React from 'react';
import { ServiceLayout } from '@/components/layout/ServiceLayout';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from 'lucide-react';
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
    <ServiceLayout>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-slate-100 via-gray-100 to-slate-100">
        <div className="container mx-auto px-4">
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
    </ServiceLayout>
  );
};

export default Maintenance;
