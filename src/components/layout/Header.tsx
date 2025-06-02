
import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-slate-100/95 via-gray-100/95 to-slate-100/95 backdrop-blur-sm border-b border-slate-200 shadow-lg">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <img 
            src="/logo.png" 
            alt="GARAGE PLUS" 
            className="h-12 w-auto"
          />
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex space-x-6">
            <a href="/#services" className="text-slate-700 hover:text-slate-900 transition-all duration-300 hover:scale-105">Услуги</a>
            <a href="/#promotions" className="text-slate-700 hover:text-slate-900 transition-all duration-300 hover:scale-105">Акции</a>
            <a href="/#reviews" className="text-slate-700 hover:text-slate-900 transition-all duration-300 hover:scale-105">Отзывы</a>
            <a href="/#contact" className="text-slate-700 hover:text-slate-900 transition-all duration-300 hover:scale-105">Контакты</a>
            <Link to="/about" className="text-slate-700 hover:text-slate-900 transition-all duration-300 hover:scale-105">О нас</Link>
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <img 
            src="/logo_m.png" 
            alt="Mercedes Benz - независимый специалист"
            title="Mercedes Benz - независимый специалист"
            className="h-12 w-auto"
          />
        </div>
      </div>
    </header>
  );
};
