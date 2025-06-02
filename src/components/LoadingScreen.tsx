import React from 'react';

export const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
      <div className="relative w-64 h-64">
        {/* Larger animated circle */}
        <div className="w-full h-full border-4 border-gray-200 border-t-gray-900 rounded-full animate-spin"></div>
        
        {/* Logo with proper proportions */}
        <div className="absolute inset-0 flex items-center justify-center p-0">
          <div className="w-1/2 h-auto aspect-square flex items-center justify-center">
            <img 
              src="/logo.png" 
              alt="GARAGE PLUS" 
              className="w-full h-auto max-h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
