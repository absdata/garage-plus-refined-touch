
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const PromotionCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const promotions = [
    {
      title: 'Чистка радиаторов',
      description: 'Чистка радиатора кондиционера, охлаждения и интеркулера',
      price: '3 990 ₽',
      originalPrice: '5 500 ₽',
      deadline: 'Только до 1 августа',
      badge: 'Хит'
    },
    {
      title: 'Скидка 20% на тормозные диски',
      description: 'При замене комплекта — скидка на работу',
      price: 'от 8 000 ₽',
      originalPrice: 'от 10 000 ₽',
      deadline: 'До конца месяца',
      badge: 'Скидка'
    },
    {
      title: 'Бесплатная диагностика при ТО',
      description: 'Полная компьютерная диагностика в подарок',
      price: '0 ₽',
      originalPrice: '2 500 ₽',
      deadline: 'Постоянная акция',
      badge: 'Подарок'
    },
    {
      title: 'Замена масла АКПП',
      description: 'Полная замена масла с промывкой системы',
      price: '5 900 ₽',
      originalPrice: '7 500 ₽',
      deadline: 'Ограниченное предложение',
      badge: 'Выгодно'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % promotions.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + promotions.length) % promotions.length);
  };

  return (
    <div className="relative">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-2xl font-bold">Актуальные предложения</h3>
        
        <div className="flex space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={prevSlide}
            className="rounded-full w-10 h-10 p-0"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={nextSlide}
            className="rounded-full w-10 h-10 p-0"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {promotions.slice(currentSlide, currentSlide + 3).map((promo, index) => (
          <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 rounded-2xl bg-white relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <Badge variant="secondary" className="bg-gray-900 text-white">
                {promo.badge}
              </Badge>
            </div>
            
            <CardHeader className="pb-4">
              <CardTitle className="text-xl pr-16">{promo.title}</CardTitle>
              <CardDescription className="text-gray-600 leading-relaxed">
                {promo.description}
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="text-2xl font-bold text-gray-900">{promo.price}</div>
                {promo.originalPrice && (
                  <div className="text-lg text-gray-400 line-through">{promo.originalPrice}</div>
                )}
              </div>
              
              <div className="text-sm text-gray-500">{promo.deadline}</div>
              
              <Button 
                className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 rounded-xl transition-all duration-300 hover:shadow-lg"
              >
                Записаться
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex justify-center mt-8 space-x-2">
        {promotions.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-gray-900' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};
