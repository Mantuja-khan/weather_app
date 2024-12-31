import React from 'react';

const LoadingSpinner = ({ size = 'md', color = 'white' }) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  return (
    <div className={`relative ${sizeClasses[size]} animate-float`}>
      {/* Outer spinning ring */}
      <div className={`absolute w-full h-full rounded-full border-4 
                    animate-[spin_3s_linear_infinite] 
                    ${color === 'white' ? 'border-white/20' : 'border-blue-300/20'}`} />
      
      {/* Middle pulsing ring */}
      <div className={`absolute w-3/4 h-3/4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                    rounded-full border-4 animate-[pulse_2s_ease-in-out_infinite] 
                    ${color === 'white' ? 'border-white/40' : 'border-blue-400/40'}`} />
      
      {/* Inner spinning ring */}
      <div className={`absolute w-1/2 h-1/2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                    rounded-full border-4 animate-[spin_1.5s_linear_infinite_reverse] 
                    ${color === 'white' ? 'border-white/60' : 'border-blue-500/60'}`} />
      
      {/* Center dot */}
      <div className={`absolute w-1/4 h-1/4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                    rounded-full animate-pulse 
                    ${color === 'white' ? 'bg-white' : 'bg-blue-600'}`} />
    </div>
  );
};

export default LoadingSpinner;