
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    comment: '',
    consent: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.consent) {
      toast({
        title: "Ошибка",
        description: "Необходимо согласие на обработку персональных данных",
        variant: "destructive",
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });

    // Reset form
    setFormData({
      name: '',
      phone: '',
      comment: '',
      consent: false
    });
  };

  return (
    <Card className="border-0 shadow-xl rounded-2xl">
      <CardHeader>
        <CardTitle className="text-2xl">Записаться на сервис</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Input
              placeholder="Ваше имя"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="rounded-xl border-gray-200 py-6 text-lg"
              required
            />
          </div>
          
          <div>
            <Input
              placeholder="Телефон"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              className="rounded-xl border-gray-200 py-6 text-lg"
              required
            />
          </div>
          
          <div>
            <Textarea
              placeholder="Комментарий к заявке"
              value={formData.comment}
              onChange={(e) => setFormData({...formData, comment: e.target.value})}
              className="rounded-xl border-gray-200 resize-none h-32"
            />
          </div>
          
          <div className="flex items-start space-x-3">
            <Checkbox
              id="consent"
              checked={formData.consent}
              onCheckedChange={(checked) => setFormData({...formData, consent: !!checked})}
              className="mt-1"
            />
            <label htmlFor="consent" className="text-sm text-gray-600 leading-relaxed">
              Согласен на обработку персональных данных в соответствии с политикой конфиденциальности
            </label>
          </div>
          
          <Button 
            type="submit" 
            size="lg"
            className="w-full bg-gray-900 hover:bg-gray-800 text-white py-6 text-lg font-medium rounded-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            Записаться
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
