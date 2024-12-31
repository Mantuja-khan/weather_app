import React from 'react';
import { WiDaySunny, WiCloudy, WiDayCloudyHigh, WiRain, WiSnow, 
         WiThunderstorm, WiDayHaze, WiNightClear } from 'react-icons/wi';

const AnimatedWeatherIcon = ({ iconCode, description }) => {
  const getIconComponent = () => {
    // Map OpenWeatherMap icon codes to our animated icons
    const iconMap = {
      '01d': { 
        icon: WiDaySunny, 
        className: 'text-yellow-400 animate-spin-slow',
        size: '6em' 
      },
      '01n': { 
        icon: WiNightClear, 
        className: 'text-gray-200',
        size: '6em' 
      },
      '02d': { 
        icon: WiDayCloudyHigh, 
        className: 'text-gray-200 animate-bounce-slow',
        size: '6em' 
      },
      '02n': { 
        icon: WiDayCloudyHigh, 
        className: 'text-gray-300',
        size: '6em' 
      },
      '03d': { 
        icon: WiCloudy, 
        className: 'text-gray-200 animate-pulse',
        size: '6em' 
      },
      '03n': { 
        icon: WiCloudy, 
        className: 'text-gray-300',
        size: '6em' 
      },
      '04d': { 
        icon: WiCloudy, 
        className: 'text-gray-300 animate-pulse',
        size: '6em' 
      },
      '04n': { 
        icon: WiCloudy, 
        className: 'text-gray-400',
        size: '6em' 
      },
      '09d': { 
        icon: WiRain, 
        className: 'text-blue-300 animate-bounce-slow',
        size: '6em' 
      },
      '09n': { 
        icon: WiRain, 
        className: 'text-blue-400',
        size: '6em' 
      },
      '10d': { 
        icon: WiRain, 
        className: 'text-blue-300 animate-bounce-slow',
        size: '6em' 
      },
      '10n': { 
        icon: WiRain, 
        className: 'text-blue-400',
        size: '6em' 
      },
      '11d': { 
        icon: WiThunderstorm, 
        className: 'text-yellow-300 animate-pulse',
        size: '6em' 
      },
      '11n': { 
        icon: WiThunderstorm, 
        className: 'text-yellow-400',
        size: '6em' 
      },
      '13d': { 
        icon: WiSnow, 
        className: 'text-blue-100 animate-bounce-slow',
        size: '6em' 
      },
      '13n': { 
        icon: WiSnow, 
        className: 'text-blue-200',
        size: '6em' 
      },
      '50d': { 
        icon: WiDayHaze, 
        className: 'text-gray-300 animate-pulse',
        size: '6em' 
      },
      '50n': { 
        icon: WiDayHaze, 
        className: 'text-gray-400',
        size: '6em' 
      }
    };

    return iconMap[iconCode] || iconMap['01d'];
  };

  const { icon: IconComponent, className, size } = getIconComponent();

  return (
    <div className="relative group">
      <IconComponent 
        className={`${className} transition-all duration-300 transform group-hover:scale-110`} 
        size={size}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/10 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                    rounded-full" />
    </div>
  );
};

export default AnimatedWeatherIcon;