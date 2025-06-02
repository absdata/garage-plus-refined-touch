
import React from 'react';

export interface ServiceHeroProps {
  title: string;
  subtitle: string;
  description: string;
  price: string;
  duration?: string;
  image: string;
}

export const ServiceHero = ({ title, subtitle, description, price, duration, image }: ServiceHeroProps) => {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-100 via-gray-100 to-slate-100">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-800 to-gray-800 bg-clip-text text-transparent">
              {title}
            </h1>
            <h2 className="text-xl text-slate-600 mb-6">{subtitle}</h2>
            <p className="text-lg text-slate-700 mb-8 leading-relaxed">
              {description}
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-xl shadow-lg border border-slate-200">
                <span className="text-sm text-slate-600">Стоимость</span>
                <div className="text-2xl font-bold text-slate-800">{price}</div>
              </div>
              {duration && (
                <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-xl shadow-lg border border-slate-200">
                  <span className="text-sm text-slate-600">Время</span>
                  <div className="text-2xl font-bold text-slate-800">{duration}</div>
                </div>
              )}
            </div>
          </div>
          <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
