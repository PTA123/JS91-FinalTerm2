import React from 'react';

const Weather = ({ data }) => {
  if (!data) {
    return null;
  }

  const weatherIcons = {
    Clear: "https://cdn-icons-png.flaticon.com/512/6974/6974833.png",
    Rain: "https://cdn-icons-png.flaticon.com/512/3351/3351979.png",
    Snow: "https://cdn-icons-png.flaticon.com/512/642/642102.png",
    Clouds: "https://cdn-icons-png.flaticon.com/512/414/414825.png",
    Haze: "https://cdn-icons-png.flaticon.com/512/1197/1197102.png",
    Smoke: "https://cdn-icons-png.flaticon.com/512/4380/4380458.png",
    Mist: "https://cdn-icons-png.flaticon.com/512/4005/4005901.png",
    Drizzle: "https://cdn-icons-png.flaticon.com/512/3076/3076129.png",
  };

  return (
    <div className='weather-board'>
      <div className={`weather-board ${data ? 'show' : ''}`}></div>
      <h2> {data.name}, {data.sys.country}</h2>
      <div className='symbol-form'>
        <i class="fa-solid fa-temperature-low"></i>
        <p className='temp'>Nhiệt độ: {data.main.temp} °C</p>
      </div>
      <div className='symbol-form'>
        <i class="fa-solid fa-arrow-up-right-from-square"></i>
        <p className='description'>Mô tả: {data.weather[0].description}</p>
      </div>
      <img src={weatherIcons[data.weather[0].main]} alt={data.weather[0].main} />
      <div className='symbol-form'>
        <i class="fa-solid fa-droplet"></i>
        <p className='humidity'>Độ ẩm: {data.main.humidity}%</p>
      </div>
    </div>
  );
};

export default Weather;
