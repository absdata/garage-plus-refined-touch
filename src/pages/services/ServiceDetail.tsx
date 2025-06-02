
import React from 'react';
import { useParams } from 'react-router-dom';
import { ServiceLayout } from '@/components/layout/ServiceLayout';

const ServiceDetail = () => {
  const { category, service } = useParams();

  return (
    <ServiceLayout>
      <section className="py-16 bg-gradient-to-br from-slate-100 via-gray-100 to-slate-100">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-800 to-gray-800 bg-clip-text text-transparent">
              Детали услуги
            </h1>
            <p className="text-xl text-slate-700 max-w-2xl mx-auto">
              Категория: {category} | Услуга: {service}
            </p>
          </div>
        </div>
      </section>
    </ServiceLayout>
  );
};

export default ServiceDetail;
