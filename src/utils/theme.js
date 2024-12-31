// Weather theme utilities based on weather conditions
export const getCardTheme = (iconCode) => {
    const themes = {
      // Clear Sky - Day
      '01d': {
        bg: 'from-sky-400 via-blue-500 to-blue-600',
        text: 'text-sky-50',
        accent: 'bg-yellow-400/20'
      },
      // Clear Sky - Night
      '01n': {
        bg: 'from-slate-900 via-blue-900 to-indigo-900',
        text: 'text-slate-100',
        accent: 'bg-slate-400/20'
      },
      // Few Clouds
      '02d': {
        bg: 'from-blue-400 via-sky-500 to-cyan-600',
        text: 'text-blue-50',
        accent: 'bg-white/20'
      },
      '02n': {
        bg: 'from-slate-800 via-blue-900 to-slate-900',
        text: 'text-slate-100',
        accent: 'bg-slate-300/20'
      },
      // Scattered Clouds
      '03d': {
        bg: 'from-gray-400 via-slate-500 to-gray-600',
        text: 'text-gray-100',
        accent: 'bg-white/20'
      },
      '03n': {
        bg: 'from-gray-800 via-slate-800 to-gray-900',
        text: 'text-gray-100',
        accent: 'bg-gray-300/20'
      },
      // Broken Clouds
      '04d': {
        bg: 'from-slate-500 via-gray-600 to-slate-700',
        text: 'text-slate-100',
        accent: 'bg-white/20'
      },
      '04n': {
        bg: 'from-slate-800 via-gray-900 to-slate-900',
        text: 'text-slate-100',
        accent: 'bg-slate-400/20'
      },
      // Rain Shower
      '09d': {
        bg: 'from-cyan-600 via-blue-700 to-blue-800',
        text: 'text-cyan-50',
        accent: 'bg-blue-300/20'
      },
      '09n': {
        bg: 'from-blue-900 via-slate-900 to-blue-950',
        text: 'text-blue-100',
        accent: 'bg-blue-400/20'
      },
      // Rain
      '10d': {
        bg: 'from-blue-500 via-indigo-600 to-blue-700',
        text: 'text-blue-50',
        accent: 'bg-blue-300/20'
      },
      '10n': {
        bg: 'from-blue-800 via-indigo-900 to-blue-950',
        text: 'text-blue-100',
        accent: 'bg-blue-400/20'
      },
      // Thunderstorm
      '11d': {
        bg: 'from-purple-600 via-slate-700 to-purple-900',
        text: 'text-purple-50',
        accent: 'bg-yellow-300/20'
      },
      '11n': {
        bg: 'from-purple-900 via-slate-900 to-purple-950',
        text: 'text-purple-100',
        accent: 'bg-purple-300/20'
      },
      // Snow
      '13d': {
        bg: 'from-blue-100 via-slate-200 to-blue-200',
        text: 'text-slate-800',
        accent: 'bg-white/40'
      },
      '13n': {
        bg: 'from-slate-300 via-blue-200 to-slate-400',
        text: 'text-slate-900',
        accent: 'bg-white/40'
      },
      // Mist/Fog
      '50d': {
        bg: 'from-gray-300 via-slate-400 to-gray-500',
        text: 'text-gray-900',
        accent: 'bg-white/30'
      },
      '50n': {
        bg: 'from-gray-600 via-slate-700 to-gray-800',
        text: 'text-gray-100',
        accent: 'bg-gray-400/20'
      }
    };
  
    return themes[iconCode] || themes['01d'];
  };