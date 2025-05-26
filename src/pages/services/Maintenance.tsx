
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Maintenance = () => {
  const categories = [
    {
      id: 'technical-maintenance',
      title: 'Техническое обслуживание (ТО)',
      description: 'Регламентное ТО A и ТО B, замена масла и фильтров',
      image: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      services: ['Регламентное ТО A или ТО B', 'Замена масла и фильтров', 'Диагностика, сброс ошибок', 'Проверка подвески и тормозов']
    },
    {
      id: 'radiator-cleaning',
      title: 'Мойка радиаторов',
      description: 'Очистка системы охлаждения и кондиционирования',
      image: 'https://images.unsplash.com/photo-1486496572940-2bb2341fdbdf?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      services: ['Кондиционер, охлаждение, интеркулер', 'Разбор передней части, замена антифриза']
    },
    {
      id: 'suspension-repair',
      title: 'Ремонт ходовой части',
      description: 'Комплексный ремонт подвески и тормозной системы',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      services: ['Гидравлика', 'Тормозные диски', 'Тормозные колодки', 'Рычаги и сайлентблоки', 'Шаровые опоры', 'Втулки и стойки стабилизатора']
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">ТО и Ремонт</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Полный спектр услуг по техническому обслуживанию и ремонту Mercedes-Benz W222
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
                      {category.services.slice(0, 3).map((service, index) => (
                        <li key={index}>• {service}</li>
                      ))}
                      {category.services.length > 3 && (
                        <li className="text-blue-600">и ещё {category.services.length - 3} услуг...</li>
                      )}
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

export default Maintenance;
