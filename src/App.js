// App.js

import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import Weather from './components/Weather';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showTitle, setShowTitle] = useState(true); // Tạo state cho việc hiển thị tiêu đề

  const searchWeather = async (city) => {
    try {
      setShowTitle(false); // Ẩn tiêu đề khi bắt đầu tìm kiếm
      setLoading(true); // Hiển thị loading indicator
      const apiKey = '847a75d1e3ff583a0ab0f1f5d45e4b75';
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
      setWeatherData(response.data);
      setError(null);
    } catch (err) {
      setWeatherData(null);
      setError('Không tìm thấy thông tin thời tiết cho thành phố này.');
    } finally {
      setLoading(false); // Ẩn loading indicator sau khi tìm kiếm hoàn tất
    }
  };

  return (
    <div>
      <header className="App-header">
        <div className='weather-form'>
          {showTitle && <h1>Ứng dụng thời tiết</h1>} {/* Hiển thị tiêu đề nếu showTitle là true */}
          <SearchBar onSearch={searchWeather} />
          <Weather data={weatherData} loading={loading} />
          {loading && <p>Đang tìm kiếm...</p>}
          {error && <p>{error}</p>}
        </div>
      </header>
    </div>
  );
};

export default App;
