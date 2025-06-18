
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { theme } from '@/config/theme';

export const PromotionCarousel = () => {

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
      price: 'от 25 500 ₽',
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
    }
  ];


  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative">
      <div className="mb-8">
        <h3 className="text-2xl font-bold" style={{ color: theme.colors.text.primary }}>Актуальные предложения</h3>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {promotions.map((promo, index) => (
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
