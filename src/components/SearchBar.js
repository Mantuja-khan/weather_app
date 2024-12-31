import React from 'react';
import { FaSearch } from 'react-icons/fa';
import LoadingSpinner from './LoadingSpinner';

const SearchBar = ({ city, setCity, handleSearch, loading }) => {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !loading) {
      handleSearch();
    }
  };

  return (
    <div className="flex flex-row items-stretch gap-2 w-full max-w-xl mx-auto mb-8 px-2 sm:px-0">
      <div className="relative flex-1 w-full min-w-0">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Enter city..."
          className="w-full h-10 sm:h-12 px-3 sm:px-4 py-2 pl-10 sm:pl-12 
                   rounded-lg sm:rounded-xl bg-white/10 backdrop-blur-md 
                   text-white placeholder-white/70 outline-none border-2 
                   border-white/20 focus:border-white/40 transition-all 
                   shadow-lg hover:shadow-xl focus:shadow-2xl 
                   text-sm sm:text-base"
          disabled={loading}
        />
        <FaSearch className="absolute left-3 sm:left-4 top-1/2 transform 
                          -translate-y-1/2 text-white/70 
                          text-base sm:text-xl" />
      </div>
      <button
        onClick={handleSearch}
        disabled={loading}
        className="h-10 sm:h-12 px-4 sm:px-6 bg-gradient-to-r 
                 from-blue-500 to-purple-600 rounded-lg sm:rounded-xl 
                 text-white font-semibold shadow-lg transform 
                 transition-all duration-200 hover:scale-105 
                 hover:shadow-xl active:scale-95 disabled:opacity-50 
                 disabled:cursor-not-allowed disabled:transform-none 
                 text-sm sm:text-base whitespace-nowrap 
                 min-w-[80px] sm:min-w-[100px] 
                 hover:from-blue-600 hover:to-purple-700 flex-shrink-0"
      >
        {loading ? (
          <span className="flex items-center justify-center gap-2">
            <LoadingSpinner size="sm" />
            <span className="sm:inline hidden">Searching</span>
          </span>
        ) : (
          'Search'
        )}
      </button>
    </div>
  );
};

export default SearchBar;