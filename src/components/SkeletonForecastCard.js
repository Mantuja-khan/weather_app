import React from 'react';

const SkeletonForecastCard = () => {
  return (
    <div className="bg-gray-700/30 p-2 xs:p-3 sm:p-4 rounded-xl animate-pulse">
      {/* Date Skeleton */}
      <div className="text-center mb-2">
        <div className="w-12 h-4 bg-gray-600/50 rounded mx-auto mb-1" />
        <div className="w-16 h-3 bg-gray-600/50 rounded mx-auto" />
      </div>

      {/* Weather Icon Skeleton */}
      <div className="my-3 flex justify-center">
        <div className="w-12 h-12 rounded-full bg-gray-600/50" />
      </div>

      {/* Temperature and Description Skeleton */}
      <div className="text-center space-y-2">
        <div className="w-16 h-5 bg-gray-600/50 rounded mx-auto" />
        <div className="w-20 h-4 bg-gray-600/50 rounded-full mx-auto" />
      </div>

      {/* Additional Info Skeleton */}
      <div className="grid grid-cols-2 gap-1 mt-2">
        <div className="h-6 bg-gray-600/50 rounded" />
        <div className="h-6 bg-gray-600/50 rounded" />
      </div>
    </div>
  );
};

export default SkeletonForecastCard;
