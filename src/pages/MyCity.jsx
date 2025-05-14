import React, { useState, useEffect } from "react";
import { fetchWeatherData } from "../api/weatherApi";

const MyCity = () => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getWeather = async () => {
      try {
        const data = await fetchWeatherData();
        setWeather(data);
      } catch (err) {
        setError(err.message);
      }
    };
    getWeather();
  }, []);

  return (
    <div className="page">
      <h1 className="centered-title">Моє місто — Коростень</h1>

      <div className="section animate-section">
        <h2>Про Коростень</h2>
        <p>
          Коростень — це місто в Житомирській області, відоме своєю багатою історією та культурною спадщиною. Засноване в 705 році,
          воно є одним із найдавніших міст України. Населення становить близько 65,000 осіб.
        </p>
      </div>

      <div className="section animate-section">
        <h2>Пам'ятки</h2>
        <p>
          У Коростені варто відвідати парк «Древлянський», музей історії міста та пам'ятник княгині Ользі. Місто також славиться
          фестивалем дерунів, який щороку приваблює туристів.
        </p>
      </div>

      <div className="city-image animate-section">
        <img src="https://vandrivka.com.ua/wp-content/uploads/2018/10/Park-Drevlyanskij-m.-Korosten-23.jpg" alt="Korosten" />
      </div>

      <div className="section animate-section">
        <h2>Погода в Коростені</h2>
        {error ? (
          <p>Помилка: {error}</p>
        ) : weather ? (
          <div className="weather-card">
            <p>Місто: {weather.name}, {weather.sys.country}</p>
            <p>Температура: {weather.main.temp}°C</p>
            <p>Погода: {weather.weather[0].description}</p>
            <p>Координати: {weather.coord.lat}, {weather.coord.lon}</p>
            <img
              src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
              alt="Weather icon"
            />
          </div>
        ) : (
          <p>Завантаження погоди...</p>
        )}
      </div>
    </div>
  );
};

export default MyCity;