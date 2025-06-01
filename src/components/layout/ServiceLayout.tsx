
import React, { ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

interface ServiceLayoutProps {
  children: ReactNode;
}

export const ServiceLayout = ({ children }: ServiceLayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 text-gray-900">
      <Header />
      <main className="pt-24">
        {children}
      </main>
      <Footer />
    </div>
  );
};
