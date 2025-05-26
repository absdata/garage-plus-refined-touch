
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  car: string;
  text: string;
  rating: number;
}

export const TestimonialCard = ({ name, car, text, rating }: TestimonialCardProps) => {
  return (
    <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 rounded-2xl bg-white">
      <CardContent className="p-6">
        <div className="flex mb-4">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
          ))}
        </div>
        
        <p className="text-gray-600 mb-6 leading-relaxed">"{text}"</p>
        
        <div>
          <div className="font-semibold text-gray-900">{name}</div>
          <div className="text-sm text-gray-500">{car}</div>
        </div>
      </CardContent>
    </Card>
  );
};
