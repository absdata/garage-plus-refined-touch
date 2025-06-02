
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-slate-900 via-gray-900 to-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/logo.png" 
                alt="GARAGE PLUS" 
                className="h-10 w-auto"
              />
            </div>
            <p className="text-slate-200">
              Профессиональный ремонт и обслуживание Mercedes-Benz с 1999 года
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4 text-slate-300">Услуги</h3>
            <ul className="space-y-2 text-slate-200">
              <li><Link to="/services/maintenance" className="hover:text-slate-100 transition-colors">Техническое обслуживание</Link></li>
              <li><Link to="/services/transmission" className="hover:text-slate-100 transition-colors">Обслуживание АКПП</Link></li>
              <li><Link to="/services/engine" className="hover:text-slate-100 transition-colors">Ремонт двигателя</Link></li>
              <li><Link to="/services/tuning" className="hover:text-slate-100 transition-colors">Тюнинг</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4 text-slate-300">Информация</h3>
            <ul className="space-y-2 text-slate-200">
              <li><Link to="/about" className="hover:text-slate-100 transition-colors">О нас</Link></li>
              <li><a href="/#reviews" className="hover:text-slate-100 transition-colors">Отзывы</a></li>
              <li><a href="/#contact" className="hover:text-slate-100 transition-colors">Контакты</a></li>
              <li><a href="/#promotions" className="hover:text-slate-100 transition-colors">Акции</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4 text-slate-300">Контакты</h3>
            <div className="space-y-2 text-slate-200">
              <p>г. Москва, ул. Поклонная, 11 стр. 1А</p>
              <p>+7 (495) 221-8480</p>
              <p>ПН-ПТ: 11:30-20:30<br />СБ: 12:00-17:00<br />ВС: выходной</p>
              <Button 
                variant="outline"
                size="sm"
                className="mt-2 border-white text-slate-900"
                onClick={() => window.open('https://yandex.ru/maps/?text=' + encodeURIComponent('г. Москва, ул. Поклонная, 11 стр. 1А'), '_blank')}
              >
                Проложить маршрут
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-300">
          <p>&copy; 2024 GARAGE PLUS. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};
