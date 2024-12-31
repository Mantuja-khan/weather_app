import React from 'react';
import WeatherIcon from './WeatherIcon';

const ForecastCard = ({ forecast, theme }) => {
  const date = new Date(forecast.date * 1000);
  const dayName = new Intl.DateTimeFormat('en-US', { weekday: 'short' }).format(date);
  const monthDay = new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric' }).format(date);

  return (
    <div className={`${theme.accent} p-2 xs:p-3 sm:p-4 rounded-xl backdrop-blur-sm
                    transform transition-all duration-300 
                    hover:scale-105 hover:shadow-xl border border-white/10`}>
      {/* Date Section */}
      <div className="text-center mb-1 xs:mb-2">
        <p className={`font-bold ${theme.text} text-sm xs:text-base sm:text-lg`}>
          {dayName}
        </p>
        <p className={`text-[10px] xs:text-xs sm:text-sm ${theme.text}/70 font-medium`}>
          {monthDay}
        </p>
      </div>
      
      {/* Weather Icon */}
      <div className="my-1 xs:my-2 sm:my-3 flex justify-center">
        <WeatherIcon 
          iconCode={forecast.weather.icon}
          size="clamp(2em, 5vw, 4em)"
          className="drop-shadow-lg"
        />
      </div>
      
      {/* Temperature and Description */}
      <div className="text-center space-y-1 xs:space-y-2">
        <div className={`flex items-center justify-center gap-1 xs:gap-2 
                      ${theme.text} font-bold`}>
          <span className="text-sm xs:text-base sm:text-lg">
            {Math.round(forecast.temp.max)}°
          </span>
          <span className={`${theme.text}/70 text-[10px] xs:text-xs sm:text-sm`}>
            {Math.round(forecast.temp.min)}°
          </span>
        </div>
        
        <p className={`text-[10px] xs:text-xs sm:text-sm ${theme.text}/90 capitalize 
                    px-1.5 xs:px-2 py-0.5 xs:py-1 rounded-full bg-white/10`}>
          {forecast.weather.description}
        </p>
        
        {/* Additional Weather Info */}
        <div className="grid grid-cols-2 gap-1 xs:gap-2 mt-1 xs:mt-2 text-[10px] xs:text-xs">
          <div className={`${theme.text}/90 bg-white/10 rounded-lg 
                        px-1 xs:px-2 py-0.5 xs:py-1 flex items-center justify-center gap-0.5 xs:gap-1`}>
            💨 {forecast.wind.speed}m/s
          </div>
          <div className={`${theme.text}/90 bg-white/10 rounded-lg 
                        px-1 xs:px-2 py-0.5 xs:py-1 flex items-center justify-center gap-0.5 xs:gap-1`}>
            💧 {forecast.humidity}%
          </div>
        </div>
      </div>
    </div>
  );
};
export default ForecastCard;