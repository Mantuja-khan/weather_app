import { useState } from 'react';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import LoadingOverlay from './components/LoadingOverlay';
import { fetchWeatherData } from './utils/api';

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const handleSearch = async () => {
    if (!city.trim()) return;
    setLoading(true);
    setError('');
    
    const { data, error: apiError } = await fetchWeatherData(city.trim());
    
    if (apiError) {
      setError(apiError);
      setWeatherData(null);
    } else {
      setWeatherData(data);
    }
    
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 
                    px-4 py-6 sm:p-8 md:p-12 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 sm:mb-8 md:mb-12 
                      text-center drop-shadow-lg tracking-tight">
          Weather Forecast
        </h1>
        
        <SearchBar 
          city={city}
          setCity={setCity}
          handleSearch={handleSearch}
          loading={loading}
        />
        
        {error && (
          <div className="w-full max-w-md mx-auto mb-6">
            <p className="text-white bg-red-500/50 px-4 py-3 rounded-xl text-center
                         backdrop-blur-md border-2 border-red-500/20">
              {error}
            </p>
          </div>
        )}
        
        {loading ? (
          <LoadingOverlay />
        ) : (
          <WeatherCard weatherData={weatherData} />
        )}
      </div>
    </div>
  );
}

export default App;