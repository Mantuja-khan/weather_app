import React from 'react';

const SkeletonWeatherStat = () => {
  return (
    <div className="flex items-center gap-2 bg-gray-700/30 rounded-xl p-4 animate-pulse">
      <div className="w-8 h-8 rounded-full bg-gray-600/50" />
      <div className="flex-1">
        <div className="w-16 h-4 bg-gray-600/50 rounded mb-2" />
        <div className="w-12 h-5 bg-gray-600/50 rounded" />
      </div>
    </div>
  );
};

export default SkeletonWeatherStat;