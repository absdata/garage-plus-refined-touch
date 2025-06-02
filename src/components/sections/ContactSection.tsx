
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, MapPin, Clock } from 'lucide-react';

export const ContactSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-100 via-gray-100 to-slate-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">Свяжитесь с нами</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm rounded-2xl">
            <CardHeader className="text-center">
              <Phone className="h-12 w-12 text-slate-600 mx-auto mb-4" />
              <CardTitle className="text-slate-800">Телефон</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-slate-700 mb-4">+7 (495) 221-8480</p>
              <Button 
                className="bg-gradient-to-r from-slate-600 to-gray-600 hover:from-slate-700 hover:to-gray-700 text-white"
                onClick={() => window.open('tel:+74952218480')}
              >
                Позвонить
              </Button>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm rounded-2xl">
            <CardHeader className="text-center">
              <MapPin className="h-12 w-12 text-slate-600 mx-auto mb-4" />
              <CardTitle className="text-slate-800">Адрес</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-slate-700 mb-4">г. Москва, ул. Поклонная, 11 стр. 1А</p>
              <Button 
                variant="outline"
                className="border-slate-300 text-slate-700 hover:bg-slate-50"
                onClick={() => window.open('https://yandex.ru/maps/?text=' + encodeURIComponent('г. Москва, ул. Поклонная, 11 стр. 1А'), '_blank')}
              >
                Проложить маршрут
              </Button>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm rounded-2xl">
            <CardHeader className="text-center">
              <Clock className="h-12 w-12 text-slate-600 mx-auto mb-4" />
              <CardTitle className="text-slate-800">Режим работы</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-slate-700 space-y-1">
                <p>ПН-ПТ: 11:30-20:30</p>
                <p>СБ: 12:00-17:00</p>
                <p>ВС: выходной</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
