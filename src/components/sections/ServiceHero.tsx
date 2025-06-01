
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

interface ServiceHeroProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  price?: string;
}

export const ServiceHero = ({ title, subtitle, description, image, price }: ServiceHeroProps) => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-slate-100 via-gray-100 to-slate-100">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight bg-gradient-to-r from-slate-800 via-gray-800 to-slate-700 bg-clip-text text-transparent">
                {title}
              </h1>
              <p className="text-xl text-slate-700 font-medium">
                {subtitle}
              </p>
              <p className="text-lg text-slate-600">
                {description}
              </p>
              {price && (
                <div className="bg-white p-4 rounded-xl shadow-lg inline-block">
                  <p className="text-2xl font-bold text-slate-800">{price}</p>
                  <p className="text-sm text-slate-600">Стоимость услуги</p>
                </div>
              )}
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
            <div className="aspect-[4/3] bg-gradient-to-br from-slate-200 via-gray-200 to-slate-200 rounded-3xl overflow-hidden shadow-2xl shadow-slate-300/30">
              <img 
                src={image}
                alt={title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
