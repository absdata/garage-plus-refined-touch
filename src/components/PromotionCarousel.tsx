
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { theme } from '@/config/theme';

export const PromotionCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const promotions = [
    {
      title: 'Замена передних тормозных колодок "под ключ"',
      description: 'Для Mercedes-Benz W222 с мотором: OM276, OM278, OM176. Включает оригинальные колодки Mercedes-Benz, датчик колодок, работу и автохимию.',
      price: '27 800 ₽',
      originalPrice: '33 800 ₽',
      deadline: 'Ограниченное предложение',
      badge: 'Новинка',
      image: '/promotions/brakes.jpg'
    },
    {
      title: 'ТО + Диагностика ходовой БЕСПЛАТНО',
      description: 'Пройдите техническое обслуживание и получите профессиональную диагностику ходовой части автомобиля в подарок',
      price: 'от 8 500 ₽',
      originalPrice: '11 000 ₽',
      deadline: 'Ограниченное время',
      badge: 'Подарок',
      image: '/promotions/to.jpg'
    },
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
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % promotions.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + promotions.length) % promotions.length);
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-2xl font-bold" style={{ color: theme.colors.text.primary }}>Актуальные предложения</h3>
        
        <div className="flex space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={prevSlide}
            className="rounded-full w-10 h-10 p-0"
            style={{ 
              borderColor: theme.colors.text.muted,
              color: theme.colors.text.primary
            }}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={nextSlide}
            className="rounded-full w-10 h-10 p-0"
            style={{ 
              borderColor: theme.colors.text.muted,
              color: theme.colors.text.primary
            }}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {promotions.slice(currentSlide, currentSlide + 3).map((promo, index) => (
          <Card 
            key={index} 
            className="border-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 rounded-2xl relative overflow-hidden"
            style={{ 
              backgroundColor: theme.colors.surface,
              boxShadow: theme.colors.shadows.card
            }}
          >
            <div className="absolute top-4 right-4 z-10">
              <Badge 
                variant="secondary" 
                className="text-white"
                style={{ backgroundColor: theme.colors.text.primary }}
              >
                {promo.badge}
              </Badge>
            </div>
            
            {promo.image && (
              <div className="aspect-[16/9] overflow-hidden">
                <img 
                  src={promo.image}
                  alt={promo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            )}
            
            <CardHeader className="pb-4">
              <CardTitle className="text-xl pr-16" style={{ color: theme.colors.text.primary }}>{promo.title}</CardTitle>
              <CardDescription className="leading-relaxed" style={{ color: theme.colors.text.secondary }}>
                {promo.description}
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="text-2xl font-bold" style={{ color: theme.colors.text.primary }}>{promo.price}</div>
                {promo.originalPrice && (
                  <div className="text-lg line-through" style={{ color: theme.colors.text.muted }}>{promo.originalPrice}</div>
                )}
              </div>
              
              <div className="text-sm" style={{ color: theme.colors.text.muted }}>{promo.deadline}</div>
              
              <Button 
                onClick={scrollToContact}
                className="w-full text-white py-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:opacity-90"
                style={{ backgroundColor: theme.colors.button.primary }}
              >
                Записаться
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
