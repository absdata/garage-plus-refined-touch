
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, MapPin, Clock } from 'lucide-react';
import { ContactForm } from '@/components/ContactForm';

export const ContactSection = () => {
  return (
    <section id="contact" className="py-16 bg-gradient-to-br from-[#e6dfd6] via-[#ddd6cd] to-[#e6dfd6]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-black">Свяжитесь с нами</h2>
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Combined Contact Information */}
          <div>
            <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm rounded-2xl">
              <CardHeader className="text-center">
                <CardTitle className="text-black">Контактная информация</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Phone */}
                <div className="flex items-center space-x-4 p-4 bg-[#f0ebe5] rounded-xl">
                  <Phone className="h-8 w-8 text-slate-600" />
                  <div className="flex-1">
                    <h3 className="font-semibold text-black">Телефон</h3>
                    <p className="text-black">+7 (495) 221-8480</p>
                    <Button 
                      size="sm"
                      className="mt-2 bg-blue-400 hover:bg-blue-500 text-white"
                      onClick={() => window.open('tel:+74952218480')}
                    >
                      Позвонить
                    </Button>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-center space-x-4 p-4 bg-[#f0ebe5] rounded-xl">
                  <MapPin className="h-8 w-8 text-slate-600" />
                  <div className="flex-1">
                    <h3 className="font-semibold text-black">Адрес</h3>
                    <p className="text-black">г. Москва, ул. Поклонная, 11 стр. 1А</p>
                    <Button 
                      size="sm"
                      variant="outline"
                      className="mt-2 border-slate-300 text-black hover:bg-[#f0ebe5]"
                      onClick={() => window.open('https://yandex.ru/maps/?text=' + encodeURIComponent('г. Москва, ул. Поклонная, 11 стр. 1А'), '_blank')}
                    >
                      Проложить маршрут
                    </Button>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-center space-x-4 p-4 bg-[#f0ebe5] rounded-xl">
                  <Clock className="h-8 w-8 text-slate-600" />
                  <div className="flex-1">
                    <h3 className="font-semibold text-black">Режим работы</h3>
                    <div className="text-black space-y-1">
                      <p>ПН-ПТ: 11:30-20:30</p>
                      <p>СБ: 12:00-17:00</p>
                      <p>ВС: выходной</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};
