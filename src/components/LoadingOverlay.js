import React from 'react';
import { WiDaySunnyOvercast } from 'react-icons/wi';

const LoadingOverlay = () => {
  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md 
                    p-6 xs:p-8 rounded-2xl shadow-2xl border border-white/10
                    animate-[fadeIn_0.3s_ease-in-out]">
        <div className="flex flex-col items-center gap-4 xs:gap-6">
          {/* Animated Weather Icon */}
          <div className="relative">
            {/* Outer Ring */}
            <div className="w-16 xs:w-20 h-16 xs:h-20 rounded-full border-4 border-blue-400/30 
                         animate-[spin_3s_linear_infinite]" />
            {/* Middle Ring */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                         w-12 xs:w-16 h-12 xs:h-16 rounded-full border-4 border-yellow-400/40 
                         animate-[spin_2s_linear_infinite_reverse]" />
            {/* Inner Ring */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                         w-8 xs:w-12 h-8 xs:h-12 rounded-full border-4 border-white/50 
                         animate-pulse" />
            {/* Center Icon */}
            <WiDaySunnyOvercast className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                                       text-white/80 text-2xl xs:text-3xl animate-bounce" />
          </div>
          
          {/* Loading Text */}
          <div className="space-y-2 text-center">
            <p className="text-white text-base xs:text-lg font-medium">
              Loading weather data
            </p>
            {/* Animated Dots */}
            <div className="flex gap-1 justify-center">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-1.5 xs:w-2 h-1.5 xs:h-2 rounded-full bg-white/80"
                  style={{
                    animation: `bounce 1s ease-in-out ${i * 0.2}s infinite`
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoadingOverlay;