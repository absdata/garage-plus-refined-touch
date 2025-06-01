
import React from 'react';
import { ContactForm } from "@/components/ContactForm";
import { MapPin, Phone, Clock } from 'lucide-react';
import { Button } from "@/components/ui/button";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-50 via-gray-50 to-slate-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Записаться на сервис</h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-gray-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Адрес</h3>
                  <p className="text-gray-600">г. Москва, ул. Поклонная, 11 стр. 1А</p>
                  <Button 
                    variant="outline"
                    className="mt-2 text-slate-700 border-slate-300 hover:bg-slate-50"
                    onClick={() => window.open('https://yandex.ru/maps/?text=' + encodeURIComponent('г. Москва, ул. Поклонная, 11 стр. 1А'), '_blank')}
                  >
                    Проложить маршрут
                  </Button>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-gray-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Телефон</h3>
                  <p className="text-gray-600">+7 (495) 221-8480</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Clock className="h-6 w-6 text-gray-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Режим работы</h3>
                  <p className="text-gray-600">ПН-ПТ: 11:30-20:30<br />СБ: 12:00-17:00<br />ВС: выходной</p>
                </div>
              </div>
            </div>
          </div>
          
          <ContactForm />
        </div>
      </div>
    </section>
  );
};
