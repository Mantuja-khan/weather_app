import React from 'react';
import SkeletonWeatherStat from './SkeletonWeatherStat';
import SkeletonForecastCard from './SkeletonForecastCard';

const SkeletonWeatherCard = () => {
  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-4 sm:p-6 md:p-8 
                    rounded-2xl backdrop-blur-lg shadow-2xl border border-white/10 mb-6">
        {/* City and Date Skeleton */}
        <div className="flex flex-col items-center gap-3 mb-6">
          <div className="bg-gray-700/50 px-6 py-3 rounded-2xl w-48 h-12 animate-pulse" />
          <div className="bg-gray-700/50 px-4 py-2 rounded-xl w-36 h-8 animate-pulse" />
        </div>

        {/* Weather Icon and Temperature Skeleton */}
        <div className="relative">
          <div className="flex justify-center mb-4">
            <div className="w-24 h-24 rounded-full bg-gray-700/50 animate-pulse" />
          </div>

          <div className="text-center space-y-2">
            <div className="w-32 h-16 bg-gray-700/50 rounded-xl mx-auto animate-pulse" />
            <div className="w-48 h-8 bg-gray-700/50 rounded-full mx-auto animate-pulse" />
          </div>
        </div>

        {/* Weather Stats Grid Skeleton */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-6">
          {[...Array(4)].map((_, index) => (
            <SkeletonWeatherStat key={index} />
          ))}
        </div>
      </div>

      {/* Forecast Cards Grid Skeleton */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
        {[...Array(5)].map((_, index) => (
          <SkeletonForecastCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default SkeletonWeatherCard;