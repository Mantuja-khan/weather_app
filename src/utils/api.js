import axios from 'axios';
import { API_CONFIG } from './config';

export const fetchWeatherData = async (city) => {
  try {
    const [currentWeather, forecast] = await Promise.all([
      axios.get(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.WEATHER}`, {
        params: {
          q: city,
          appid: API_CONFIG.API_KEY,
          units: API_CONFIG.UNITS
        }
      }),
      axios.get(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.FORECAST}`, {
        params: {
          q: city,
          appid: API_CONFIG.API_KEY,
          units: API_CONFIG.UNITS
        }
      })
    ]);

    // Process forecast data to get daily forecasts
    const dailyForecasts = processDailyForecasts(forecast.data.list);

    return { 
      data: {
        current: currentWeather.data,
        daily: dailyForecasts
      }, 
      error: null 
    };
  } catch (error) {
    return {
      data: null,
      error: error.response?.data?.message || 'City not found. Please try again.'
    };
  }
};

const processDailyForecasts = (forecastList) => {
  const dailyData = {};
  
  forecastList.forEach(forecast => {
    const date = new Date(forecast.dt * 1000).toLocaleDateString();
    
    if (!dailyData[date]) {
      dailyData[date] = {
        date: forecast.dt,
        temp: {
          min: forecast.main.temp_min,
          max: forecast.main.temp_max
        },
        weather: forecast.weather[0],
        humidity: forecast.main.humidity,
        wind: forecast.wind
      };
    } else {
      // Update min/max temperatures
      dailyData[date].temp.min = Math.min(dailyData[date].temp.min, forecast.main.temp_min);
      dailyData[date].temp.max = Math.max(dailyData[date].temp.max, forecast.main.temp_max);
    }
  });

  return Object.values(dailyData);
};