import React, { useState } from 'react';
import { Cloud, Wind, MapPin, ThermometerSun, Calendar } from 'lucide-react';

function App() {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState<any>(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const getWeather = async () => {
    if (location.trim() === '') {
      setError('Please enter a location!');
      return;
    }

    setLoading(true);
    setError('');
    setWeatherData(null);

    try {
      const apiKey = 'b2730851fe2d4734a9b173218252202';
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=yes`
      );
      const data = await response.json();

      if (data.error) {
        setError(data.error.message);
        return;
      }

      setWeatherData(data);
    } catch (err) {
      setError('Unable to fetch weather data. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      getWeather();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        <div className="flex items-center justify-center mb-8">
          <Cloud className="w-8 h-8 text-blue-500 mr-2" />
          <h1 className="text-2xl font-bold text-gray-800">Weather App</h1>
        </div>

        <div className="space-y-4">
          <div className="relative">
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Enter Location"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            />
            <MapPin className="absolute right-3 top-3.5 text-gray-400" />
          </div>

          <button
            onClick={getWeather}
            disabled={loading}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Loading...' : 'Get Weather'}
          </button>

          {error && (
            <div className="text-red-500 text-center py-2">{error}</div>
          )}

          {weatherData && (
            <div className="bg-blue-50 rounded-lg p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-blue-500 mr-2" />
                  <span className="font-medium text-gray-700">
                    {weatherData.location.name}, {weatherData.location.country}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <ThermometerSun className="w-5 h-5 text-orange-500 mr-2" />
                  <div>
                    <p className="text-sm text-gray-500">Temperature</p>
                    <p className="font-semibold">{weatherData.current.temp_c}°C</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Wind className="w-5 h-5 text-blue-500 mr-2" />
                  <div>
                    <p  className="text-sm text-gray-500">Wind Speed</p>
                    <p className="font-semibold">{weatherData.current.wind_kph} kph</p>
                  </div>
                </div>

                <div className="flex items-center col-span-2">
                  <Calendar className="w-5 h-5 text-purple-500 mr-2" />
                  <div>
                    <p className="text-sm text-gray-500">Local Time</p>
                    <p className="font-semibold">
                      {new Date(weatherData.location.localtime).toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;