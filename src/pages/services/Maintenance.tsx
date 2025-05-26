
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Maintenance = () => {
  const categories = [
    {
      id: 'regular-maintenance',
      title: 'Регламентное ТО A или ТО B',
      description: 'Полное техническое обслуживание по регламенту Mercedes-Benz',
      image: 'https://images.unsplash.com/photo-1486496572940-2bb2341fdbdf?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      services: ['Замена масла и фильтров', 'Диагностика, сброс ошибок', 'Проверка подвески и тормозов']
    },
    {
      id: 'radiator-cleaning',
      title: 'Мойка радиаторов',
      description: 'Кондиционер, охлаждение, интеркулер',
      image: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      services: ['Разбор передней части', 'Замена антифриза']
    },
    {
      id: 'hydraulics',
      title: 'Гидравлика',
      description: 'Пневмоподвеска AIRMATIC, насос ГУР, амортизаторы',
      image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      services: ['Пневмоподвеска AIRMATIC', 'Насос ГУР, амортизаторы']
    },
    {
      id: 'brake-discs',
      title: 'Тормозные диски',
      description: 'Замена, проточка, диагностика',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      services: ['Замена, проточка', 'Диагностика']
    },
    {
      id: 'brake-pads',
      title: 'Тормозные колодки',
      description: 'Передние/задние, датчики, тормозная жидкость',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      services: ['Передние/задние', 'Датчики, тормозная жидкость']
    },
    {
      id: 'control-arms',
      title: 'Рычаги и сайлентблоки',
      description: 'Замена, развал-схождение',
      image: 'https://images.unsplash.com/photo-1473091534298-04dcbce3278c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      services: ['Замена', 'Развал-схождение']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-slate-100/95 via-gray-100/95 to-slate-100/95 backdrop-blur-sm border-b border-slate-200 py-4 shadow-lg">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 text-slate-700 hover:text-slate-900 transition-colors">
            <ArrowLeft className="h-5 w-5" />
            <span>Назад</span>
          </Link>
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold bg-gradient-to-r from-slate-600 to-gray-600 bg-clip-text text-transparent">GARAGE</div>
            <div className="text-2xl font-bold text-slate-400">PLUS</div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-slate-100 via-gray-100 to-slate-100">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-800 to-gray-800 bg-clip-text text-transparent">ТО и Ремонт</h1>
            <p className="text-xl text-slate-700 max-w-2xl mx-auto">
              Техническое обслуживание и ремонт автомобилей Mercedes-Benz S-Class
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Link key={category.id} to={`/services/maintenance/${category.id}`}>
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
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl py-3 transition-all duration-300 shadow-lg shadow-blue-300/50 hover:shadow-xl hover:shadow-blue-400/60"
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

export default Maintenance;
