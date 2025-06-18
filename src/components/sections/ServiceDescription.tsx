
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

export interface ServiceDescriptionProps {
  description: string;
}

export const ServiceDescription = ({ description }: ServiceDescriptionProps) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-black">Подробное описание</h2>
        <Card className="max-w-4xl mx-auto border-0 shadow-lg bg-white/90 backdrop-blur-sm rounded-2xl">
          <CardContent className="p-8">
            <p className="text-lg text-black leading-relaxed">
              {description}
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
