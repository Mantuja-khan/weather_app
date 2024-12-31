import React from 'react';
import {
  WiDaySunny, WiNightClear, WiDayCloudy, WiNightAltCloudy,
  WiCloud, WiCloudy, WiRain, WiDayRain, WiNightRain,
  WiThunderstorm, WiSnow, WiDayFog, WiNightFog
} from 'react-icons/wi';

const getWeatherTheme = (iconCode) => {
  const themes = {
    '01d': { bg: 'from-yellow-400 to-orange-500', text: 'text-yellow-100' },
    '01n': { bg: 'from-blue-900 to-gray-900', text: 'text-blue-100' },
    '02d': { bg: 'from-blue-400 to-blue-600', text: 'text-blue-100' },
    '02n': { bg: 'from-blue-800 to-gray-900', text: 'text-blue-100' },
    '03d': { bg: 'from-gray-400 to-gray-600', text: 'text-gray-100' },
    '03n': { bg: 'from-gray-700 to-gray-900', text: 'text-gray-100' },
    '04d': { bg: 'from-gray-500 to-gray-700', text: 'text-gray-100' },
    '04n': { bg: 'from-gray-800 to-gray-900', text: 'text-gray-100' },
    '09d': { bg: 'from-blue-500 to-blue-700', text: 'text-blue-100' },
    '09n': { bg: 'from-blue-800 to-gray-900', text: 'text-blue-100' },
    '10d': { bg: 'from-blue-400 to-blue-600', text: 'text-blue-100' },
    '10n': { bg: 'from-blue-900 to-gray-900', text: 'text-blue-100' },
    '11d': { bg: 'from-gray-700 to-purple-900', text: 'text-purple-100' },
    '11n': { bg: 'from-gray-900 to-purple-900', text: 'text-purple-100' },
    '13d': { bg: 'from-blue-100 to-blue-300', text: 'text-blue-900' },
    '13n': { bg: 'from-blue-200 to-blue-400', text: 'text-blue-900' },
    '50d': { bg: 'from-gray-300 to-gray-500', text: 'text-gray-100' },
    '50n': { bg: 'from-gray-600 to-gray-800', text: 'text-gray-100' },
  };
  return themes[iconCode] || themes['01d'];
};

const WeatherIcon = ({ iconCode, size = '6em', className = '' }) => {
  const iconMap = {
    '01d': { icon: WiDaySunny, animation: 'animate-spin-slow' },
    '01n': { icon: WiNightClear, animation: 'animate-pulse-slow' },
    '02d': { icon: WiDayCloudy, animation: 'animate-float' },
    '02n': { icon: WiNightAltCloudy, animation: 'animate-float' },
    '03d': { icon: WiCloud, animation: 'animate-float' },
    '03n': { icon: WiCloud, animation: 'animate-float' },
    '04d': { icon: WiCloudy, animation: 'animate-float' },
    '04n': { icon: WiCloudy, animation: 'animate-float' },
    '09d': { icon: WiRain, animation: 'animate-bounce-slow' },
    '09n': { icon: WiRain, animation: 'animate-bounce-slow' },
    '10d': { icon: WiDayRain, animation: 'animate-bounce-slow' },
    '10n': { icon: WiNightRain, animation: 'animate-bounce-slow' },
    '11d': { icon: WiThunderstorm, animation: 'animate-pulse' },
    '11n': { icon: WiThunderstorm, animation: 'animate-pulse' },
    '13d': { icon: WiSnow, animation: 'animate-bounce-slow' },
    '13n': { icon: WiSnow, animation: 'animate-bounce-slow' },
    '50d': { icon: WiDayFog, animation: 'animate-pulse-slow' },
    '50n': { icon: WiNightFog, animation: 'animate-pulse-slow' },
  };

  const { icon: Icon, animation } = iconMap[iconCode] || iconMap['01d'];
  const theme = getWeatherTheme(iconCode);

  return (
    <div className={`relative group ${theme.text}`}>
      <Icon 
        className={`${animation} ${className} transition-all duration-300 
                   transform group-hover:scale-110`}
        size={size}
      />
      <div className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 
                      transition-opacity duration-300 bg-gradient-to-b ${theme.bg}`} />
    </div>
  );
};

export default WeatherIcon;