"use client";

import { WeatherCard } from "@/registry/new-york/ui/weather-card";

const weatherDataWithForecast = {
	coord: { lon: 139.6917, lat: 35.6895 },
	weather: [
		{
			id: 803,
			main: "Clouds",
			description: "broken clouds",
			icon: "04d",
		},
	],
	main: {
		temp: 18,
		feels_like: 17,
		temp_min: 16,
		temp_max: 20,
		pressure: 1015,
		humidity: 70,
	},
	visibility: 10000,
	wind: {
		speed: 4.5,
		deg: 150,
	},
	dt: 1699641600,
	sys: {
		country: "JP",
		sunrise: 1699566000,
		sunset: 1699604400,
	},
	timezone: 32400,
	name: "Tokyo",
	location: {
		city: "Tokyo",
		country: "Japan",
		region: null,
	},
	forecast: [
		{
			date: "2024-11-11",
			timestamp: 1699728000,
			temp_min: 16,
			temp_max: 22,
			humidity: 65,
			weather: {
				main: "Clear",
				description: "clear sky",
				icon: "01d",
			},
		},
		{
			date: "2024-11-12",
			timestamp: 1699814400,
			temp_min: 15,
			temp_max: 21,
			humidity: 68,
			weather: {
				main: "Clouds",
				description: "few clouds",
				icon: "02d",
			},
		},
		{
			date: "2024-11-13",
			timestamp: 1699900800,
			temp_min: 14,
			temp_max: 19,
			humidity: 72,
			weather: {
				main: "Rain",
				description: "light rain",
				icon: "10d",
			},
		},
		{
			date: "2024-11-14",
			timestamp: 1699987200,
			temp_min: 13,
			temp_max: 17,
			humidity: 75,
			weather: {
				main: "Rain",
				description: "moderate rain",
				icon: "10d",
			},
		},
		{
			date: "2024-11-15",
			timestamp: 1700073600,
			temp_min: 15,
			temp_max: 20,
			humidity: 70,
			weather: {
				main: "Clear",
				description: "clear sky",
				icon: "01d",
			},
		},
	],
};

export default function WeatherCardWithForecast() {
	return (
		<div className="flex justify-center">
			<WeatherCard weatherData={weatherDataWithForecast} />
		</div>
	);
}
