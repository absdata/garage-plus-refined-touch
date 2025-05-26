
import React from 'react';

export const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
      <div className="relative">
        {/* Animated circle */}
        <div className="w-24 h-24 border-4 border-gray-200 border-t-gray-900 rounded-full animate-spin"></div>
        
        {/* Logo in center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-lg font-bold text-gray-900">GARAGE</div>
            <div className="text-sm font-bold text-gray-600">PLUS</div>
          </div>
        </div>
      </div>
    </div>
  );
};
