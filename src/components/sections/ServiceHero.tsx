import React, { useState, useEffect } from 'react';

export interface ServiceHeroProps {
  title: string;
  subtitle: string;
  description: string;
  price: string;
  duration?: string;
  image: string;
}

export const ServiceHero = ({ title, subtitle, description, price, duration, image }: ServiceHeroProps) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [imageDimensions, setImageDimensions] = useState({ width: 800, height: 600 });

  // Extract width and height from image URL if available (e.g., image-800x600.jpg)
  useEffect(() => {
    const match = image.match(/(\d+)x(\d+)\.\w+$/);
    if (match) {
      setImageDimensions({
        width: parseInt(match[1], 10),
        height: parseInt(match[2], 10)
      });
    }
  }, [image]);

  return (
    <section className="py-16 bg-gradient-to-br from-slate-100 via-gray-100 to-slate-100">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-800 to-gray-800 bg-clip-text text-transparent">
              {title}
            </h1>
            <h2 className="text-xl text-slate-600 mb-6">{subtitle}</h2>
            <p className="text-lg text-slate-700 mb-8 leading-relaxed">
              {description}
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-xl shadow-lg border border-slate-200">
                <span className="text-sm text-slate-600">Стоимость</span>
                <div className="text-2xl font-bold text-slate-800">{price}</div>
              </div>
              {duration && (
                <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-xl shadow-lg border border-slate-200">
                  <span className="text-sm text-slate-600">Время</span>
                  <div className="text-2xl font-bold text-slate-800">{duration}</div>
                </div>
              )}
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
            <div 
              className={`absolute inset-0 transition-opacity duration-500 ${
                isImageLoaded ? 'opacity-0' : 'opacity-100'
              }`}
              style={{
                background: 'linear-gradient(90deg, #f1f5f9 0%, #e2e8f0 50%, #f1f5f9 100%)',
                backgroundSize: '200% 100%',
                animation: 'shimmer 2s infinite',
              }}
            />
            <img 
              src={image} 
              alt={title}
              className={`w-full h-full object-cover transition-opacity duration-500 ${
                isImageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              loading="eager"
              width={imageDimensions.width}
              height={imageDimensions.height}
              onLoad={() => setIsImageLoaded(true)}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
