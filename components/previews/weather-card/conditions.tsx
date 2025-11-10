"use client";

import { WeatherCard } from "@/registry/new-york/ui/weather-card";

// Clear sky
const clearWeatherData = {
  coord: { lon: -122.4194, lat: 37.7749 },
  weather: [{ id: 800, main: "Clear", description: "clear sky", icon: "01d" }],
  main: {
    temp: 24,
    feels_like: 23,
    temp_min: 20,
    temp_max: 27,
    pressure: 1015,
    humidity: 55,
  },
  visibility: 10000,
  wind: { speed: 3.5, deg: 180 },
  dt: 1699641600,
  sys: { country: "US", sunrise: 1699622400, sunset: 1699660800 },
  timezone: -28800,
  name: "San Francisco",
  location: {
    city: "San Francisco",
    country: "United States",
    region: "California",
  },
};

// Partly cloudy
const partlyCloudyData = {
  coord: { lon: 2.3522, lat: 48.8566 },
  weather: [
    { id: 801, main: "Clouds", description: "few clouds", icon: "02d" },
  ],
  main: {
    temp: 18,
    feels_like: 17,
    temp_min: 16,
    temp_max: 20,
    pressure: 1012,
    humidity: 60,
  },
  visibility: 10000,
  wind: { speed: 4.0, deg: 220 },
  dt: 1699641600,
  sys: { country: "FR", sunrise: 1699600800, sunset: 1699636800 },
  timezone: 3600,
  name: "Paris",
  location: { city: "Paris", country: "France", region: "Île-de-France" },
};

// Cloudy
const cloudyWeatherData = {
  coord: { lon: 139.6917, lat: 35.6895 },
  weather: [
    { id: 804, main: "Clouds", description: "overcast clouds", icon: "04d" },
  ],
  main: {
    temp: 16,
    feels_like: 15,
    temp_min: 14,
    temp_max: 18,
    pressure: 1010,
    humidity: 70,
  },
  visibility: 9000,
  wind: { speed: 3.0, deg: 150 },
  dt: 1699641600,
  sys: { country: "JP", sunrise: 1699566000, sunset: 1699604400 },
  timezone: 32400,
  name: "Tokyo",
  location: { city: "Tokyo", country: "Japan", region: null },
};

// Drizzle
const drizzleWeatherData = {
  coord: { lon: -2.9916, lat: 53.4084 },
  weather: [{ id: 301, main: "Drizzle", description: "drizzle", icon: "09d" }],
  main: {
    temp: 12,
    feels_like: 11,
    temp_min: 10,
    temp_max: 14,
    pressure: 1005,
    humidity: 82,
  },
  visibility: 8000,
  wind: { speed: 4.5, deg: 250 },
  dt: 1699641600,
  sys: { country: "GB", sunrise: 1699600000, sunset: 1699634000 },
  timezone: 0,
  name: "Liverpool",
  location: { city: "Liverpool", country: "United Kingdom", region: "England" },
};

// Rain
const rainyWeatherData = {
  coord: { lon: -0.1257, lat: 51.5085 },
  weather: [
    { id: 501, main: "Rain", description: "moderate rain", icon: "10d" },
  ],
  main: {
    temp: 13,
    feels_like: 12,
    temp_min: 11,
    temp_max: 15,
    pressure: 1008,
    humidity: 85,
  },
  visibility: 7000,
  wind: { speed: 5.5, deg: 240 },
  dt: 1699641600,
  sys: { country: "GB", sunrise: 1699598400, sunset: 1699632000 },
  timezone: 0,
  name: "London",
  location: { city: "London", country: "United Kingdom", region: null },
};

// Thunderstorm
const thunderstormWeatherData = {
  coord: { lon: 77.209, lat: 28.6139 },
  weather: [
    { id: 211, main: "Thunderstorm", description: "thunderstorm", icon: "11d" },
  ],
  main: {
    temp: 28,
    feels_like: 32,
    temp_min: 26,
    temp_max: 30,
    pressure: 1002,
    humidity: 88,
  },
  visibility: 6000,
  wind: { speed: 8.5, deg: 270 },
  dt: 1699641600,
  sys: { country: "IN", sunrise: 1699579200, sunset: 1699619400 },
  timezone: 19800,
  name: "Delhi",
  location: { city: "Delhi", country: "India", region: null },
};

// Snow
const snowyWeatherData = {
  coord: { lon: -74.006, lat: 40.7128 },
  weather: [{ id: 601, main: "Snow", description: "snow", icon: "13d" }],
  main: {
    temp: -2,
    feels_like: -6,
    temp_min: -4,
    temp_max: 0,
    pressure: 1020,
    humidity: 75,
  },
  visibility: 4000,
  wind: { speed: 4.0, deg: 320 },
  dt: 1699641600,
  sys: { country: "US", sunrise: 1699616400, sunset: 1699652400 },
  timezone: -18000,
  name: "New York",
  location: { city: "New York", country: "United States", region: "New York" },
};

// Mist
const mistWeatherData = {
  coord: { lon: -123.1207, lat: 49.2827 },
  weather: [{ id: 701, main: "Mist", description: "mist", icon: "50d" }],
  main: {
    temp: 10,
    feels_like: 9,
    temp_min: 8,
    temp_max: 12,
    pressure: 1013,
    humidity: 90,
  },
  visibility: 3000,
  wind: { speed: 2.5, deg: 180 },
  dt: 1699641600,
  sys: { country: "CA", sunrise: 1699624800, sunset: 1699659600 },
  timezone: -28800,
  name: "Vancouver",
  location: {
    city: "Vancouver",
    country: "Canada",
    region: "British Columbia",
  },
};

// Fog
const fogWeatherData = {
  coord: { lon: -122.4786, lat: 37.8199 },
  weather: [{ id: 741, main: "Fog", description: "fog", icon: "50d" }],
  main: {
    temp: 14,
    feels_like: 14,
    temp_min: 12,
    temp_max: 16,
    pressure: 1014,
    humidity: 95,
  },
  visibility: 1000,
  wind: { speed: 1.5, deg: 270 },
  dt: 1699641600,
  sys: { country: "US", sunrise: 1699622400, sunset: 1699660800 },
  timezone: -28800,
  name: "Oakland",
  location: { city: "Oakland", country: "United States", region: "California" },
};

// Haze
const hazeWeatherData = {
  coord: { lon: 121.4737, lat: 31.2304 },
  weather: [{ id: 721, main: "Haze", description: "haze", icon: "50d" }],
  main: {
    temp: 25,
    feels_like: 26,
    temp_min: 23,
    temp_max: 27,
    pressure: 1011,
    humidity: 68,
  },
  visibility: 5000,
  wind: { speed: 2.0, deg: 90 },
  dt: 1699641600,
  sys: { country: "CN", sunrise: 1699569600, sunset: 1699607400 },
  timezone: 28800,
  name: "Shanghai",
  location: { city: "Shanghai", country: "China", region: null },
};

// Dust
const dustWeatherData = {
  coord: { lon: 55.2708, lat: 25.2048 },
  weather: [{ id: 761, main: "Dust", description: "dust", icon: "50d" }],
  main: {
    temp: 32,
    feels_like: 36,
    temp_min: 30,
    temp_max: 34,
    pressure: 1008,
    humidity: 45,
  },
  visibility: 4000,
  wind: { speed: 6.0, deg: 45 },
  dt: 1699641600,
  sys: { country: "AE", sunrise: 1699588800, sunset: 1699627200 },
  timezone: 14400,
  name: "Dubai",
  location: { city: "Dubai", country: "UAE", region: null },
};

// Squall
const squallWeatherData = {
  coord: { lon: -87.6298, lat: 41.8781 },
  weather: [{ id: 771, main: "Squall", description: "squalls", icon: "50d" }],
  main: {
    temp: 8,
    feels_like: 4,
    temp_min: 6,
    temp_max: 10,
    pressure: 1000,
    humidity: 80,
  },
  visibility: 6000,
  wind: { speed: 12.0, deg: 290 },
  dt: 1699641600,
  sys: { country: "US", sunrise: 1699618800, sunset: 1699654800 },
  timezone: -21600,
  name: "Chicago",
  location: { city: "Chicago", country: "United States", region: "Illinois" },
};

export default function WeatherCardConditions() {
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-2">
      <WeatherCard
        weatherData={clearWeatherData}
        showForecast={false}
        showDetails={false}
      />
      <WeatherCard
        weatherData={partlyCloudyData}
        showForecast={false}
        showDetails={false}
      />
      <WeatherCard
        weatherData={cloudyWeatherData}
        showForecast={false}
        showDetails={false}
      />
      <WeatherCard
        weatherData={drizzleWeatherData}
        showForecast={false}
        showDetails={false}
      />
      <WeatherCard
        weatherData={rainyWeatherData}
        showForecast={false}
        showDetails={false}
      />
      <WeatherCard
        weatherData={thunderstormWeatherData}
        showForecast={false}
        showDetails={false}
      />
      <WeatherCard
        weatherData={snowyWeatherData}
        showForecast={false}
        showDetails={false}
      />
      <WeatherCard
        weatherData={mistWeatherData}
        showForecast={false}
        showDetails={false}
      />
      <WeatherCard
        weatherData={fogWeatherData}
        showForecast={false}
        showDetails={false}
      />
      <WeatherCard
        weatherData={hazeWeatherData}
        showForecast={false}
        showDetails={false}
      />
      <WeatherCard
        weatherData={dustWeatherData}
        showForecast={false}
        showDetails={false}
      />
      <WeatherCard
        weatherData={squallWeatherData}
        showForecast={false}
        showDetails={false}
      />
    </div>
  );
}
