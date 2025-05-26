
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  image: string;
}

export const ServiceCard = ({ title, description, price, image }: ServiceCardProps) => {
  return (
    <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 rounded-2xl overflow-hidden bg-white/90 backdrop-blur-sm group shadow-orange-200/30 hover:shadow-orange-300/50">
      <div className="aspect-[4/3] overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      
      <CardHeader className="pb-4">
        <div className="flex justify-between items-start mb-2">
          <CardTitle className="text-xl text-orange-800 group-hover:text-orange-900 transition-colors duration-300">{title}</CardTitle>
          <div className="text-lg font-bold text-amber-700">{price}</div>
        </div>
        <CardDescription className="text-orange-600 leading-relaxed group-hover:text-orange-700 transition-colors duration-300">
          {description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="pt-0">
        <Button 
          className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white rounded-xl py-3 transition-all duration-300 shadow-lg shadow-orange-300/50 hover:shadow-xl hover:shadow-orange-400/60"
        >
          Подробнее
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
};
