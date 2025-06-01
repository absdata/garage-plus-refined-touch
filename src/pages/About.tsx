
import React from 'react';
import { ServiceLayout } from '@/components/layout/ServiceLayout';
import { ContactSection } from '@/components/sections/ContactSection';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Users, Shield, Wrench, Clock, MapPin } from 'lucide-react';

const About = () => {
  return (
    <ServiceLayout>
      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-slate-100 via-gray-100 to-slate-100">
        <div className="container mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight bg-gradient-to-r from-slate-800 via-gray-800 to-slate-700 bg-clip-text text-transparent mb-6">
              О компании Garage Plus
            </h1>
            <p className="text-xl text-slate-700 mb-8">
              Профессиональный ремонт и обслуживание Mercedes-Benz с 1999 года
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Более 25 лет мы специализируемся исключительно на автомобилях Mercedes-Benz. 
              Наш опыт, профессионализм и использование только оригинальных запчастей 
              гарантируют качество обслуживания на уровне официального дилера.
            </p>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-slate-50 to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши преимущества</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg rounded-2xl bg-white group">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-slate-100 to-gray-100">
                    <Award className="h-6 w-6 text-slate-500" />
                  </div>
                  <CardTitle className="text-xl">25 лет опыта</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600 leading-relaxed">
                  С 1999 года мы обслуживаем автомобили Mercedes-Benz. За это время мы накопили 
                  уникальный опыт и глубокие знания особенностей каждой модели.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg rounded-2xl bg-white group">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-slate-100 to-gray-100">
                    <Users className="h-6 w-6 text-slate-500" />
                  </div>
                  <CardTitle className="text-xl">Сертифицированные мастера</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600 leading-relaxed">
                  Наши специалисты прошли обучение в «Мерседес-Бенц РУС» и имеют многолетний 
                  опыт работы в официальных дилерских центрах.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg rounded-2xl bg-white group">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-slate-100 to-gray-100">
                    <Shield className="h-6 w-6 text-slate-500" />
                  </div>
                  <CardTitle className="text-xl">Оригинальные запчасти</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600 leading-relaxed">
                  Прямые поставки со складов в ОАЭ обеспечивают наличие оригинальных запчастей 
                  Mercedes-Benz по выгодным ценам.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg rounded-2xl bg-white group">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-slate-100 to-gray-100">
                    <Wrench className="h-6 w-6 text-slate-500" />
                  </div>
                  <CardTitle className="text-xl">Заводские технологии</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600 leading-relaxed">
                  Все работы выполняются строго по технологиям и регламентам 
                  завода-изготовителя Mercedes-Benz.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-gray-50 to-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Полный спектр обслуживания и ремонта Mercedes-Benz W222
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Техническое обслуживание</h3>
              <p className="text-gray-600 text-sm">ТО-А, ТО-Б, диагностика, ремонт ходовой</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Обслуживание АКПП</h3>
              <p className="text-gray-600 text-sm">7G-Tronic, замена масла, ремонт гидроблока</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Ремонт двигателя</h3>
              <p className="text-gray-600 text-sm">Капремонт, замена цепи ГРМ, очистка</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Тюнинг</h3>
              <p className="text-gray-600 text-sm">AMG-пакет, перешив салона, диски</p>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
    </ServiceLayout>
  );
};

export default About;
