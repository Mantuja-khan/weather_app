import React from 'react';
import { WiHumidity, WiStrongWind, WiThermometer, WiBarometer } from 'react-icons/wi';
import { FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import AnimatedWeatherIcon from './AnimatedWeatherIcon';
import ForecastCard from './ForecastCard';
import WeatherStat from './WeatherStat';
import { getCardTheme } from '../utils/theme';
import { formatDate } from '../utils/dateUtils';

const WeatherCard = ({ weatherData }) => {
  if (!weatherData) return null;

  const theme = getCardTheme(weatherData.current.weather[0].icon);

  return (
    <div className="w-full max-w-7xl mx-auto">
      {/* Current Weather Card */}
      <div className={`bg-gradient-to-br ${theme.bg} p-4 sm:p-6 md:p-8 rounded-2xl 
                    backdrop-blur-lg shadow-2xl border border-white/10 mb-6
                    hover:shadow-[0_0_50px_rgba(255,255,255,0.1)]
                    transition-all duration-500`}>
        {/* Location and Date Section - Now Vertical */}
        <div className="flex flex-col items-center gap-3 mb-6">
          {/* City Name with Icon */}
          <div className={`${theme.accent} px-6 py-3 rounded-2xl backdrop-blur-sm
                        shadow-lg border border-white/20 animate-float
                        hover:scale-105 transition-transform duration-300`}>
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className={`text-2xl sm:text-3xl ${theme.text} animate-bounce-slow`} />
              <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold ${theme.text}
                           tracking-wide`}>
                {weatherData.current.name}
              </h2>
            </div>
          </div>

          {/* Date with Icon */}
          <div className={`${theme.accent} px-4 py-2 rounded-xl backdrop-blur-sm
                        border border-white/10 hover:scale-105 
                        transition-transform duration-300`}>
            <div className="flex items-center gap-2">
              <FaCalendarAlt className={`${theme.text}`} />
              <p className={`${theme.text} text-sm sm:text-base font-medium`}>
                {formatDate(new Date())}
              </p>
            </div>
          </div>
        </div>

        {/* Rest of the weather card content remains the same */}
        <div className="relative">
          <div className="flex justify-center mb-4 transform hover:scale-110 
                       transition-transform duration-300">
            <AnimatedWeatherIcon 
              iconCode={weatherData.current.weather[0].icon}
              description={weatherData.current.weather[0].description}
            />
          </div>

          <div className="text-center space-y-2">
            <p className={`text-4xl sm:text-5xl md:text-6xl font-bold ${theme.text}
                        tracking-tight drop-shadow-lg animate-float`}>
              {Math.round(weatherData.current.main.temp)}°C
            </p>
            <p className={`text-base sm:text-lg md:text-xl ${theme.text} font-medium 
                        capitalize tracking-wide px-4 py-1 rounded-full 
                        ${theme.accent} inline-block`}>
              {weatherData.current.weather[0].description}
            </p>
          </div>
        </div>
        
        {/* Weather Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-6">
          <WeatherStat 
            icon={<WiThermometer />}
            label="Feels Like"
            value={`${Math.round(weatherData.current.main.feels_like)}°C`}
            theme={theme}
          />
          <WeatherStat 
            icon={<WiHumidity />}
            label="Humidity"
            value={`${weatherData.current.main.humidity}%`}
            theme={theme}
          />
          <WeatherStat 
            icon={<WiStrongWind />}
            label="Wind Speed"
            value={`${weatherData.current.wind.speed} m/s`}
            theme={theme}
          />
          <WeatherStat 
            icon={<WiBarometer />}
            label="Pressure"
            value={`${weatherData.current.main.pressure} hPa`}
            theme={theme}
          />
        </div>
      </div>

      {/* Forecast Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
        {weatherData.daily.slice(1, 6).map((forecast) => (
          <ForecastCard 
            key={forecast.date}
            forecast={forecast}
            theme={theme}
          />
        ))}
      </div>
      
      {/* Last Updated */}
      <div className={`mt-6 text-center ${theme.text} text-sm font-medium
                    px-3 py-1 rounded-full ${theme.accent} inline-block`}>
        Last updated: {new Date().toLocaleTimeString()}
      </div>
    </div>
  );
};

export default WeatherCard;