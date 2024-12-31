import React from 'react';

const WeatherStat = ({ icon, label, value, theme }) => {
  return (
    <div className={`group flex items-center gap-2 ${theme.accent} rounded-xl p-4
                    backdrop-blur-sm transition-all duration-300
                    hover:scale-105 hover:shadow-lg border border-white/10`}>
      <div className={`text-3xl ${theme.text} transform transition-transform 
                    duration-300 group-hover:scale-110 group-hover:rotate-12`}>
        {icon}
      </div>
      <div>
        <p className={`text-sm ${theme.text}/70`}>{label}</p>
        <p className={`font-semibold ${theme.text} tracking-wide`}>{value}</p>
      </div>
    </div>
  );
};
export default WeatherStat;